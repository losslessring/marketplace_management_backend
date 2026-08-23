import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user.decorator'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { UserApplicationGuard } from 'src/auth/guards/user-application.guard'
import { TokenPayload } from 'src/auth/token-payload.interface'
import { CreateTreeNodesRequest } from './dto/create-tree-nodes.request'
import { DeleteTreeNodesRequest } from './dto/delete-tree-nodes.request'
import { FullUpdateTreeNodes } from './dto/full-update-tree-nodes.request'
import { NodeTreeService } from './node-tree.service'

@Controller('node-tree')
export class NodeTreeController {
  constructor(private readonly nodeTreeService: NodeTreeService) {}
  @Post()
  @UseGuards(JwtAuthGuard, UserApplicationGuard)
  async createTreeNodes(
    @Body() body: CreateTreeNodesRequest,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.nodeTreeService.createTreeNodes(body, user.userId)
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  async fullUpdateTreeNodes(
    @Body() body: FullUpdateTreeNodes,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.nodeTreeService.fullUpdateTreeNodes(user.userId, body)
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async deleteTreeNodes(
    @Body() body: DeleteTreeNodesRequest,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.nodeTreeService.deleteTreeNodes(user.userId, body)
  }

  @Get(':ApplicationId')
  @UseGuards(JwtAuthGuard)
  async getApplicationNodes(@Param('ApplicationId') applicationId: string) {
    return this.nodeTreeService.getApplicationNodes(+applicationId)
  }
}
