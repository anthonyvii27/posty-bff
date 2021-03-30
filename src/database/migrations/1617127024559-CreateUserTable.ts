import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1617127024559 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: "username",
                        type: "varchar",
                        length: '30',
                        isUnique: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: 'email_verified',
                        type: 'boolean',
                        default: false,
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: 'first_name',
                        type: 'varchar',
                    },
                    {
                        name: 'last_name',
                        type: 'varchar',
                    },
                    {
                        name: 'photo_url',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: "bio",
                        type: "varchar",
                        length: '200',
                        isNullable: true
                    },
                    {
                        name: "country",
                        type: "varchar",
                        length: '50'
                    },
                    {
                        name: "link",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "birthdate",
                        type: "date"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "update_at",
                        type: "timestamp",
                        isNullable: true,
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('user');
    }
}
