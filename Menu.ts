import readlinesync = require("readline-sync")
import { colors } from "./src/util/Colors";

export function main(){

    let opcao: number;

    while(true){
        console.log(colors.reset)
        console.log(colors.fg.blue)
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
                keyPress()
                break
            case 2: 
                console.log("\n\nListar todos Produtos\n\n")
                keyPress()                
                break
            case 3:
                console.log("\n\nBuscar produto por id\n\n")
                keyPress()
                break
            case 4:
                console.log("\n\nAtualizar Produto\n\n")
                keyPress()
                break
            case 5:
                console.log("\n\nApagar Produto\n\n")
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
    console.log(colors.fg.whitestrong)
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();

}

main()