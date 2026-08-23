import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { UpdateNodeData } from './dto/update-node-data'

@Injectable()
export class NodeDataService {
  constructor(private readonly prismaService: PrismaService) {}

  async getNodeData(nodeId: number) {
    return await this.prismaService.nodeData.findUniqueOrThrow({
      select: { nodeId: true, nodeData: true, nodeDataType: true },
      where: { nodeId },
    })
  }

  async getNodesData(applicationId: number) {
    return await this.prismaService.nodeData.findMany({
      select: { nodeId: true, nodeData: true, nodeDataType: true },
      where: { applicationId },
    })
  }

  async updateNodeData(applicationId: number, data: UpdateNodeData) {
    // return await this.prismaService.nodeData.update({
    //   where: { nodeId },
    //   data: { nodeData: data.nodeData, nodeDataType: data.nodeDataType },
    // })

    return await this.prismaService.nodeData.upsert({
      where: { nodeId: data.nodeId },
      update: { nodeData: data.nodeData, nodeDataType: data.nodeDataType },
      create: {
        nodeId: data.nodeId,
        applicationId: applicationId,
        nodeData: data.nodeData,
        nodeDataType: data.nodeDataType,
      },
    })
  }
}
