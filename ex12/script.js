function carregar() {
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora}h`
if (hora >= 0 && hora < 12) {
    msg.innerHTML += `<br>Bom dia!`
    img.src = 'foto-manha.png'
    document.body.style.background = '#ecb763'
    document.body.style.color = '#ecb763'
} else if (hora >= 12 && hora < 18) {
    msg.innerHTML += `<br>Boa tarde!`
    img.src = 'foto-tarde.png'
    document.body.style.background = '#cf722b'
    document.body.style.color = '#cf722b'
} else {
    msg.innerHTML += `<br>Boa noite!`
    img.src = 'foto-noite.png'
    document.body.style.background = '#1d5050'
    document.body.style.color = '#1d5050'
}
}
