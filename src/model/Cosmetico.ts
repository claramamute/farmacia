import { Produto } from "./Produto";


export class Cosmetico extends Produto{
    private _fragancia: string;

    constructor(id: number, nome:string, tipo: number, preco: number, fragancia: string){
        super(id, nome, tipo, preco) //O super serve para 'chamar' os atributos da superclasse
        this._fragancia = fragancia
    }


    
	public get fragancia(): string {
		return this._fragancia;
	}

   
	public set fragancia(nome: string) {
		this._fragancia = nome;
	}
    
    public visualizar(): void {
        super.visualizar() // Chama o método visualizar da super
        console.log('Fragância:'+ this._fragancia)
    }

}