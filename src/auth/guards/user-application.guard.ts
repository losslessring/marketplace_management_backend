import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class UserApplicationGuard implements CanActivate {
  constructor(private readonly prismaService: PrismaService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    // console.log('Application id: ', request.body.applicationId)

    if (!request.body.applicationId) {
      throw new ForbiddenException(`Application id was not provided`)
    }

    const application = await this.prismaService.application.findUnique({
      where: { id: request.body.applicationId },
    })

    if (!application) {
      throw new NotFoundException(
        `Application with id ${request.body.applicationId} was not found`,
      )
    }

    if (application.userId !== request.user.userId) {
      throw new ForbiddenException(
        `Application with id ${request.body.applicationId} does not belong to User with id ${request.user.userId}`,
      )
    }
    return true
  }
}
