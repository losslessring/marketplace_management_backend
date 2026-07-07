import {
  Body,
  Controller,
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
import { ConnectionsService } from './connections.service'
import { CreateConnections } from './dto/create-connections.request'
import { FullUpdateConnections } from './dto/full-update-connections.resuest'

@Controller('connections')
export class ConnectionsController {
  constructor(private readonly connectionsService: ConnectionsService) {}
  @Post()
  @UseGuards(JwtAuthGuard, UserApplicationGuard)
  async createTreeNodes(
    @Body() body: CreateConnections,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.connectionsService.createConnections(body, user.userId)
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  async fullUpdateConnections(
    @Body() body: FullUpdateConnections,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.connectionsService.fullUpdateConnections(user.userId, body)
  }

  @Get(':ApplicationId')
  @UseGuards(JwtAuthGuard)
  async getApplicationConnections(
    @Param('ApplicationId') applicationId: string,
  ) {
    return this.connectionsService.getApplicationConnections(+applicationId)
  }
}
