/* eslint-disable prettier/prettier */
import { app } from './app'
import { env } from './env'
import { routes } from './http/controllers/hello-world/routes'

app.register(routes)

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running!')
  })
