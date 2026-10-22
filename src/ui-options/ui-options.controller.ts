import { Controller, Get, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user.decorator'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { TokenPayload } from 'src/auth/token-payload.interface'
import { UiOptionsService } from './ui-options.service'

@Controller('ui-options')
export class UiOptionsController {
  constructor(private readonly applicationService: UiOptionsService) {}
  @Get()
  @UseGuards(JwtAuthGuard)
  async getOptions(@CurrentUser() user: TokenPayload) {
    return this.applicationService.getOptions(user.userId)
  }
}
