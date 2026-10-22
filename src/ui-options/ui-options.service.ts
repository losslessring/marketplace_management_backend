import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UiOptionsService {
  constructor(private readonly prismaService: PrismaService) {}
  async getOptions(userId: number) {
    return this.prismaService.uiOption.findFirst({
      where: {
        userId: {
          equals: userId,
        },
      },
    })
  }
}
