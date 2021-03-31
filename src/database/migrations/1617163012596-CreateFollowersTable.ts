import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFollowersTable1617163012596 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'followers',
                columns: [
                    {
                        name: 'follower_id',
                        type: 'varchar'
                    },
                    {
                        name: 'following_id',
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
                        name: 'follower_id_fk',
                        columnNames: ['follower_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'user',
                    },
                    {
                        name: 'following_id_fk',
                        columnNames: ['following_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'user',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('followers');
    }
}
