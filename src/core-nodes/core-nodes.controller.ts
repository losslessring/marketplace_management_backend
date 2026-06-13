import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user.decorator'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { TokenPayload } from 'src/auth/token-payload.interface'
import { CoreNodesService } from './core-nodes.service'
import { CreateCoreNodeRequest } from './dto/create-core-node.request'

@Controller('core-nodes')
export class CoreNodesController {
  constructor(private readonly coreNodeService: CoreNodesService) {}
  @Post()
  @UseGuards(JwtAuthGuard)
  async createCoreNode(
    @Body() body: CreateCoreNodeRequest,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.coreNodeService.createCoreNode(body, user.userId)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getCoreNodes(@CurrentUser() user: TokenPayload) {
    return this.coreNodeService.getCoreNodes()
  }

  @Get(':CoreNodeId')
  @UseGuards(JwtAuthGuard)
  async getCoreNode(@Param('CoreNodeId') CoreNodeId: string) {
    return this.coreNodeService.getCoreNode(+CoreNodeId)
  }
}
