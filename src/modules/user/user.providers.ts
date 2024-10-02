import { UserModel } from './model/user.model';

export const userProviders = [
    {
        provide: 'USER_MODEL',
        useValue: UserModel,
    }
];
