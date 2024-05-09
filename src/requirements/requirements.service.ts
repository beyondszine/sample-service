import { Injectable } from '@nestjs/common';
import { CreateRequirementDto } from './dto/create-requirement.dto';
import { UpdateRequirementDto } from './dto/update-requirement.dto';

@Injectable()
export class RequirementsService {
  private readonly requirements = [];

  create(createRequirementDto: CreateRequirementDto) {
    const newRequirement = {
      ...createRequirementDto,
      id: this.requirements.length + 1,
    };
    this.requirements.push(newRequirement);
    return newRequirement;
  }

  findAll() {
    return this.requirements;
  }

  findOne(id: number) {
    return this.requirements.find((req) => req.id === id);
  }

  findByType(type: number) {
    return this.requirements.filter((req) => req.type === type);
  }

  delete(id: number) {
    const index = this.requirements.findIndex((req) => req.id === id);
    if (index !== -1) {
      const deletedRequirement = this.requirements[index];
      this.requirements.splice(id, 1);
      return deletedRequirement;
    }
    return null;
  }

  update(id: number, updateRequirementDto: UpdateRequirementDto) {
    const index = this.requirements.findIndex((req) => req.id === id);
    if (index != -1) {
      const req = this.requirements[index];
      this.requirements[index] = { ...req, ...updateRequirementDto, id };
      return this.requirements[index];
    }
    return null;
  }
}
