import { Test, TestingModule } from '@nestjs/testing';
import { UiOptionsService } from './ui-options.service';

describe('UiOptionsService', () => {
  let service: UiOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UiOptionsService],
    }).compile();

    service = module.get<UiOptionsService>(UiOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
