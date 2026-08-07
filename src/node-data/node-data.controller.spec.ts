import { Test, TestingModule } from '@nestjs/testing';
import { NodeDataController } from './node-data.controller';

describe('NodeDataController', () => {
  let controller: NodeDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NodeDataController],
    }).compile();

    controller = module.get<NodeDataController>(NodeDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
