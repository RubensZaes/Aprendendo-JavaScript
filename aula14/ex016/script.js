function contar(){
    let inicio = document.getElementById('txtInicio')
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')
    let res = document.querySelector('div#result')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `Contando...<br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            alert('Passp Inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //Contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            //Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }        
        res.innerHTML += `\u{1F3C1}`
    }
}