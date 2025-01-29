import { ParticipantRepository } from '../../repository/participant-repository'
import { AuthenticateParticipantUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  // serve mais como solução para testes e injeção de dependência ao que parece
  const usersRepository = new ParticipantRepository()
  const useCase = new AuthenticateParticipantUseCase(usersRepository)

  return useCase
}
