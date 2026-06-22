import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateTreeNodesRequest } from './dto/create-tree-nodes.request'

@Injectable()
export class NodeTreeService {
  constructor(private readonly prismaService: PrismaService) {}
  async createTreeNode(data: CreateTreeNodesRequest, userId: number) {
    const application = await this.prismaService.application.findUnique({
      where: { id: data.applicationId },
    })

    if (!application) {
      throw new NotFoundException(
        `Application with id ${data.applicationId} was not found`,
      )
    }

    if (application.userId !== userId) {
      throw new ForbiddenException(
        `Application with id ${data.applicationId} does not belong to User with id ${userId}`,
      )
    }

    const labeledNodes = data.nodes.map((node) => ({
      ...node,
      applicationId: data.applicationId,
    }))

    return this.prismaService.nodeTree.createMany({ data: labeledNodes })
  }

  async getApplicationNodes(applicationId: number) {
    return await this.prismaService.nodeTree.findMany({
      select: { positionX: true, positionY: true, nodeId: true },
      where: { applicationId },
    })
  }

  //   async getCoreNodes() {
  //     return this.prismaService.coreNode.findMany({})
  //   }

  //   async getCoreNode(CoreNodeId: number) {
  //     try {
  //       return {
  //         ...(await this.prismaService.coreNode.findUniqueOrThrow({
  //           where: { id: CoreNodeId },
  //         })),
  //       }
  //     } catch (err) {
  //       throw new NotFoundException(
  //         `CoreNode with ID ${CoreNodeId} was not found`,
  //       )
  //     }
  //   }
}
