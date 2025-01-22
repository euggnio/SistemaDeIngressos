import { FastifyInstance } from 'fastify'
import { helloWorld } from './hello-world'

export async function helloWorldRoutes(app: FastifyInstance) {
  app.get('/', helloWorld)
}
