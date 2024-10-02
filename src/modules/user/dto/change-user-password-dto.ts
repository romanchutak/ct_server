import { Allow, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangeUserPasswordDto {
    @ApiProperty({ example: '123456', description: 'Старый пароль' })
    @Allow()
    @IsString({
        message: 'Введите старый пароль'
    })
    old: string;

    @ApiProperty({ example: '1234567890', description: 'Новый пароль' })
    @Allow()
    @IsString({
        message: 'Введите новый пароль'
    })
    newpass: string;
}
