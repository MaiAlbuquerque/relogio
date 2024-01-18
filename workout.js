
function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 9
    msg.innerHTML = `Agora são ${hora} horas.`
   

    if (hora >= 0 && hora < 12) {
        //bom dia
        foto.innerHTML ='<img src="manha.png">'
        document.body.style.background ='#fcde66'

    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        foto.innerHTML ='<img src="tarde.png">'
        document.body.style.background ='#ecb283'
        

    } else {
        //boa noite
        foto.innerHTML ='<img src="noite.png">'
        document.body.style.background ='#12189c'
    }

}

