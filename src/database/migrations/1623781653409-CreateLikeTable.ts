import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLikeTable1623781653409 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'like',
                columns: [
                    {
                        name: 'tweet_id',
                        type: 'serial'
                    },
                    {
                        name: 'user_id',
                        type: 'varchar'
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: 'tweet_id_fk',
                        columnNames: ['tweet_id'],
                        referencedColumnNames: ['tweet_id'],
                        referencedTableName: 'tweets',
                    },
                    {
                        name: 'user_id_fk',
                        columnNames: ['user_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'user',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('like');
    }
}
