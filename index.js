class Hero {
    constructor(nome, idade, classe, ataque){
        this.nome = nome
        this.idade = idade
        this.classe = classe
        this.ataque = ""

        if(classe = "Guerreiro"){
            ataque = "espada"
        }else if(classe = "Mago"){
            ataque = "Magia"
        }
    }
    show(){
        console.log("O" + this.nome + "atacou usando" + this.ataque )
    }
}