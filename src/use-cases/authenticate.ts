import { ParticipantRepository } from '@/repository/participant-repository'
import { Participant } from '@prisma/client'
import { compare } from 'bcryptjs'

// data for login
interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

// return data for login
interface AuthenticateUseCaseResponse {
  participant: Participant
}

export class AuthenticateParticipantUseCase {
  constructor(private participantRepository: ParticipantRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const participant = await this.participantRepository.findByEmail(email)

    if (!participant) {
      throw Error('User not found')
    }

    const doestPasswordMatches = await compare(password, participant.password)

    if (!doestPasswordMatches) {
      throw new Error('Password does not match')
    }

    return {
      participant,
    }
  }
}
