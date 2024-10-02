import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Allow, IsDateString, IsEmail, IsString, ValidateIf } from 'class-validator';

export class CreateUserDto {
    @ApiPropertyOptional({ example: '9998884567', description: 'Телефон' })
    @Allow()
    readonly phone?: number|string;

    @ApiPropertyOptional({ example: '1234567890', description: 'ИНН или название агентства' })
    @Allow()
    readonly inn?: string;

    @ApiPropertyOptional({ example: 'user', description: 'Роль' })
    @Allow()
    readonly role?: string;

    @ApiPropertyOptional({ example: '9993334567', description: 'Подменный телефон' })
    @Allow()
    @ValidateIf((object, value) => value !== null)
    readonly replacementPhone?: number|string;

    @ApiPropertyOptional({ example: 1, description: 'Активирован подменный телефон или нет' })
    @Allow()
    readonly isReplacementPhoneActive?: boolean;

    @ApiProperty({ example: 'Иван', description: 'Имя' })
    @Allow()
    @IsString({
        message: 'Поле должно быть строкой'
    })
    readonly firstname?: string;

    @ApiPropertyOptional({ example: 'Иванов', description: 'Фамилия' })
    @Allow()
    @IsString({
        message: 'Поле должно быть строкой'
    })
    readonly lastname?: string;

    @ApiPropertyOptional({ example: 'Иванович', description: 'Отчество' })
    @Allow()
    @IsString({
        message: 'Поле должно быть строкой'
    })
    readonly middlename?: string;

    @ApiPropertyOptional({ example: '1988-04-28', description: 'Возраст пользователя' })
    @Allow()
    @ValidateIf((object, value) => value !== null)
    @IsDateString({}, { message: 'Введите корректную дату' })
    readonly birthdate?: Date;

    @ApiPropertyOptional({ example: '123@mail.ru', description: 'Email' })
    @Allow()
    @ValidateIf((object, value) => value !== null)
    @IsEmail({}, {
        message: 'Email не корректный'
    })
    readonly email?: string;
}
