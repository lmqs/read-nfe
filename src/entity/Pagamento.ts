import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { NotaFiscal } from './NotaFiscal';

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tPag: string;

  @Column()
  vPag: string;

  @Column()
  indPag: string;

  @ManyToOne(() => NotaFiscal, (notaFiscal) => notaFiscal.id)
  notaFiscal: NotaFiscal;
}
