// src/entities/NotaFiscal.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class NotaFiscal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cUF: string;

  @Column()
  cNF: string;

  @Column()
  natOp: string;

  @Column()
  mod: string;

  @Column()
  serie: string;

  @Column()
  nNF: string;

  @Column()
  dhEmi: string;

  @Column()
  dhSaiEnt: string;

  @Column()
  tpNF: string;

  @Column()
  idDest: string;

  @Column()
  cMunFG: string;

  @Column()
  tpImp: string;

  @Column()
  tpEmis: string;

  @Column()
  cDV: string;

  @Column()
  tpAmb: string;

  @Column()
  finNFe: string;

  @Column()
  indFinal: string;

  @Column()
  indPres: string;

  @Column()
  indIntermed: string;

  @Column()
  procEmi: string;

  @Column()
  verProc: string;

  @Column()
  CNPJEmit: string;

  @Column()
  xNomeEmit: string;

  @Column()
  xLgrEmit: string;

  @Column()
  nroEnderEmit: string;

  @Column()
  xCplEnderEmit: string;

  @Column()
  xBairroEmit: string;

  @Column()
  cMunEmit: string;

  @Column()
  xMunEmit: string;

  @Column()
  UFEmit: string;

  @Column()
  CEPEmit: string;

  @Column()
  xPaisEmit: string;

  @Column()
  foneEmit: string;

  @Column()
  IEEmit: string;

  @Column()
  IMEmit: string;

  @Column()
  CNAEEmit: string;

  @Column()
  CRTEmit: string;
  
  @Column()
  infAdic: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
