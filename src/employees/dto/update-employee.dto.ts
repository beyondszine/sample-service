// src/employees/dto/create-employee.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the Employee',
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: 'a@company.com',
    description: 'The email of the Employee',
    required: false,
  })
  email?: string;

  @ApiProperty({
    example: 'Engineering',
    description: 'The department of the Employee',
    required: false,
  })
  department?: string;

  @ApiProperty({
    example: 'Software Engineer',
    description: 'The position of the Employee',
    required: false,
  })
  position?: string;
  // Add any other properties you want to include
}
