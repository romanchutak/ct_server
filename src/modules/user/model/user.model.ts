import {
    Table,
    Model,
    Column,
    Unique,
    DataType,
    AllowNull,
    PrimaryKey,
} from 'sequelize-typescript';

import { ApiProperty } from '@nestjs/swagger';

type TUserCA = {
  name: string;
}

@Table({ tableName: 'user', timestamps: false })
export class UserModel
    extends Model<UserModel, TUserCA> {
  @ApiProperty({ example: 1, description: 'ID пользователя' })
  @Unique
  @PrimaryKey
  @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 'Ivan', description: 'Name' })
  @AllowNull(false)
  @Column({
      type: DataType.STRING,
  })
  name: string;
}
