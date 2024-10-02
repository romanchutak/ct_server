export type TUserConfirmCode = {
    id: number;
    userId: number;
    confirmCode: string;
    target: string;
    isFired: boolean;
    firedAt?: Date;
    createdAt?: Date;
};

export type TUserConfirmCodeCA = {
    userId: number;
    target: string;
    confirmCode: string;
};
