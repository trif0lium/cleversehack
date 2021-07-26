import { Test, TestingModule } from '@nestjs/testing';
import { HospitelGateway } from './hospitel.gateway';

describe('HospitelGateway', () => {
  let gateway: HospitelGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HospitelGateway],
    }).compile();

    gateway = module.get<HospitelGateway>(HospitelGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
