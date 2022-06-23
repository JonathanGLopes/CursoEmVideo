function verificar () {
    let data = new Date();
    let ano = data.getFullYear();
    let formAno = document.querySelector("#textano");
    let resultado = document.querySelector("div#resultado");

    if (formAno.value.length === 0 || Number(formAno.value) > ano){
        alert("[ERRO!] Verifique os dados e tente novamente");
    } else {
        let formSex = document.getElementsByName("radiosex");
        let idade = ano - Number(formAno.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (formSex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/homem-bebe.png');
            } else if (idade < 30){
                //jovem
                img.setAttribute('src', 'img/homem-jovem.png');
            } else if (idade > 40 && idade < 60){
                //adulto
                img.setAttribute('src', 'img/homem-adulto.png');
            } else {
                //idoso
                img.setAttribute('src', 'img/homem-idoso.png');
            }
        } else if (formSex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/mulher-bebe.png');
            } else if (idade < 30){
                //jovem
                img.setAttribute('src', 'img/mulher-jovem.png');
            } else if (idade > 40 && idade < 60){
                //adulta
                img.setAttribute('src', 'img/mulher-adulta.png');
            } else {
                //idosa
                img.setAttribute('src', 'img/mulher-idosa.png');
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img);
    }
}