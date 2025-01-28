/* eslint-disable prettier/prettier */
import { app } from './app'
import { env } from './env'
import { registerRoute } from './http/controllers/hello-world/routes'
import { OrganizerRepository } from './repository/organizerRepository'

app.register(registerRoute)

const organizer = new OrganizerRepository()
organizer.create({
  socialName: 'Organizador 1',
  participant: {
    connect: { email: 'euggnio@gmail.com' }
  }
  }).then((result) => {
    console.log(result)
  })

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running!')
  })
