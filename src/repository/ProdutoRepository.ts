import { Produto } from "../model/Produto";

export interface ProdutoRepository{
    //Métodos CRUD 
     cadastrarProduto(produto: Produto): void;
     listarProdutos(): void;
     consultarPorId(id: number): void;
     atualizarProduto(produto: Produto): void;
     deletarProduto(numero: number): void;

}