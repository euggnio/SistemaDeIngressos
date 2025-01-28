import { Event, Prisma } from '@prisma/client'

export interface EventInterface {
  findById(id: string): Promise<Event | null>
  create(data: Prisma.EventCreateInput): Promise<Event>
  findAll(): Promise<Event[]>
  findByStatus(status: string): Promise<Event[]>
  findByName(name: string): Promise<Event | null>
  update(id: string, data: Prisma.EventUpdateInput): Promise<Event>
  delete(id: string): Promise<Event>
}
