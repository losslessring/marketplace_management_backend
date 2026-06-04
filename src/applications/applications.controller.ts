import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user.decorator'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { TokenPayload } from 'src/auth/token-payload.interface'
import { ApplicationsService } from './applications.service'
import { CreateApplicationRequest } from './dto/create-application.request'

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationService: ApplicationsService) {}
  @Post()
  @UseGuards(JwtAuthGuard)
  async createApplication(
    @Body() body: CreateApplicationRequest,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.applicationService.createApplication(body, user.userId)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getApplications(@CurrentUser() user: TokenPayload) {
    return this.applicationService.getApplications(user.userId)
  }
}
