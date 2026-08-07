import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { NodeDataService } from './node-data.service'

@Controller('node-data')
export class NodeDataController {
  constructor(private readonly nodeDataService: NodeDataService) {}
  @Get(':NodeId')
  @UseGuards(JwtAuthGuard)
  async getNodeData(@Param('NodeId') nodeId: string) {
    return this.nodeDataService.getNodeData(+nodeId)
  }

  @Post(':ApplicationId')
  @UseGuards(JwtAuthGuard)
  async getApplicationNodes(@Param('ApplicationId') applicationId: string) {
    return this.nodeDataService.getNodesData(+applicationId)
  }
}
