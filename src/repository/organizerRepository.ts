/* eslint-disable prettier/prettier */
import { prisma } from '@/lib/prisma'
import { Organizer, Prisma } from '@prisma/client'

import { OrganizerInterface } from './interfaces/organizer-interface'

export class OrganizerRepository implements OrganizerInterface {
    async findById(id: string) {
        const user = await prisma.organizer.findUnique({
            where: {
                id,
            },
        })

        return user
    }

    async create(data: Prisma.OrganizerCreateInput) {
        const event = await prisma.organizer.create({
            data,
        })

        return event
    }

    async findAll() {
        const events = await prisma.organizer.findMany()

        return events
    }


    async findBySocialName(name: string) {
        const event = await prisma.organizer.findFirst({
            where: {
                socialName: name,
            },
        })

        return event
    }

    async update(id: string, data: Prisma.OrganizerUpdateInput): Promise<Organizer> {
        const event = await prisma.organizer.update({
            where: {
                id,
            },
            data,
        })

        return event
    }

    async delete(id: string) {
        const event = await prisma.organizer.delete({
            where: {
                id,
            },
        })

        return event
    }


}
