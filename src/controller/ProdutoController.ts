
//Classe para dar corpo aos métodos adquiridos da interface
import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository{

    //Estrutura para armazenar os produtos, array de objetos, coleção:
    private listaProdutos: Array<Produto> = new Array<Produto> 

    //Contador ID
    public id: number = 0; // publico pois sera utilizado em outra classe(Menu)

    cadastrarProduto(produto: Produto): void { // Recebe um Objeto Produto
        this.listaProdutos.push(produto); //Adiciona esse objeto no array
        console.log(colors.fg.greenstrong)

        console.log("\nProduto Cadastrado com Sucesso!")
        console.log(colors.reset)
    }

    listarProdutos(): void {
        for(let produto of this.listaProdutos){  // Para cada produto na lista de Produtos
            produto.visualizar() //Pega o método visualizar da Classe produto
        }

    }

    consultarPorId(id: number): void {
        let buscaProduto = this.buscarArray(id)

        if(buscaProduto !== null){
            buscaProduto.visualizar() // Usa o método visualizar da super desse único produto buscado pelo ID

        }else{
            console.log(colors.fg.redstrong)
            console.log("\n Produto não encontrado!")
            console.log(colors.reset)
        }
    }

    atualizarProduto(produto: Produto): void {
        let buscaProduto = this.buscarArray(produto.id)

        if(buscaProduto != null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto; //Procura o índice do Objeto produto encontrado no Array listaProdutos(dados atuais).Depois  atribui o Objeto produto, que foi recebido no parâmetro do Método atualizar(produto), substituindo os dados atuais pelos novos dados recebidos via teclado.

            console.log(colors.fg.greenstrong)
            console.log("\nO produto foi atualizado com sucesso!")
            console.log(colors.reset)

        } else{
            console.log(colors.fg.redstrong)
            console.log("\n O produto não foi encontrado")
            console.log(colors.reset)

        }
    }

    deletarProduto(id: number): void {
    //Encontrar o indice
        const index = this.listaProdutos.findIndex(produto => produto.id === id); //retorna o índice do primeiro elemento em um array que satisfaça a função  fornecida, nesse caso, acessa o atributo id do produto e verifica se é igual ao id passado no menu. Se não for (-1) não existe

    // Se o produto for encontrado, remove do array
        if (index !== -1) { 
            this.listaProdutos.splice(index, 1);
            console.log(colors.fg.greenstrong)
            console.log(`\nProduto deletado com sucesso!`);
            console.log(colors.reset)
        } else {
            console.log(colors.fg.redstrong)
            console.log(`\nProduto não encontrado!`);
            console.log(colors.reset)
        }
    }

//Métodos auxiliares (não estao na interface)

    public gerarId(): number{
        return ++ this.id
    }

    public buscarArray(id: number): Produto | null{ //Vai retorna um objeto casoachar, e um null caso contrario
        for(let produto of this.listaProdutos){
            if(produto.id === id){
                return produto;
            }
        }
        return null;
    }

}