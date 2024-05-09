// src/employees/dto/create-employee.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class EmployementProofDto {
  @ApiProperty({
    example: 1,
    description: 'The type of the employment proof',
  })
  type: number;

  @ApiProperty({
    example: [{ startDate: '01-01-24', endDate: '01-01-25' }],
    description: 'The input values as per reason/type of the employment proof',
  })
  values: [object];

  @ApiProperty({
    example: 1,
    description: 'The employee id of the employment proof',
  })
  empId: number;
}
