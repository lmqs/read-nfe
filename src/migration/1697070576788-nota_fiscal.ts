import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class NotaFiscal1697070576788 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'nota_fiscal',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'cUF',
              type: 'varchar',
            },
            {
              name: 'cNF',
              type: 'varchar',
            },
            {
              name: 'natOp',
              type: 'varchar',
            },
            {
              name: 'mod',
              type: 'varchar',
            },
            {
              name: 'serie',
              type: 'varchar',
            },
            {
              name: 'nNF',
              type: 'varchar',
            },
            {
              name: 'dhEmi',
              type: 'varchar',
            },
            {
              name: 'dhSaiEnt',
              type: 'varchar',
            },
            {
              name: 'tpNF',
              type: 'varchar',
            },
            {
              name: 'idDest',
              type: 'varchar',
            },
            {
              name: 'cMunFG',
              type: 'varchar',
            },
            {
              name: 'tpImp',
              type: 'varchar',
            },
            {
              name: 'tpEmis',
              type: 'varchar',
            },
            {
              name: 'cDV',
              type: 'varchar',
            },
            {
              name: 'tpAmb',
              type: 'varchar',
            },
            {
              name: 'finNFe',
              type: 'varchar',
            },
            {
              name: 'indFinal',
              type: 'varchar',
            },
            {
              name: 'indPres',
              type: 'varchar',
            },
            {
              name: 'indIntermed',
              type: 'varchar',
            },
            {
              name: 'procEmi',
              type: 'varchar',
            },
            {
              name: 'verProc',
              type: 'varchar',
            },
            {
              name: 'CNPJEmit',
              type: 'varchar',
            },
            {
              name: 'xNomeEmit',
              type: 'varchar',
            },
            {
              name: 'xLgrEmit',
              type: 'varchar',
            },
            {
              name: 'nroEnderEmit',
              type: 'varchar',
            },
            {
              name: 'xCplEnderEmit',
              type: 'varchar',
            },
            {
              name: 'xBairroEmit',
              type: 'varchar',
            },
            {
              name: 'cMunEmit',
              type: 'varchar',
            },
            {
              name: 'xMunEmit',
              type: 'varchar',
            },
            {
              name: 'UFEmit',
              type: 'varchar',
            },
            {
              name: 'CEPEmit',
              type: 'varchar',
            },
            {
              name: 'xPaisEmit',
              type: 'varchar',
            },
            {
              name: 'foneEmit',
              type: 'varchar',
            },
            {
              name: 'IEEmit',
              type: 'varchar',
            },
            {
              name: 'IMEmit',
              type: 'varchar',
            },
            {
              name: 'CNAEEmit',
              type: 'varchar',
            },
            {
              name: 'CRTEmit',
              type: 'varchar',
            },
            {
              name: 'createdAt',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        })
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('nota_fiscal');
    }
}
