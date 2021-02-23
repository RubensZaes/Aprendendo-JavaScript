function maior(){
    let n1 = Number(prompt('Digite um número: '))
    let n2 = Number(prompt('Digite outro número: '))

    let res = document.querySelector('section#result')
    if (n1 > n2) {
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong>.</p>`
    } else if (n2 > n1) {
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong></p>`
    } else {
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong></p>`
    }
}