// Metodo que calcular o IMC
function calcular(peso, altura, paciente) {
    if (peso <= 0 || peso >= 500) {
        paciente.classList.add("paciente-invalido");
        return "Peso Invalido";
    }

    if (altura <= 0.0 || altura >= 5.0) {
        paciente.classList.add("paciente-invalido");
        return "Altura Invalida";
    }

    return (peso / (altura * altura)).toFixed(2);
}

// Metodo que busca os dados na tablea e calcula o IMC
function calcularIMC() {
    document.querySelectorAll(".paciente")
        .forEach(paciente => {
            var peso = paciente.querySelector(".info-peso").textContent;
            var altura = paciente.querySelector(".info-altura").textContent;
            paciente.querySelector(".info-imc").textContent = calcular(peso, altura, paciente);
        });

}

calcularIMC(); // quando a pagina recarrega, ela calcular todos os elementos


// Algo me incomodando
// na construcao desse arquivo foi pensado que ja tendo dados vindo do html, preciso calcular
// o imc desses dados, porem agora estou add novos dados, e uma alternativa foi que, quando eu 
// add um novo usuario ele verifica novamente todos os dados na tabela, a um gargalo, pois nao
// precisa calcular tudo novamente, uma correcao seria, calcular somente os novos dados, e para isso
// preciso modificar um pouco esse arquivo, oque nao fiz por preguica :-/







