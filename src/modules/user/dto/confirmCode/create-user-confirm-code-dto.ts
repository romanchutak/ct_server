import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsDefined, IsNotEmpty } from 'class-validator';

export class CreateUserConfirmCodeDto {

    @ApiProperty({ example: 1, description: 'ID пользователя' })
    @Allow()
    @IsDefined()
    @IsNotEmpty()
    userId: number;

    @ApiProperty({ example: 'user.reset.password', description: 'Цель' })
    @Allow()
    @IsDefined()
    @IsNotEmpty()
    target: string;
}
