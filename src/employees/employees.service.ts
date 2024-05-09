import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { EmployementProofDto } from './dto/employmentProof.dto';

@Injectable()
export class EmployeesService {
  private readonly employees: Employee[] = [];

  findAll(): Employee[] {
    return this.employees;
  }

  findById(id: number): Employee {
    return this.employees.find((emp) => emp.id === id);
  }

  getEmploymentProof(employmentProofDto: EmployementProofDto): {
    link: string;
  } {
    console.log('employment proff details requested:', employmentProofDto);
    return {
      link: `https://www.microsoft.com/employmentproof/${employmentProofDto.empId}/mypage.pdf`,
    };
  }

  create(employee: CreateEmployeeDto): Employee {
    const newEmployee = { ...employee, id: this.employees.length + 1 };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  update(id: number, employee: UpdateEmployeeDto): Employee {
    const index = this.employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      const emp = this.employees[index];
      this.employees[index] = { ...emp, ...employee, id };
      return this.employees[index];
    }
    return null;
  }

  delete(id: number): Employee {
    const index = this.employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      const deletedEmployee = this.employees[index];
      this.employees.splice(index, 1);
      return deletedEmployee;
    }
    return null;
  }
}
