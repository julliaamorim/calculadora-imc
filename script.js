const formulario = document.getElementById("formulario-imc");
const inputPeso = document.getElementById("input-peso");
const inputAltura = document.getElementById("input-altura");
const resultadoDoImc = document.getElementById("resultado-imc");
const classificacaoImc = document.getElementById("classificacao-imc");
const resultadoContainer = document.getElementById("resultado-container");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
   
    let imc = calcularImc();
   
    if (imc) {
        let classificacao = classificarImc(imc);
        resultadoDoImc.textContent = imc;
        classificacaoImc.textContent = classificacao;
        resultadoContainer.classList.remove("escondido");
    }

});

function calcularImc() {
    const pesoNumero = Number(inputPeso.value);
    const alturaNumero = Number(inputAltura.value);
    const pesoNaoEhUmNumero = isNaN(pesoNumero);
    const alturaNaoEhUmNumero = isNaN(alturaNumero);

    if (pesoNaoEhUmNumero || alturaNaoEhUmNumero) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }
    
    const alturaEmMetro = alturaNumero / 100;
    const resultadoImc = pesoNumero / (alturaEmMetro * alturaEmMetro);
    return Number(resultadoImc.toFixed(2));
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return "Magreza";
    }
    else if (imc < 25) {
        return "Normal";
    }
    else if (imc < 30) {
        return "Sobrepeso";
    }
    else if (imc < 35) {
        return "Obesidade Grau I";
    }
    else if (imc < 40) {
        return "Obesidade Grau II";
    }
    else {
        return "Obesidade Grau III";
    }
}