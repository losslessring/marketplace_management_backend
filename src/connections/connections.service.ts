import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateConnections } from './dto/create-connections.request'
import { FullUpdateConnections } from './dto/full-update-connections.resuest'

@Injectable()
export class ConnectionsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createConnections(data: CreateConnections, userId: number) {
    const applicationConnections = data.connections.map((connection) => ({
      ...connection,
      applicationId: data.applicationId,
    }))

    return this.prismaService.connection.createMany({
      data: applicationConnections,
    })
  }

  async fullUpdateConnections(userId: number, data: FullUpdateConnections) {
    const applicationConnections = data.connections.map((connection) => ({
      ...connection,
      applicationId: data.applicationId,
    }))

    return await this.prismaService.$transaction([
      this.prismaService.connection.deleteMany({
        where: { applicationId: data.applicationId },
      }),
      this.prismaService.connection.createMany({
        data: applicationConnections,
      }),
    ])
  }

  async getApplicationConnections(applicationId: number) {
    return await this.prismaService.connection.findMany({
      select: { fromId: true, toId: true },
      where: { applicationId },
    })
  }
}
