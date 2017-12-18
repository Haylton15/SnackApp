export interface gasto {
    $key?:string,
    descricaoResumida: string;
    valor: number;
    formaPagamento: any[];
    descricaoGeral: string;  
    dataDia: Date;
}