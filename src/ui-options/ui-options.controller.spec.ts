import { Test, TestingModule } from '@nestjs/testing';
import { UiOptionsController } from './ui-options.controller';

describe('UiOptionsController', () => {
  let controller: UiOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UiOptionsController],
    }).compile();

    controller = module.get<UiOptionsController>(UiOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
