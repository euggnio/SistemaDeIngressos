import { ParticipantRepository } from '../../repository/participant-repository'
import { RegisterParticipantUseCase } from '../register'

export function makeRegisterUseCase() {
  // serve mais como solução para testes e injeção de dependência ao que parece
  const usersRepository = new ParticipantRepository()
  const useCase = new RegisterParticipantUseCase(usersRepository)

  return useCase
}
