import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateTreeNodeRequest } from './dto/create-tree-node.request'

@Injectable()
export class NodeTreeService {
  constructor(private readonly prismaService: PrismaService) {}
  async createTreeNode(data: CreateTreeNodeRequest, userId: number) {
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
    return this.prismaService.nodeTree.create({ data })
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
