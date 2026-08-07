import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { NodeDataController } from './node-data.controller'
import { NodeDataService } from './node-data.service'

@Module({
  imports: [PrismaModule],
  controllers: [NodeDataController],
  providers: [NodeDataService],
})
export class NodeDataModule {}
