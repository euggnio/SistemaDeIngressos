/* eslint-disable prettier/prettier */
import { ParticipantRepository } from "@/repository/participant-repository";
import { Participant } from "@prisma/client";

// data returned to the controller
interface ParticipantResponse{
    participant: Participant[];
}

export class ListParticipantUseCase{
    constructor(private participantRepository: ParticipantRepository){}

    async execute(): Promise<ParticipantResponse>{
        const participant = await new ParticipantRepository().findAll();
        return {participant};
    }   

}
