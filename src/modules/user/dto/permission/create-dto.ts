import { Allow, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
    @ApiProperty({ example: 'Редактирование пользователя', description: 'Название доступа' })
    @Allow()
    @IsNotEmpty()
    title: string

    @ApiProperty({ example: 'user.update', description: 'Код доступа' })
    @Allow()
    @IsNotEmpty()
    code: string

    @ApiProperty({ example: 'user', description: 'Группа прав' })
    @Allow()
    @IsNotEmpty()
    group: string
}
