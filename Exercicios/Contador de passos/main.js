function contar () {
    const inicio = document.querySelector("#inicio");
    const fim = document.querySelector("#fim");
    const passo = document.querySelector("#passo");
    const contar = document.querySelector("#contar");
    const resultado = document.querySelector(".resultado");

    if(inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0){
        alert("[ERRO!] Faltam dados");
    } else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        for(let c = i; c <= f; c += p) {
            resultado.innerHTML += `${c}`
        }
    }
}

const botao = document.querySelector("#contar");

botao.addEventListener("click", () =>{
    contar();
});