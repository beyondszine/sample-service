import { ApiProperty } from '@nestjs/swagger';

export class UpdateRequirementDto {
  @ApiProperty({
    example: '1',
    description: 'The type/reason id of the requirement.',
    required: false,
  })
  type: number;

  @ApiProperty({
    example: [{ startDate: '01-01-24', endDate: '01-01-25' }],
    description: 'The input values as per reason/type of the requirement.',
    required: false,
  })
  values: [object];
}
