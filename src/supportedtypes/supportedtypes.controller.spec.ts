import { Test, TestingModule } from '@nestjs/testing';
import { SupportedtypesController } from './supportedtypes.controller';
import { SupportedtypesService } from './supportedtypes.service';

describe('SupportedtypesController', () => {
  let controller: SupportedtypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupportedtypesController],
      providers: [SupportedtypesService],
    }).compile();

    controller = module.get<SupportedtypesController>(SupportedtypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
