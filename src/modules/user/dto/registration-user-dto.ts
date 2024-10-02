import { Allow, IsDefined, IsIn, IsNotEmpty, ValidateIf } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegistrationUserDto {
    @ApiProperty({ example: 'Иван', description: 'Имя' })
    @Allow()
    readonly firstname: string;

    @ApiProperty({ example: '1234567890', description: 'Телефон' })
    @Allow()
    readonly phone: number|string;

    @ApiProperty({ example: '1234567890', description: 'ИНН или название агентства' })
    @Allow()
    @ValidateIf((o: RegistrationUserDto) => {
        return o.role === 'agent';
    })
    @IsNotEmpty()
    @IsDefined()
    readonly inn?: string;

    @ApiProperty({ example: 'user', description: 'Роль' })
    @IsIn(['user', 'agent'])
    @Allow()
    readonly role?: string;

    @ApiProperty({ example: '123456', description: 'Пароль' })
    @Allow()
    readonly password?: string;
}
