import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService{
    
    constructor(private http: HttpClient){}

    //preciso de endpoint
    protected urlServiceProdutosV1 = "http://localhost:3000/";

    

    obterProdutos(): Observable<Produto[]>{
        //Como acessar endpoint externo? HTTPClient
        return this.http.get<Produto[]>(this.urlServiceProdutosV1 + 'produtos');
    }
}