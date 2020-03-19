document.querySelector("#buscar-paciente")
    .addEventListener("click", function () {

        var xhr = new XMLHttpRequest();

        // o endereco correto é sem os 123 no final
        xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes123");

        xhr.addEventListener("load", function () {

            // essa logica se encontra com erro e por isso eu coloco para falhar de forma
            // proposital
            if (xhr.status == 200) {
                document.querySelector("#erro-buscar-paciente").classList.add("invisivel");
                var lista = JSON.parse(xhr.responseText);
                lista.forEach(function (paciente) {
                    addNovo(paciente);
                });
            } else {
                document.querySelector("#erro-buscar-paciente").classList.remove("invisivel");
            }

        })

        xhr.send();
    });

    // nao é bem um erro, pois na construçao do app, foi pensado em add novo paciente
    // usando o form, e com isso recebo ele e vou pegando os valores,
    // os dados vindo da api sao do tipo JSON e por isso sao tipos diferentes
    // é preciso mudar no form como ele recebe falores para usar esses dados vindo da api