/* eslint-disable prettier/prettier */
import { Organizer, Prisma } from '@prisma/client'

export interface OrganizerInterface {
  findById(id: string): Promise<Organizer | null>
  create(data: Prisma.OrganizerCreateInput): Promise<Organizer>
  findAll(): Promise<Organizer[]>
  findBySocialName(name: string): Promise<Organizer | null>
  update(id: string, data: Prisma.OrganizerUpdateInput): Promise<Organizer>
  delete(id: string): Promise<Organizer>
}
