function gerar() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(aleatorio * dif)

    let res = document.querySelector('section#result')
    res.innerHTML = `<p>Acabei de pensar no número <strong>${num}.</strong></p>`
}

function limpar(){
    let res = document.querySelector('section#result')
    res.innerHTML = null
}