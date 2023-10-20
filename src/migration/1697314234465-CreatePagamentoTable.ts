import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePagamentoTable1697314234465 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pagamento',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'tPag',
            type: 'string',
          },
          {
            name: 'vPag',
            type: 'string',
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
