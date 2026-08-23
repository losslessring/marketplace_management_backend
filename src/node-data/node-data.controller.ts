import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { UpdateNodeData } from './dto/update-node-data'
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

  @Put(':ApplicationId')
  @UseGuards(JwtAuthGuard)
  async updateNodeData(
    @Param('ApplicationId') applicationId: string,
    @Body() body: UpdateNodeData,
  ) {
    return this.nodeDataService.updateNodeData(+applicationId, body)
  }
}
