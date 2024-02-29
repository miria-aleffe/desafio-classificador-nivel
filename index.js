class Hero {
    constructor(nome, idade, classe, ataque){
        this.nome = nome
        this.idade = idade
        this.classe = classe
        this.ataque = " "

        if(classe === "Guerreiro"){
            this.ataque = "espada"
        }else if(classe === "Mago"){
            this.ataque = "Magia"
        }
    }
    show(){
        console.log("O " + this.nome + " atacou usando " + this.ataque )
    }
}
 let Hero1 = new Hero("Miria", 26, "Guerreiro")
 let Hero2 = new Hero("Maria", 15, "Mago")

 Hero1.show()
 Hero2.show()