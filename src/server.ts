/* eslint-disable prettier/prettier */
import { app } from './app'
import { env } from './env'
import { helloWorldRoutes } from './http/controllers/hello-world/routes'
import { ParticipanteRepository } from './repository/participante-repository'

app.register(helloWorldRoutes)
const participante = new ParticipanteRepository()
participante.create({
  nomeCompleto: 'Eugenio',
  email: 'euggnio@gmail.com',
  senha: '123456',
  telefone: '123456789',
  cpf: '123456789',
  data_nasc : new Date(),
  saldo: 0,
  fotoPerfil: 'foto',  
}).then((result) => {
  console.log(result)
})

participante.findById('1').then((result) => {
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
