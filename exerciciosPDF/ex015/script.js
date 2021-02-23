function info(){
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semanas = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    
    let agora = new Date
    let res = document.querySelector('section#result')
    let diaMes = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let diaSemana = agora.getDay()
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()

    res.innerHTML = `<p>Dia: <strong>${diaMes}</strong></p>`
    res.innerHTML += `<p>Mês: <strong>${meses[mes]}</strong></p>`
    res.innerHTML += `<p>Ano: <strong>${ano}</strong></p>`
    res.innerHTML += `<p>Dia da Semana: <strong>${semanas[diaSemana]}</strong></p>`
    res.innerHTML += `<p>Hora: <strong>${hora}:${min}:${seg}</strong></p>`

}