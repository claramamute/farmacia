//Classe abstrata -> genérica, apenas um modelo para as outras
export abstract class Produto{
    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;

    constructor(id: number, nome:string, tipo: number, preco: number){
        this._id = id
        this._nome = nome
        this._tipo = tipo
        this._preco = preco
    }

    //Métodos getters (retornar valor) e setters ( mudar valor)
    
	public get id(): number {
		return this._id;
	}

   
	public get nome(): string {
		return this._nome;
	}

   
	public get tipo(): number {
		return this._tipo;
	}

  
	public get preco(): number {
		return this._preco;
	}

   
	public set id(id: number) {
		this._id = id;
	}

   
	public set nome(nome: string) {
		this._nome = nome;
	}

  
	public set tipo(tipo: number) {
		this._tipo = tipo;
	}

   
	public set preco(preco: number) {
		this._preco = preco;
	}

    public visualizar(): void{

        let tipo: string = ""; //variavel com switch para checar o tipo de produto
        
        switch(this._tipo){ // O this. se refere a 'isso' na classe
            case 1:
                tipo = "Medicamento"
                break;
            case 2:
                tipo = "Cosmético"
                break;
        }

        console.log("\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("ID: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Tipo : " + tipo);
        console.log("Preço: " + this._preco);
 

    }

}