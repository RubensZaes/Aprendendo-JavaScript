function media(){
    let nome = prompt('Qual o nome do aluno?')
    let n1 = Number(prompt(`Qual foi a primeira nota de ${nome}`))
    let n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    med = (n1 + n2) / 2

    let msg
    if (med >= 6) {
        msg = 'Meus parabéns... Você foi aprovado!'
    } else if (med >= 4) {
        msg = 'Estude um pouco mais...'
    } else {
        msg = 'Tente novamente no próximo semestre.'
    }

    let res = document.querySelector('section#result')
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>as notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark></p>`
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que tems é: <strong style='color:red;'>${msg}</strong></p>`

}