let num = document.querySelector('input#fNum')
let lista = document.querySelector('select#fLista')
let res = document.querySelector('div#result')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text += `O valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores == 0){
        alert('Adicione valores antes de finalizar.')
    } else {
        let totalElementos = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / totalElementos

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos <strong>${totalElementos}</strong> cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>A soma dos números informados é <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores informados é <strong>${media}</strong>.</p>`
    }
}