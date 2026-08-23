import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateTreeNodesRequest } from './dto/create-tree-nodes.request'
import { DeleteTreeNodesRequest } from './dto/delete-tree-nodes.request'
import { FullUpdateTreeNodes } from './dto/full-update-tree-nodes.request'

@Injectable()
export class NodeTreeService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTreeNodes(data: CreateTreeNodesRequest, userId: number) {
    // const application = await this.prismaService.application.findUnique({
    //   where: { id: data.applicationId },
    // })

    // if (!application) {
    //   throw new NotFoundException(
    //     `Application with id ${data.applicationId} was not found`,
    //   )
    // }

    // if (application.userId !== userId) {
    //   throw new ForbiddenException(
    //     `Application with id ${data.applicationId} does not belong to User with id ${userId}`,
    //   )
    // }

    const labeledNodes = data.nodes.map((node) => ({
      ...node,
      applicationId: data.applicationId,
    }))

    return this.prismaService.nodeTree.createMany({ data: labeledNodes })
  }

  async fullUpdateTreeNodes(userId: number, data: FullUpdateTreeNodes) {
    const labeledNodes = data.nodes.map((node) => ({
      ...node,
      applicationId: data.applicationId,
    }))

    // return await this.prismaService.$transaction([
    // this.prismaService.nodeTree.deleteMany({
    //   where: { applicationId: data.applicationId },
    // }),
    // this.prismaService.nodeTree.createMany({ data: labeledNodes }),
    // return await this.prismaService.$transaction([

    // for (const updateData of labeledNodes) {
    // return await this.prismaService.$transaction(async (tx) =>
    return labeledNodes.map(async (updateData) => {
      await this.prismaService.nodeTree.upsert({
        where: {
          applicationId: updateData.applicationId,
          nodeId: updateData.nodeId,
        },
        update: {
          positionX: updateData.positionX,
          positionY: updateData.positionY,
        },
        create: {
          positionX: updateData.positionX,
          positionY: updateData.positionY,
          nodeId: updateData.nodeId,
          applicationId: updateData.applicationId,
        },
      })
    })
  }

  async getApplicationNodes(applicationId: number) {
    return await this.prismaService.nodeTree.findMany({
      select: { positionX: true, positionY: true, nodeId: true },
      where: { applicationId },
    })
  }

  async deleteTreeNodes(userId: number, data: DeleteTreeNodesRequest) {
    return await this.prismaService.nodeTree.deleteMany({
      where: { applicationId: data.applicationId, nodeId: { in: data.ids } },
    })
  }
}
