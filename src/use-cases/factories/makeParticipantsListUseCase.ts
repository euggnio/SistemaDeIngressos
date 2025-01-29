import { ParticipantRepository } from '../../repository/participant-repository'
import { ListParticipantUseCase } from '../listParticipants'

export function makeParticipantListUseCase() {
  // serve mais como solução para testes e injeção de dependência ao que parece
  const usersRepository = new ParticipantRepository()
  const useCase = new ListParticipantUseCase(usersRepository)

  return useCase
}
