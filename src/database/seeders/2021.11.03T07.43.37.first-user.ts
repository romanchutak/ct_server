import { Sequelize } from 'sequelize';
import { MigrationFn } from 'umzug';
import * as bcrypt from 'bcryptjs';
import { v4 } from 'uuid';

export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {

    const t = await sequelize.transaction();

    try {
        await sequelize.getQueryInterface().bulkInsert('user', [{
            phone: 9526704919,
            uid: v4(),
            firstname: 'Роман',
            email: 'roman.chutak@gmail.com',
            role: 'grand',
            password: await bcrypt.hash('123456', 6)
        }], { transaction: t });

        await sequelize.getQueryInterface().bulkInsert('permission', [{
            title: 'Полные привилегии',
            code: '*'
        }], { transaction: t });

        await sequelize.getQueryInterface().bulkInsert('user_permission', [{
            user_id: 1,
            permission_id: 1,
        }], { transaction: t });

        await t.commit();

    } catch (e) {
        console.log(e);
        await t.rollback();
    }
};

export const down: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
    await sequelize.query('SET foreign_key_checks = 0');
    await sequelize.query('TRUNCATE TABLE `user_permission`');
    await sequelize.query('TRUNCATE TABLE `permission`');
    await sequelize.query('TRUNCATE TABLE `user`');
    await sequelize.query('SET foreign_key_checks = 1');
};
