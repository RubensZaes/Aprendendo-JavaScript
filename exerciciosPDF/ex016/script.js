function calcularIdade(){
    let data = new Date
    let anoAtual = data.getFullYear()

    let anoNascimento = Number(prompt('Digite o Ano em que Nasceu:'))

    let idade = anoAtual - anoNascimento

    let res = document.querySelector('section#result')

    if (idade > 0) {
        res.innerHTML = `<p>Sua idade é <strong>${idade}</strong></p>`
    } else if (idade === 0) {
        res.innerHTML = `<p>Você ainda não completou 1 ano de idade.<p>`
    } else {
        res.innerHTML = `<p>Ano Digitado Inválido!</p>`
    }    
}