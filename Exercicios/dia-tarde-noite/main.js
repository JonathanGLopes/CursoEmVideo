function carregar () {
    const $mensagem = document.querySelector("#msg");
    const $imagem = document.querySelector("#imagem");
    let data = new Date();
    let hora = data.getHours();
    $mensagem.innerHTML = `agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        //Bom dia
        $imagem.setAttribute('src', 'img/img-manha.png');
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        $imagem.setAttribute('src', 'img/img-tarde.png');
        document.body.style.background = '#b9846f';
    }else {
        //Boa noite 
        $imagem.setAttribute('src', 'img/img-noite.png');
        document.body.style.background = '#515154';
    }
}

carregar();
