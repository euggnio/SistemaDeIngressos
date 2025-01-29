/* eslint-disable prettier/prettier */
import { FastifyReply, FastifyRequest } from "fastify";
import { makeAuthenticateUseCase } from "@/use-cases/factories/makeAuthenticateUseCase";
import { z } from "zod";


export async function login(request: FastifyRequest, reply: FastifyReply) {
    const loginBody = z.object({
        email: z.string().email(),
        password: z.string().min(8).max(45),
    })

    const { email, password } = loginBody.parse(request.body)

    try {
        const authenticateUseCase = makeAuthenticateUseCase()
    
        const { participant } = await authenticateUseCase.execute({
          email,
          password,
        })
    
        const token = await reply.jwtSign(
          {
            sign: {
              sub: participant.id,
            },
          },
        )

    
        const refreshToken = await reply.jwtSign(
          {
            sign: {
              sub: participant.id,
              expiresIn: '7d',

            },
          },
        )
    
        return reply
          .setCookie('refreshToken', refreshToken, {
            // criamos um cookie pro refreshToken pois ele é um token
            // que não deve ser acessível para o back-end da aplicação
            path: '/',
            // path define que rotas poderam usa-lo, neste caso colocamos que todas
            secure: true,
            // garante que o front-end nao conseguira ler o token como uma informaçao
            // bruta
            sameSite: true,
            // definimos que o cookie sera acessado apenas pelo mesmo dominio
            httpOnly: true,
            
            // cookie será acessado apenas pelo back-end(atraves de reply e request)
          })
          .status(200)
          .send({
            token,
          })
      } catch (err) {

          return Error('Something happened, and we dont know what it is')

      }
    } 