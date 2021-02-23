function calc(){
    let n1 = Number(prompt('Primeiro Valor:'))
    let n2 = Number(prompt('Segundo Valor:'))
    let opcao = Number(prompt(`Valores Informados: ${n1} e ${n2}.
                                O que vamos fazer:
                                [1] - SOMAR
                                [2] - SUBTRAIR
                                [3] - MULTIPLICAR
                                [4] - DIVIDIR`))

    let res = document.querySelector('section#result')
    res.innerHTML = `<h2>Calculando...</h2>`

    switch(opcao) {
        case 1:
            res.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break
        case 2:
            res.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
            break
        case 3:
            res.innerHTML += `<p>${n1} * ${n2} = <strong>${n1*n2}</strong></p>`
            break
        case 4:
            res.innerHTML += `<p>${n1} / ${n2} = <strong>${(n1/n2).toLocaleString('pt-BR')}</strong></p>`
            break
        default:
            res.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o q fazer com eles.<p>`
            break
    }
}