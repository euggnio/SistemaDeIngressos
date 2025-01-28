/* eslint-disable prettier/prettier */
import { prisma } from '@/lib/prisma'
import { Event, Prisma } from '@prisma/client'

import { EventInterface } from './interfaces/event-interface'

export class EventRepository implements EventInterface {
    async findById(id: string) {
        const user = await prisma.event.findUnique({
            where: {
                id,
            },
        })

        return user
    }

    async create(data: Prisma.EventCreateInput) {
        const event = await prisma.event.create({
            data,
        })

        return event
    }

    async findAll() {
        const events = await prisma.event.findMany()

        return events
    }

    async findByStatus(status: string) {
        const events = await prisma.event.findMany({
            where: {
                status,
            },
        })

        return events
    }

    async findByName(name: string) {
        const event = await prisma.event.findFirst({
            where: {
                name,
            },
        })

        return event
    }

    async update(id: string, data: Prisma.EventUpdateInput): Promise<Event> {
        const event = await prisma.event.update({
            where: {
                id,
            },
            data,
        })

        return event
    }

    async delete(id: string) {
        const event = await prisma.event.delete({
            where: {
                id,
            },
        })

        return event
    }

}
