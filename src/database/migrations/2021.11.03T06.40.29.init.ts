import { Sequelize } from 'sequelize';
import { MigrationFn } from 'umzug';

export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
    await sequelize.query('CREATE TABLE IF NOT EXISTS `user` (`id` INTEGER auto_increment UNIQUE , `uid` CHAR(36) BINARY UNIQUE, `role` VARCHAR(255) DEFAULT "user", `firstname` VARCHAR(255), `lastname` VARCHAR(255), `middlename` VARCHAR(255), `email` VARCHAR(255), `phone` DECIMAL NOT NULL UNIQUE, `birthdate` DATE, `password` VARCHAR(255), `confirm_code` VARCHAR(255), `is_blocked` TINYINT(1) NOT NULL DEFAULT 0, `block_reason` VARCHAR(255), `block_description` VARCHAR(255), `created_at` DATETIME, `created_by` VARCHAR(255), `updated_at` DATETIME, `updated_by` VARCHAR(255), `deleted_at` DATETIME, `deleted_by` VARCHAR(255), UNIQUE `29a3b381-36c3-4066-baab-b56b5343ffde` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB;');

    await sequelize.query('CREATE TABLE IF NOT EXISTS `user_refresh_token` (`token` CHAR(36) BINARY, `user_agent` VARCHAR(255), `expires_in` DATETIME, `created_by` INTEGER, PRIMARY KEY (`token`), FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;');

    await sequelize.query('CREATE TABLE IF NOT EXISTS `permission` (`id` INTEGER NOT NULL auto_increment , `title` VARCHAR(255), `code` VARCHAR(255), `created_at` DATETIME, `created_by` INTEGER, `updated_at` DATETIME, `updated_by` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE, FOREIGN KEY (`updated_by`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;');

    await sequelize.query('CREATE TABLE IF NOT EXISTS `user_permission` (`id` INTEGER NOT NULL auto_increment , `user_id` INTEGER, `permission_id` INTEGER, `is_enabled` TINYINT(1) DEFAULT true, `created_at` DATETIME, `created_by` INTEGER, `updated_at` DATETIME, `updated_by` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE, FOREIGN KEY (`updated_by`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;');
};
export const down: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().dropTable('user_permission');
    await sequelize.getQueryInterface().dropTable('permission');
    await sequelize.getQueryInterface().dropTable('user_refresh_token');
    await sequelize.getQueryInterface().dropTable('user');
};
