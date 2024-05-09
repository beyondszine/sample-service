// src/employees/dto/create-employee.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the Employee',
  })
  name: string;

  @ApiProperty({
    example: 'a@company.com',
    description: 'The email of the Employee',
  })
  email: string;

  @ApiProperty({
    example: 'Engineering',
    description: 'The department of the Employee',
  })
  department: string;

  @ApiProperty({
    example: 'Software Engineer',
    description: 'The position of the Employee',
  })
  position: string;
  // Add any other properties you want to include
}
