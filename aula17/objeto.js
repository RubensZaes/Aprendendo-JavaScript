let amigo = {
    nome: 'Rubens',
    idade: 31,
    sexo: 'M',
    peso: 97.8,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)