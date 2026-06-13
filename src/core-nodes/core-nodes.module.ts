import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { CoreNodesController } from './core-nodes.controller'
import { CoreNodesService } from './core-nodes.service'

@Module({
  imports: [PrismaModule],
  controllers: [CoreNodesController],
  providers: [CoreNodesService],
})
export class CoreNodesModule {}
