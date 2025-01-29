/* eslint-disable prettier/prettier */
import { ParticipantRepository } from "@/repository/participant-repository";
import { hash } from "bcryptjs";
import { Participant } from "@prisma/client";


// data comming from the controller
interface ParticipantData{
    name: string
    email: string
    password: string
    cpf: string
    phone: string
    birth_date: string
    image: string
}
// data returned to the controller
interface ParticipantResponse{
    participant: Participant;
}

export class RegisterParticipantUseCase{
    constructor(private participantRepository: ParticipantRepository){}

    async execute(data: ParticipantData): Promise<ParticipantResponse>{
        const passwordHash = await hash(data.password, 8);
        
        const EmailAlreadyExists = await new ParticipantRepository().findByEmail(data.email);
        if(EmailAlreadyExists){
            console.log(EmailAlreadyExists);
            throw new Error("Email already exists");
        }

        const participant = await new ParticipantRepository().create({
            name: data.name,
            email: data.email,
            password: passwordHash,
            cpf: data.cpf,
            phone: data.phone,
            birth_date: data.birth_date,
            balance: 0,
            image: "null",
        });
        return {participant};
    }   

}
