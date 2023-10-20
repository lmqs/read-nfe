import * as fs from 'fs';
import { processarNotaFiscal } from "./service/read-xml";
import { AppDataSource } from './data-source';



const xml = fs.readFileSync('src/files/28230907358761026630550030001038081869863187.xml', 'utf-8');
AppDataSource.initialize().then().catch((error) => console.error('Erro ao conectar com banco de dados', error));
processarNotaFiscal(xml)
  .then(() => console.log('Nota fiscal processada com sucesso.'))
  .catch((error) => console.error('Erro ao processar a nota fiscal:', error));