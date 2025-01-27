import { Participante, Prisma } from '@prisma/client'

export interface ParticipanteRepo {
  findById(id: string): Promise<Participante | null>
  findByEmail(email: string): Promise<Participante | null>
  create(data: Prisma.ParticipanteCreateInput): Promise<Participante>
  findByCpf(cpf: string): Promise<Participante | null>
}
