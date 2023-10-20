import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { NotaFiscal } from './NotaFiscal';

@Entity()
export class Destinatario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  xNome: string;

  @Column()
  CNPJ: string;

  @Column()
  CPF: string;

  @Column()
  xLgr: string;

  @Column()
  nro: string;

  @Column()
  xCpl: string;

  @Column()
  xBairro: string;

  @Column()
  cMun: string;

  @Column()
  xMun: string;

  @Column()
  UF: string;

  @Column()
  CEP: string;

  @ManyToOne(() => NotaFiscal, (notaFiscal) => notaFiscal.idDest)
  notaFiscal: NotaFiscal;
}
