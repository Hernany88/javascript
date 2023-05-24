function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    //var hora = 12

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //de manhã
        img.src = 'fotomanha.png'
        document.body.style.background = '#897052'
    } else if (hora >= 12 && hora <= 18){
        //de tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#ffd0c1'
    } else {
        //de Noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#305f65'
    }

}