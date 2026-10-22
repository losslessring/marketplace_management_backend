import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { UiOptionsController } from './ui-options.controller'
import { UiOptionsService } from './ui-options.service'

@Module({
  imports: [PrismaModule],
  controllers: [UiOptionsController],
  providers: [UiOptionsService],
})
export class UiOptionsModule {}
