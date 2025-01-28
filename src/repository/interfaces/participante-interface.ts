import { Participant, Prisma } from '@prisma/client'

export interface ParticipanteInterface {
  findById(id: string): Promise<Participant | null>
  findByEmail(email: string): Promise<Participant | null>
  create(data: Prisma.ParticipantCreateInput): Promise<Participant>
  findByCpf(cpf: string): Promise<Participant | null>
  update(id: string, data: Prisma.ParticipantUpdateInput): Promise<Participant>
}
