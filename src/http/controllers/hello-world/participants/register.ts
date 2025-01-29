/* eslint-disable prettier/prettier */
import { FastifyReply, FastifyRequest } from "fastify";
import { makeRegisterUseCase } from "@/use-cases/factories/makeRegisterUseCase";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
// validate request body with zod    
// image will be added in update profile.
    const participantBody = z.object({
        name: z.string().max(45),
        email: z.string().email(),
        password: z.string().min(8).max(45),
        cpf: z.string().length(11),
        phone: z.string().length(11),
        birth_date: z.string(),
    })

    const { name, email, password, cpf, phone, birth_date } = participantBody.parse(request.body);
    

    try{
        const register = makeRegisterUseCase();
        await register.execute({name, email, password, cpf, phone, birth_date, image: "null"});
    }
    catch(err){
        return reply.status(400).send({
            message: "i dont know wft happened",
        });
    }

    return reply.status(201).send({
        message: "Participant created",
    });



}