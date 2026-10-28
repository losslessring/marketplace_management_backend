import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUiOptionsRequest } from './dto/create-ui-options.request'
import { PatchUiOptionsRequest } from './dto/patch-ui-options.request'

@Injectable()
export class UiOptionsService {
  constructor(private readonly prismaService: PrismaService) {}
  async getUiOptions(_userId: number) {
    const uiOptionsFromDatabase = await this.prismaService.uiOption.findFirst({
      where: {
        userId: {
          equals: _userId,
        },
      },
    })

    if (!uiOptionsFromDatabase) {
      throw new NotFoundException(
        `User interface options for this user was not found`,
      )
    }

    const { id, userId, ...uiOptions } = uiOptionsFromDatabase

    return uiOptions
  }

  async createUiOptions(body: CreateUiOptionsRequest, userId: number) {
    try {
      await this.prismaService.uiOption.create({
        data: {
          userId,
          globalBackgroundColor: body.globalBackgroundColor,
          globalFontColor: body.globalFontColor,
        },
      })
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'The resource already exists (unique field conflict)',
        )
      }

      throw error
    }
  }

  async patchUiOptions(update: PatchUiOptionsRequest, _userId: number) {
    try {
      // return await this.prismaService.uiOption.update({
      //   where: { userId },
      //   data: update,
      // })

      const uiOptionsFromDatabase = await this.prismaService.uiOption.upsert({
        where: { userId: _userId },
        update: { ...update },
        create: {
          userId: _userId,
          ...update,
        },
      })

      const { id, userId, ...uiOptions } = uiOptionsFromDatabase

      return uiOptions
    } catch (error) {
      throw error
    }
  }
  async deleteUiOptions(userId: number) {
    try {
      return await this.prismaService.uiOption.delete({
        where: { userId },
      })
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`User interface options was not found`)
      }
      throw error
    }
  }
}
