import { Test, TestingModule } from '@nestjs/testing';
import { NodeTreeController } from './node-tree.controller';

describe('NodeTreeController', () => {
  let controller: NodeTreeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NodeTreeController],
    }).compile();

    controller = module.get<NodeTreeController>(NodeTreeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
