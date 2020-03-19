
// Busca a tabela
var tabela = document.querySelector("table");

// Adiciona um evento a tabela, porem a acao so ira se aplicada em seus filhos
tabela.addEventListener("dblclick", function(event) {


    // essa linha pega o alvo clicado, no caso tabela, acha o filho dela que foi clicado
    // e add a class que faz com que fique trasparente em 0.5s
    event.target.parentNode.classList.add("fadeOut");

    // essa funçao bota o navegador para espera por 500 milisegundos ou 0.5s
    // para so ai remover a linha
    setTimeout(function() {
        event.target.parentNode.remove();
    } ,500)
    
})

