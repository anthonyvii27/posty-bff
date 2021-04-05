import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTweetTable1617426971205 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: "tweets",
                columns: [
                    {
                        name: 'tweet_id',
                        type: 'serial',
                        isPrimary: true,
                    },
                    {
                        name: 'text_content',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'image_content_url',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'origin',
                        type: 'varchar'
                    },
                    {
                        name: 'user_id',
                        type: 'varchar'
                    },  
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: 'user_fk',
                        columnNames: ['user_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'user',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('tweets');
    }
}
