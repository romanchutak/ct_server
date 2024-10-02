import { Allow } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BlockUserDto {
    @ApiProperty({ example: 'fraud', description: 'Причина блокировки' })
    @Allow()
    blockReason: string;

    @Allow()
    @ApiProperty({ example: 'Lorem Ipsum...', description: 'Описание причины блокировки' })
    blockDescription: string;
}
