import { Test, TestingModule } from '@nestjs/testing';
import { SupportedtypesService } from './supportedtypes.service';

describe('SupportedtypesService', () => {
  let service: SupportedtypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupportedtypesService],
    }).compile();

    service = module.get<SupportedtypesService>(SupportedtypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
