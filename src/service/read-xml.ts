// src/services/NotaFiscalService.ts
import { parseString } from 'xml2js';
import { NotaFiscal } from '../entity/NotaFiscal';
import { AppDataSource } from '../data-source';
import { Destinatario } from '../entity/Destinatario';
import { Pagamento } from '../entity/Pagamento';
import { Produto } from '../entity/Produto';

export async function processarNotaFiscal(xml: string): Promise<void> {
  try {
    const notaFiscalData = await parseXml(xml); // Implemente a função parseXml
    const notaFiscalRepository = AppDataSource.getRepository(NotaFiscal)

    if (notaFiscalData?.nfeProc?.NFe?.[0]?.infNFe) {
      const infNFe = notaFiscalData.nfeProc.NFe[0].infNFe[0];
      if (infNFe['$']) {
        const attributes = infNFe['$'];
      
        // Agora você pode acessar os atributos específicos
        const versao = attributes.versao;
        const Id = attributes.Id;
      
        // Faça o que desejar com essas informações
      }
      const ide = infNFe.ide[0];
      const emit = infNFe.emit[0];
      const dest = infNFe.dest[0];
      const total = infNFe.total[0];
      const transp = infNFe.transp[0];
      const cobr = infNFe.cobr[0];
      const payments = infNFe.pag
      const infAdic = infNFe.infAdic[0];
    
      // console.log(infNFe.'$'.Id)
      console.log(infNFe.det)
      const notaFiscal = new NotaFiscal();
      notaFiscal.cUF = ide.cUF;
      notaFiscal.cNF = ide.cNF;
      notaFiscal.natOp = ide.natOp;
      notaFiscal.mod = ide.mod;
      notaFiscal.serie = ide.serie;
      notaFiscal.nNF = ide.nNF;
      notaFiscal.dhEmi = ide.dhEmi;
      notaFiscal.dhSaiEnt = ide.dhSaiEnt;
      notaFiscal.tpNF = ide.tpNF;
      notaFiscal.idDest = ide.idDest;
      notaFiscal.cMunFG = ide.cMunFG;
      notaFiscal.tpImp = ide.tpImp;
      notaFiscal.tpEmis = ide.tpEmis;
      notaFiscal.cDV = ide.cDV;
      notaFiscal.tpAmb = ide.tpAmb;
      notaFiscal.finNFe = ide.finNFe;
      notaFiscal.indFinal = ide.indFinal;
      notaFiscal.indPres = ide.indPres;
      notaFiscal.indIntermed = ide.indIntermed;
      notaFiscal.procEmi = ide.procEmi;
      notaFiscal.verProc = ide.verProc;
      notaFiscal.CNPJEmit = emit.CNPJ;
      notaFiscal.xNomeEmit = emit.xNome;
      notaFiscal.xLgrEmit = emit.enderEmit.xLgr;
      notaFiscal.nroEnderEmit = emit.enderEmit.nro;
      notaFiscal.xCplEnderEmit = emit.enderEmit.xCpl;
      notaFiscal.xBairroEmit = emit.enderEmit.xBairro;
      notaFiscal.cMunEmit = emit.enderEmit.cMun;
      notaFiscal.xMunEmit = emit.enderEmit.xMun;
      notaFiscal.UFEmit = emit.enderEmit.UF;
      notaFiscal.CEPEmit = emit.enderEmit.CEP;
      notaFiscal.xPaisEmit = emit.enderEmit.xPais;
      notaFiscal.foneEmit = emit.enderEmit.fone;
      notaFiscal.IEEmit = emit.IE;
      notaFiscal.IMEmit = emit.IM;
      notaFiscal.CNAEEmit = emit.CNAE;
      notaFiscal.CRTEmit = emit.CRT;
      notaFiscal.infAdic = infAdic
    
      setDestinatario(dest)
      setPayment(payments, ide.nNF[0])
      setProducts(infNFe.det, ide.nNF[0])
    } else {
      console.error('Estrutura de dados ausente ou incorreta');
    }
    // Defina outras atribuições para as colunas correspondentes
    // await notaFiscalRepository.save(notaFiscal);
  } catch (error) {
    console.error('Erro ao processar a nota fiscal:', error);
  }
}

async function parseXml(xml: string): Promise<any> {
  return new Promise((resolve, reject) => {
    parseString(xml, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

async function setDestinatario (dest) {
  const destinatario = new Destinatario()
  destinatario.xNome = dest.xNome[0];
  destinatario.CNPJ = dest.CNPJ[0];
  destinatario.CPF = dest?.CPF?.[0]
  destinatario.xLgr = dest.enderDest[0].xLgr[0];
  destinatario.nro = dest.enderDest[0].nro[0];
  destinatario.xCpl = dest.enderDest[0]?.xCpl?.[0]
  destinatario.xBairro = dest.enderDest[0].xBairro[0];
  destinatario.cMun = dest.enderDest[0].cMun[0];
  destinatario.xMun = dest.enderDest[0].xMun[0];
  destinatario.UF = dest.enderDest[0].UF[0];
  destinatario.CEP = dest.enderDest[0].CEP[0]
  // console.log(destinatario)
  return destinatario
}

async function setPayment(payments, notaFiscalId) {
  payments.map((pay) => {
    const payment = new Pagamento()
    payment.notaFiscal = notaFiscalId
    payment.tPag = pay.detPag[0].tPag[0]
    payment.vPag = pay.detPag[0].vPag[0]
    payment.indPag = pay.detPag[0].indPag[0]
    // console.log(payment)
    
  })
}

async function setProducts(products, notaFIscalId) {
  products.map((product) => {
    console.log(product)
    const attributes = product['$'];
    console.log(attributes.nItem)

    const produto = new Produto();
    produto.cProd = product.prod[0].cProd[0];
    produto.cEAN = product.prod[0].cEAN[0];
    produto.xProd = product.prod[0].xProd[0];
    produto.NCM = product.prod[0].NCM[0];
    produto.CEST = product.prod[0].CEST[0];
    produto.indEscala = product.prod[0].indEscala[0];
    produto.CFOP = product.prod[0].CFOP[0];
    produto.uCom = product.prod[0].uCom[0];
    produto.qCom = product.prod[0].qCom[0];
    produto.vUnCom = product.prod[0].vUnCom[0];
    produto.vProd = product.prod[0].vProd[0];
    produto.cEANTrib = product.prod[0].cEANTrib[0];
    produto.uTrib = product.prod[0].uTrib[0];
    produto.qTrib = product.prod[0].qTrib[0];
    produto.vUnTrib = product.prod[0].vUnTrib[0];
    produto.indTot = product.prod[0].indTot[0];
    produto.xPed = product.prod[0].xPed[0];
    produto.nFCI = product.prod[0].nFCI[0];

    console.log(produto)
  })
  
}