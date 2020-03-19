function criadorDeTr(form) {

    // Cria a TR
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    criarTd(form.nome.value, "info-nome", pacienteTr);
    criarTd(form.peso.value, "info-peso", pacienteTr);
    criarTd(form.altura.value, "info-altura", pacienteTr);
    criarTd(form.gordura.value, "info-gordura", pacienteTr);
    criarTd("0", "info-imc", pacienteTr);

    return pacienteTr;
}

// recebe valor do form, a classe da onde pertence e de quem é filha
function criarTd(valor, classe, filha) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = valor;

    filha.appendChild(td);
}

// Esse metodo recebe o formulario e verifica se os campos estao corretos
function verificarFormulario(form) {

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    if (nome == "") {
        document.querySelector(".msg-erro").textContent = "Nome invalido";
        return false;
    }

    if (peso <= 0 || peso >= 500) {
        document.querySelector(".msg-erro").textContent = "Peso invalido";
        return false;
    }

    if (altura <= 0.0 || altura >= 5.0) {
        document.querySelector(".msg-erro").textContent = "Altura invalida";
        return false;
    }

    if (gordura == "") {
        document.querySelector(".msg-erro").textContent = "Gordura invalida";
        return false;
    }


    document.querySelector(".msg-erro").textContent = "";
    return true
}

// Metodo para add paciente a lista
function novoPaciente() {
    var form;
    document.querySelector("#adicionar-paciente")
        .addEventListener("click", function (event) {
            event.preventDefault(); // metodo que desabilita o evento de recarregar a pagina do botao submit

            // criadorDeTr recebe o formulario vindo de #form-add e trasforma em uma tr, retornando seu valor para var tr
            form = document.querySelector("#form-add");
            console.log(form);
            addNovo(form);
            form.reset(); // Limpa o formulario
        });
}


function addNovo(form) {
    if (verificarFormulario(form)) {
        var tr = criadorDeTr(form); //cria a tr
        document.querySelector("#tabela-pacientes").appendChild(tr); // add a nova tr a tabela
        calcularIMC(); // Serve para recalcular toda a tabela ao colocar um novo elemento // Gambiarra !!!!
    }
}

novoPaciente(); // Quando a pagina carregar, o verificador de evento monitora o botao
