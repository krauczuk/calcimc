let peso=document.getElementById('peso');
let altura=document.getElementById('altura');
let botao=document.getElementById('botao');
let resultado=document.getElementById('resultado');

botao.onclick=()=>{
    let imc= Number(peso.value)/(Number(altura.value)**2)
    let classificação = "";
    if(imc<18.5){
        classificação = 'Abaixo do peso'
    }else if(imc<25){
        classificação = 'Peso normal'
    }else if(imc<30){
        classificação = 'Obesidade grau 1'
    }else if(imc<40){
        classificação = 'Obesidade grau 2'
    }else {
        classificação = 'Obesidade grau 3 (Grave)'
    }
    resultado.innerText = `Seu imc é: ${imc.toFixed(2)}\n Classificação: ${classificação}`
}