let res = document.querySelector('section#result')
let computador = 0
let jogador = 0

function sortear(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(aleatorio * dif)
}

function jogar(){
    jogador = Number(prompt('Qual o seu palpite?'))
    if (jogador < computador) {
        res.innerHTML += `<p>Você plapitou o número <strong>${jogador}</strong>. O número sorteado é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você palpitou o númeor <strong>${jogador}</strong>. O número sorteado é <strong>MENOR</strong>!</p>`
    } else if (jogador == computador) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu teinha sorteado o valor <strong>${computador}</strong>!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}