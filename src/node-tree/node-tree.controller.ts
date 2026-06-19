import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user.decorator'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { TokenPayload } from 'src/auth/token-payload.interface'
import { CreateTreeNodeRequest } from './dto/create-tree-node.request'
import { NodeTreeService } from './node-tree.service'

@Controller('node-tree')
export class NodeTreeController {
  constructor(private readonly nodeTreeService: NodeTreeService) {}
  @Post()
  @UseGuards(JwtAuthGuard)
  async createCoreNode(
    @Body() body: CreateTreeNodeRequest,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.nodeTreeService.createTreeNode(body, user.userId)
  }

  //   @Get()
  //   @UseGuards(JwtAuthGuard)
  //   async getCoreNodes(@CurrentUser() user: TokenPayload) {
  //     return this.coreNodeService.getCoreNodes()
  //   }

  //   @Get(':CoreNodeId')
  //   @UseGuards(JwtAuthGuard)
  //   async getCoreNode(@Param('CoreNodeId') CoreNodeId: string) {
  //     return this.coreNodeService.getCoreNode(+CoreNodeId)
  //   }
}
