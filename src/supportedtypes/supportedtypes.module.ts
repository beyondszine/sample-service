import { Module } from '@nestjs/common';
import { SupportedtypesService } from './supportedtypes.service';
import { SupportedtypesController } from './supportedtypes.controller';

@Module({
  controllers: [SupportedtypesController],
  providers: [SupportedtypesService],
})
export class SupportedtypesModule {}
