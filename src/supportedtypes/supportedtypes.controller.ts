import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Query,
} from '@nestjs/common';
import { SupportedtypesService } from './supportedtypes.service';
import { CreateSupportedtypeDto } from './dto/create-supportedtype.dto';
import { UpdateSupportedtypeDto } from './dto/update-supportedtype.dto';

@Controller('supportedtypes')
export class SupportedtypesController {
  constructor(private readonly supportedtypesService: SupportedtypesService) {}

  @Post()
  create(@Body() createSupportedtypeDto: CreateSupportedtypeDto) {
    return this.supportedtypesService.create(createSupportedtypeDto);
  }

  // this is to support all sorts of filters.  ex: ?where={"empId":1,"name":"test"}
  @Get()
  findAll(@Query('empId') empId: string) {
    console.debug('empId recieved:', empId);
    if (empId) return this.supportedtypesService.findByEmpId(+empId);
    return this.supportedtypesService.findAll();
  }

  // @Get(':id/requirements')
  // findByEmpId(@Param('empId') empId: string) {
  //   return this.supportedtypesService.findByEmpId(parseInt(empId));
  // }

  @Get(':id')
  findOne(@Param('id') id: number, @Param('empId') empId: number) {
    if (id) return this.supportedtypesService.findById(+id);
    if (empId) return this.supportedtypesService.findByEmpId(+empId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSupportedtypeDto: UpdateSupportedtypeDto,
  ) {
    return this.supportedtypesService.update(+id, updateSupportedtypeDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supportedtypesService.delete(+id);
  }
}
