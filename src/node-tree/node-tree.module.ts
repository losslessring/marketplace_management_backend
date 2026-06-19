import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { NodeTreeController } from './node-tree.controller'
import { NodeTreeService } from './node-tree.service'

@Module({
  imports: [PrismaModule],
  controllers: [NodeTreeController],
  providers: [NodeTreeService],
})
export class NodeTreeModule {}
