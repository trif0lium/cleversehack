import { Test, TestingModule } from '@nestjs/testing';
import { HospitelController } from './hospitel.controller';

describe('HospitelController', () => {
  let controller: HospitelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HospitelController],
    }).compile();

    controller = module.get<HospitelController>(HospitelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
