import { Allow, IsDefined, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindUserByPhoneDto {
    @ApiProperty({ example: '1234567890', description: 'телефон' })
    @Allow()
    @IsDefined()
    @IsNotEmpty()
    phone: string|number;
}
