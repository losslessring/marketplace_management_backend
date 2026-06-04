import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateApplicationRequest } from './dto/create-application.request'

@Injectable()
export class ApplicationsService {
  constructor(private readonly prismaService: PrismaService) {}
  async createApplication(data: CreateApplicationRequest, userId: number) {
    return this.prismaService.application.create({
      data: {
        ...data,
        userId,
      },
    })
  }

  async getApplications(userId: number) {
    return this.prismaService.application.findMany({
      where: {
        userId: {
          equals: userId,
        },
      },
    })
  }
}
