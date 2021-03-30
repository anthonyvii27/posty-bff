import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateReportsTable1617132351773 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'report',
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true,
                    },
                    {
                        name: 'id_user',
                        type: 'varchar',
                    },
                    {
                        name: "content",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: 'user_fk',
                        columnNames: ['id_user'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'user',
                    }
                ]
            })
        )
    }   

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('report');
    }
}
