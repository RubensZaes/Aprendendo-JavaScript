function info(){
    let agora = new Date()
    let saida = document.getElementById('result')
    //let saida = document.querySelector('section#result')
    saida.innerHTML = `<p>O que eu recebi do sistema foi <strong>${agora}</strong>.</p>`
}