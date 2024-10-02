import { Allow, IsDefined, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindUserByFullnameDto {
    @ApiProperty({ example: 'Иванов', description: 'ФИО' })
    @Allow()
    @IsDefined()
    @IsNotEmpty()
    fullname: string;
}
