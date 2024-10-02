import {
    Get,
    Body,
    Post,
    Param,
    Controller,
} from '@nestjs/common';

import { UserService } from '../service/user.service';
import { UserModel } from '../model/user.model';
import { CreateUserDto } from '../dto/create-user-dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
    ) {}

    @ApiOperation({ summary: 'Получение списка пользователей' })
    @Get()
    all() {
        return this.userService.all();
    }

    @ApiOperation({ summary: 'Создание нового пользователя' })
    @ApiResponse({ status: 200, type: UserModel })
    @Post()
    create(@Body() dto: CreateUserDto): Promise<UserModel> {
        return this.userService.create(dto);
    }

    @ApiOperation({ summary: 'Получение информации об объекте' })
    @ApiResponse({ status: 200, type: UserModel })
    @Get(':id')
    read(@Param('id') id: number): Promise<UserModel> {
        return this.userService.read(id) as Promise<UserModel>;
    }
}
