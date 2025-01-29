import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

import { ParticipanteInterface } from './interfaces/participante-interface'

export class ParticipantRepository implements ParticipanteInterface {
  async findById(id: string) {
    const user = await prisma.participant.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async findByEmail(email: string) {
    const participante = await prisma.participant.findFirst({
      where: {
        email,
      },
    })

    return participante
  }

  async create(data: Prisma.ParticipantCreateInput) {
    const participante = await prisma.participant.create({
      data,
    })

    return participante
  }

  async findByCpf(cpf: string) {
    const participante = await prisma.participant.findFirst({
      where: {
        cpf,
      },
    })

    return participante
  }

  async update(id: string, data: Prisma.ParticipantUpdateInput) {
    const participante = await prisma.participant.update({
      where: {
        id,
      },
      data,
    })

    return participante
  }

  async findAll() {
    const participantes = await prisma.participant.findMany()

    return participantes
  }
}
