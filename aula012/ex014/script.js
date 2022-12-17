function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours
    var hora = Number(data.getHours())
    msg.innerHTML  = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'imagens/manha.png'
        window.document.body.style.background = '#b78669'
    } else if (hora > 12 && hora < 18){
        //Boa Tarde
        window.document.body.style.background = '#edd4b6'
        img.src = 'imagens/tarde.png'
    } else {
        //Boa Noite
        window.document.body.style.background = '#405736'
        img.src = 'imagens/noite.png'
    }
}


