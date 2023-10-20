// src/entities/Produto.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { NotaFiscal } from './NotaFiscal';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cProd: string;

  @Column()
  cEAN: string;

  @Column()
  xProd: string;

  @Column()
  NCM: string;

  @Column()
  CEST: string;

  @Column()
  indEscala: string;

  @Column()
  CFOP: string;

  @Column()
  uCom: string;

  @Column()
  qCom: string;

  @Column()
  vUnCom: string;

  @Column()
  vProd: string;

  @Column()
  cEANTrib: string;

  @Column()
  uTrib: string;

  @Column()
  qTrib: string;

  @Column()
  vUnTrib: string;

  @Column()
  indTot: string;

  @Column()
  xPed: string;

  @Column()
  nFCI: string;

  @ManyToOne(() => NotaFiscal, (notaFiscal) => notaFiscal.id)
  notaFiscal: NotaFiscal;
}
