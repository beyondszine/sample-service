import { Injectable } from '@nestjs/common';
import { CreateSupportedtypeDto } from './dto/create-supportedtype.dto';
import { UpdateSupportedtypeDto } from './dto/update-supportedtype.dto';

@Injectable()
export class SupportedtypesService {
  private readonly supportedtypes = [];

  findAll() {
    return this.supportedtypes;
  }

  findById(id: number) {
    return this.supportedtypes.find((st) => st.id === id);
  }

  findByEmpId(empId: number) {
    return this.supportedtypes.filter((st) => st.empId === empId);
  }

  create(supportedtype: CreateSupportedtypeDto) {
    const newSupportedtype = {
      ...supportedtype,
      id: this.supportedtypes.length + 1,
    };
    this.supportedtypes.push(newSupportedtype);
    return newSupportedtype;
  }

  update(id: number, supportedtype: UpdateSupportedtypeDto) {
    const index = this.supportedtypes.findIndex((st) => st.id === id);
    if (index !== -1) {
      const st = this.supportedtypes[index];
      this.supportedtypes[index] = { ...st, ...supportedtype, id };
      return this.supportedtypes[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.supportedtypes.findIndex((st) => st.id === id);
    if (index !== -1) {
      const deletedSupportedtype = this.supportedtypes[index];
      this.supportedtypes.splice(index, 1);
      return deletedSupportedtype;
    }
    return null;
  }
}
