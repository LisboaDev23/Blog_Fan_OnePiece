document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll("[data-tab-button]"); //pegando todos os botões com essa propriedade []

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(botao){
            const targetButton = botao.target.dataset.tabButton;//estou pegando o valor do alvo do botão, nesse caso o alvo é um <ul> que esteja marcado com o valor do botao
            const containerTargetButton = document.querySelector(`[data-tab-id=${targetButton}]`);//aqui eu pego o <ul> que estiver com o valor do tab-id igual ao valor do tab-button para fazer correspondência
        //quando o botão for clicado, pegue o target que foi definido no HTML para
        //direcionar ele a listagem devida. Vamos pegar o valor do tabButton através
        //do dataset, isso foi feito com a observação do professor.
            escondendoAbas();
            containerTargetButton.classList.add("shows__list--is-active"); //adiciono no <ul> que tiver sido clicado, a classe active

        })
    }
})

function escondendoAbas(){
    const containerTabs = document.querySelectorAll("[data-tab-id]"); //pegando todos as <ul> que possuem esse atributo para manipularmos seus valores
    for(let i = 0; i < containerTabs.length; i++){//percorra todos os <ul>
        containerTabs[i].classList.remove("shows__list--is-active");//pegue a classe dessa lista e remova a classe active
    }
}
