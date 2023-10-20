import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Produto1697070582581 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'produto',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'cProd',
            type: 'varchar',
          },
          {
            name: 'cEAN',
            type: 'varchar',
          },
          {
            name: 'xProd',
            type: 'varchar',
          },
          {
            name: 'NCM',
            type: 'varchar',
          },
          {
            name: 'CEST',
            type: 'varchar',
          },
          {
            name: 'indEscala',
            type: 'varchar',
          },
          {
            name: 'CFOP',
            type: 'varchar',
          },
          {
            name: 'uCom',
            type: 'varchar',
          },
          {
            name: 'qCom',
            type: 'varchar',
          },
          {
            name: 'vUnCom',
            type: 'varchar',
          },
          {
            name: 'vProd',
            type: 'varchar',
          },
          {
            name: 'cEANTrib',
            type: 'varchar',
          },
          {
            name: 'uTrib',
            type: 'varchar',
          },
          {
            name: 'qTrib',
            type: 'varchar',
          },
          {
            name: 'vUnTrib',
            type: 'varchar',
          },
          {
            name: 'indTot',
            type: 'varchar',
          },
          {
            name: 'xPed',
            type: 'varchar',
          },
          {
            name: 'nFCI',
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
            referencedTableName: 'nota_fiscal',
            onDelete: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('produto');
  }
}
