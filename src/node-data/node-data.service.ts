import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class NodeDataService {
  constructor(private readonly prismaService: PrismaService) {}

  async getNodeData(nodeId: number) {
    return await this.prismaService.nodeData.findMany({
      select: { nodeId: true, nodeData: true },
      where: { nodeId },
    })
  }

  async getNodesData(applicationId: number) {
    return await this.prismaService.nodeData.findMany({
      select: { nodeId: true, nodeData: true },
      where: { applicationId },
    })
  }
}
