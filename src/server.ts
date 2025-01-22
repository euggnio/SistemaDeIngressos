import { app } from './app'
import { env } from './env'
import { helloWorldRoutes } from './http/controllers/hello-world/routes'

app.register(helloWorldRoutes)

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running!')
  })
