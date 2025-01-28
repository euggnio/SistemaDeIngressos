/* eslint-disable prettier/prettier */
import { FastifyInstance } from 'fastify'
import { helloWorld } from './hello-world'
import { register } from './participants/register'

export function helloWorldRoutes(app: FastifyInstance) {
  app.get('/', helloWorld)
}

export function registerRoute(app: FastifyInstance) {
  app.post('/register', register)
}
