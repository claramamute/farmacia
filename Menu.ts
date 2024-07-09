import readlinesync = require("readline-sync")
import { colors } from "./src/util/Colors";
import { Produto } from "./src/model/Produto";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Medicamento } from "./src/model/Medicamento";
import { Cosmetico } from "./src/model/Cosmetico";

export function main(){

    //Variáveis dos atributos para criar objeto
    let opcao: number, id: number, nome: string, tipo: number, preco: number, generico: string, fragancia: string ;
    const tipoProdutos = ['Medicamento', 'Cosmetico'] //Só pode ser um desses dois, a lib readline ajuda com isso

    //Instânciando ( criando objeto) Classe Controller
    const produtos: ProdutoController = new ProdutoController()

    while(true){
        console.log(colors.reset)
        console.log(colors.fg.bluestrong)
        console.log("**********************************************************");
        console.log("                                                          ");
        console.log("                       NEXT FARMA                         ");
        console.log("                                                          ");
        console.log("**********************************************************");        
        console.log('                                                          ');
        console.log('                1- Cadastrar Produto                      ');
        console.log('                2- Listar todos Produtos                  ');
        console.log('                3- Buscar produto por id                  ');
        console.log('                4- Atualizar Produto                      ');
        console.log('                5- Apagar Produto                         ');
        console.log('                6- Sair                                   ');
        console.log('                                                          ');
        console.log('**********************************************************');
        console.log('                                                          ');
        

        console.log('Entre com a opção desejada: ');
        opcao = readlinesync.questionInt('');

        if(opcao === 6){
            console.log('\n Next Farma - faz bem estar bem!')
            sobre()
            process.exit(0)

        }
        console.log(colors.fg.whitestrong)

        switch(opcao){
            case 1:
                console.log("\n\nCadastrar Produto\n\n")

                //Entrada de Dados Etiqueta
                console.log("Digite o Nome do Produto: ")
                nome = readlinesync.question("")

                console.log("Digite o Tipo do Produto: ")
                tipo = readlinesync.keyInSelect(tipoProdutos, "", {cancel: false}) + 1 // Colocou o + 1 - não existe conta 0 e obriga a escolher um dos tipos

                console.log("Digite o Preço do Produto: ")
                preco = readlinesync.questionFloat("")

                switch(tipo){
                    case 1:
                        console.log("Digite o genérico: ")
                        generico = readlinesync.question("")

                        produtos.cadastrarProduto(new Medicamento(produtos.gerarId(), nome, tipo, preco, generico)) // produtos -> objeto do controller, com acesso aos métodos

                        break
                    case 2:
                        console.log("Digite a fragância: ")
                        fragancia = readlinesync.question("")

                        produtos.cadastrarProduto( new Cosmetico(produtos.gerarId(), nome, tipo, preco, fragancia))

                        break

                }
                keyPress()
                break
            case 2: 
                console.log("\n\nListar todos Produtos\n\n")

                produtos.listarProdutos()// Acessa os métodos do produto controller e lista todos

                keyPress()                
                break
            case 3:
                console.log("\n\nBuscar produto por ID\n\n")

                console.log("Digite o ID: ")
                id = readlinesync.questionInt("") // Lê o numero do ID que quer procurar
                
                produtos.consultarPorId(id) // Chama a função passando como parametro o numero id

                keyPress()
                break
            case 4:
                console.log("\n\nAtualizar Produto\n\n")

                console.log("Digite o ID do Produto: ")
                id = readlinesync.questionInt("")

                let produto = produtos.buscarArray(id);

                if(produto !== null){
                    console.log("Digite o Nome do Produto: ")
                    nome = readlinesync.question("")
                    
                    tipo = produto.tipo;
    
                    console.log("Digite o Preço do Produto: ")
                    preco = readlinesync.questionFloat("")

                    switch(tipo){
                        case 1:
                            console.log("Digite o  genérico: ")
                            generico = readlinesync.question("")
    
                            produtos.atualizarProduto(new Medicamento(id, nome, tipo, preco, generico)) // produtos -> objeto do controller, com acesso aos métodos
    
                            break
                        case 2:
                            console.log("Digite a fragância: ")
                            fragancia = readlinesync.question("")
    
                            produtos.atualizarProduto( new Cosmetico(id, nome, tipo, preco, fragancia))
    
                            break
    
                    }
                }


                keyPress()
                break
            case 5:
                console.log("\n\nApagar Produto\n\n")

                console.log("Digite o ID do Produto que será deletado: ")
                id = readlinesync.questionInt("")

                produtos.deletarProduto(id)

                keyPress()
                break
            default:
                console.log(colors.fg.red)
                console.log("\n\nOpção Inválida!\n\n")
                console.log(colors.reset)
                keyPress()
        }


    }
}

export function sobre(): void{
    console.log(colors.bg.black, colors.fg.bluestrong)
    console.log('\n ************************************************')
    console.log('\nProjeto desenvolvido por: Clara Araujo')
    console.log('\nGeneration Brasil - clara.paula@genstudents.org')
    console.log('\ngithub.com/claramamute')
    console.log('\n ************************************************\n')
    console.log(colors.reset)

}

function keyPress(): void{
    console.log(colors.fg.bluestrong)
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();

}

main()