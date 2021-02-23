function estacao(){
    let mes = prompt('Digite o mês em extenso (Ex.: Maio):')
    let res = document.querySelector('section#result')
    let estacao

    switch (mes.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'INVERNO'
            break

        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'PRIMAVERA'
            break

        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'VERÃO'
            break
        
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'OUTONO'
            break
    
        default:
            estacao = 'INDEFINIDA'
            break
    }

    if (estacao != 'INDEFINIDA') {
        res.innerHTML = `<p>No mês de <strong>${mes.toUpperCase()}</strong>, estamos na estação <strong>${estacao}</strong>.</p>`
    } else {
        res.innerHTML = `<p style = 'color: red;'><strong>O mês informado não é válido.</strong></p>`
    }
}