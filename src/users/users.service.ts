import { Injectable } from '@nestjs/common'
import { UnprocessableEntityException } from '@nestjs/common/exceptions'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma/prisma.service'
import {
  CreateUserRequest,
  CreateUserRequestOutput,
} from './dto/create-user.request'

import { Prisma } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(data: CreateUserRequest): Promise<CreateUserRequestOutput> {
    try {
      return await this.prismaService.user.create({
        data: {
          ...data,
          password: await bcrypt.hash(data.password, 10),
        },
        select: {
          email: true,
          id: true,
        },
      })
    } catch (error) {
      if (error.code === 'P2002') {
        throw new UnprocessableEntityException('Email already exists.')
      }
    }
  }

  async getUser(filter: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUniqueOrThrow({
      where: filter,
    })
  }
}
