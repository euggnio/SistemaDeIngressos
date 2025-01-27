import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

import { ParticipanteRepo } from './interfaces/participante-repo'

export class PrismaUsersRepository implements ParticipanteRepo {
  async findById(id: string) {
    const user = await prisma.participante.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async findByEmail(email: string) {
    const participante = await prisma.participante.findFirst({
      where: {
        email,
      },
    })

    return participante
  }

  async create(data: Prisma.ParticipanteCreateInput) {
    const participante = await prisma.participante.create({
      data,
    })

    return participante
  }

  async findByCpf(cpf: string) {
    const participante = await prisma.participante.findFirst({
      where: {
        cpf,
      },
    })

    return participante
  }
}