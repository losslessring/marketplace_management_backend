import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user.decorator'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { TokenPayload } from 'src/auth/token-payload.interface'
import { CreateUiOptionsRequest } from './dto/create-ui-options.request'
import { PatchUiOptionsRequest } from './dto/patch-ui-options.request'
import { UiOptionsService } from './ui-options.service'

@Controller('ui-options')
export class UiOptionsController {
  constructor(private readonly uiOptionsService: UiOptionsService) {}
  @Get()
  @UseGuards(JwtAuthGuard)
  async getUiOptions(@CurrentUser() user: TokenPayload) {
    return this.uiOptionsService.getUiOptions(user.userId)
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createUiOptions(
    @Body() body: CreateUiOptionsRequest,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.uiOptionsService.createUiOptions(body, user.userId)
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async patchUiOptions(
    @Body() body: PatchUiOptionsRequest,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.uiOptionsService.patchUiOptions(body, user.userId)
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async deleteUiOptions(@CurrentUser() user: TokenPayload) {
    return this.uiOptionsService.deleteUiOptions(user.userId)
  }
}
