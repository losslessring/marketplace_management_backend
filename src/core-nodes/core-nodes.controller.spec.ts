import { Test, TestingModule } from '@nestjs/testing'
import { CoreNodesController } from './core-nodes.controller'

describe('CoreNodesController', () => {
  let controller: CoreNodesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoreNodesController],
    }).compile()

    controller = module.get<CoreNodesController>(CoreNodesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
