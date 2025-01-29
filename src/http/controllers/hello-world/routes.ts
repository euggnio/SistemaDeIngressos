/* eslint-disable prettier/prettier */
import { FastifyInstance } from 'fastify'
import { helloWorld } from './hello-world'
import { register } from './participants/register'
import { login } from './participants/login'
import { listar } from './participants/participantList'


export function routes(app: FastifyInstance) {
  app.post('/register', register)
  app.get('/', helloWorld)
  app.post('/login', login)
  app.get('/participants', listar)
}
