import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateCoreNodeRequest } from './dto/create-core-node.request'

@Injectable()
export class CoreNodesService {
  constructor(private readonly prismaService: PrismaService) {}
  async createCoreNode(data: CreateCoreNodeRequest, userId: number) {
    return this.prismaService.coreNode.create({ data })
  }

  async getCoreNodes() {
    return this.prismaService.coreNode.findMany({})
  }

  async getCoreNode(CoreNodeId: number) {
    try {
      return {
        ...(await this.prismaService.coreNode.findUniqueOrThrow({
          where: { id: CoreNodeId },
        })),
      }
    } catch (err) {
      throw new NotFoundException(
        `CoreNode with ID ${CoreNodeId} was not found`,
      )
    }
  }
}
