import { Allow } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRefreshTokenDto {
    @ApiProperty({
        example: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
        description: 'User Agent'
    })
    @Allow()
    userAgent: string;
}
