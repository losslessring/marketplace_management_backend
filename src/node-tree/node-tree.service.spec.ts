import { Test, TestingModule } from '@nestjs/testing';
import { NodeTreeService } from './node-tree.service';

describe('NodeTreeService', () => {
  let service: NodeTreeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NodeTreeService],
    }).compile();

    service = module.get<NodeTreeService>(NodeTreeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
