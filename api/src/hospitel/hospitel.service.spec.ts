import { Test, TestingModule } from '@nestjs/testing';
import { HospitelService } from './hospitel.service';

describe('HospitelService', () => {
  let service: HospitelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HospitelService],
    }).compile();

    service = module.get<HospitelService>(HospitelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
