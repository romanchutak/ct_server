import {
    Inject,
    Injectable,
} from '@nestjs/common';


import { UserModel } from '../model/user.model';
import { CreateUserDto } from '../dto/create-user-dto';

@Injectable()
export class UserService {

    constructor(
        @Inject('USER_MODEL')
        private readonly repository: typeof UserModel,
    ) {}

    async all() {
        return await this.repository.findAll();
    }

    async create(dto: CreateUserDto) {

        return await this.repository.create(dto);
    }

    async read(id: number): Promise<UserModel> {

        return await this.repository.findByPk(id);
    }
}
