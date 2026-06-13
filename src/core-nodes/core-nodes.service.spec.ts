import { Test, TestingModule } from '@nestjs/testing'
import { CoreNodesService } from './core-nodes.service'

describe('CoreCoreNodesService', () => {
  let service: CoreNodesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoreNodesService],
    }).compile()

    service = module.get<CoreNodesService>(CoreNodesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
