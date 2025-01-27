/* eslint-disable prettier/prettier */
import { FastifyInstance } from 'fastify'
import { helloWorld } from './hello-world'

export function helloWorldRoutes(app: FastifyInstance) {
  app.get('/', helloWorld)
}
