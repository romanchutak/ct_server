import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsDefined, IsNotEmpty } from 'class-validator';

export class ConfirmDto {

    @ApiProperty({ example: '9871234567', description: 'Телефон' })
    @Allow()
    @IsNotEmpty()
    @IsDefined()
    phone: string;

    @ApiProperty({ example: '123456', description: 'Проверочный код' })
    @Allow()
    @IsNotEmpty()
    @IsDefined()
    confirmCode: string;
}
