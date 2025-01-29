/* eslint-disable prettier/prettier */
import { FastifyReply, FastifyRequest } from "fastify";
import { makeParticipantListUseCase } from "@/use-cases/factories/makeParticipantsListUseCase";


export async function listar(request: FastifyRequest, reply: FastifyReply) {
    

    try{
        const participants = await makeParticipantListUseCase().execute();
        return reply.status(200).send(participants);
    }
    catch(err){
        return reply.status(400).send({
            message: "i dont know wft happened",
        });
    }
}