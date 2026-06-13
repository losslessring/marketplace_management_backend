import { Injectable, NotFoundException } from '@nestjs/common'
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

  async getApplication(applicationId: number) {
    try {
      return {
        ...(await this.prismaService.application.findUniqueOrThrow({
          where: { id: applicationId },
        })),
      }
    } catch (err) {
      throw new NotFoundException(
        `Application with ID ${applicationId} was not found`,
      )
    }
  }
}
