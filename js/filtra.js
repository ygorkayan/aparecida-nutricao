
// busco por campo de busca
var campoFiltro = document.querySelector(".filtrar-tabela")

// adciono o evento de input ao campo, ou seja, cada letra colocada esse evento é chamado
campoFiltro.addEventListener("input", function() {

    // guardo o valor atual do campo
    var nomeDigitado = this.value;

    // busco por todos os pacientes pois quero deixa somente os que forem diferente do nomeDigitado
    var pacientes = document.querySelectorAll(".paciente");

    // pecorro a lista deixando todos invisivel que nao contem nomeDigitado
    pacientes.forEach(function(paciente) {
        // pego nome por nome da tabela
        var nome = paciente.querySelector(".info-nome").textContent;

        // botando minusculo
        nome = nome.toLowerCase();
        nomeDigitado =  nomeDigitado.toLowerCase();

        // verifico se o nome da tabela contem o que foi digitado
        // obs, é contem!! ou seja "or" contem dentro de cach"or"ro
        if(nome.match(nomeDigitado)) {
            paciente.classList.remove("invisivel"); // se contem remove invisivel
        } else {
            paciente.classList.add("invisivel"); // se nao torna invisivel
        }

        // essa logica uso pois, ao remover letras ele vai tornando visivel os elementos que contem
        // ate o ponto de remover tudo e tudo retorna visivel
    });

});