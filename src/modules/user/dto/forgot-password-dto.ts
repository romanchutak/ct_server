import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsDefined, IsNotEmpty } from 'class-validator';

export class ForgotPasswordDto {
    @ApiProperty({ example: '+79873213456', description: 'Телефон' })
    @Allow()
    @IsDefined()
    @IsNotEmpty()
    phone: string;
}
