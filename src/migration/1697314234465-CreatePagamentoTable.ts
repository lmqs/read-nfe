import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePagamentoTable1697314234465 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pagamento',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'tPag',
            type: 'varchar',
          },
          {
            name: 'vPag',
            type: 'varchar',
          },
          {
            name: 'notaFiscalId',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['notaFiscalId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'nota_fiscal',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pagamento');
  }
}
