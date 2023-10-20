import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Destinatario1697312391861 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'destinatario',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'xNome',
            type: 'varchar',
          },
          {
            name: 'CNPJ',
            type: 'varchar',
          },
          {
            name: 'CPF',
            type: 'varchar',
          },
          {
            name: 'xLgr',
            type: 'varchar',
          },
          {
            name: 'nro',
            type: 'varchar',
          },
          {
            name: 'xCpl',
            type: 'varchar',
          },
          {
            name: 'xBairro',
            type: 'varchar',
          },
          {
            name: 'cMun',
            type: 'varchar',
          },
          {
            name: 'xMun',
            type: 'varchar',
          },
          {
            name: 'UF',
            type: 'varchar',
          },
          {
            name: 'CEP',
            type: 'varchar',
          },
          {
            name: 'notaFiscalId',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['notaFiscalId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'notafiscal',
            onDelete: 'CASCADE',
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('destinatario', true);
  }
}
