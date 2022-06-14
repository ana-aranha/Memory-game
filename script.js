function defineNumberOfCards(){
    numberSelected = prompt("Com quantas cartas você quer jogar? Escolha número par entre 4 e 14")
    while (numberSelected%2 != 0 || numberSelected>14 || numberSelected == null || numberSelected == ''){
        alert("Escolha número par e entre 4 e 14!")
        numberSelected = prompt("Com quantas cartas você quer jogar? Escolha número par entre 4 e 14")
    }
    cardsGame = document.querySelectorAll(".card-game.hidden")
    for(let i=0;i<numberSelected;i++){
        cardsGame[i].classList.remove("hidden")
    }
}

defineNumberOfCards()


function turnCard(element){
    back = element.querySelector("div:nth-child(1)")
    front = element.querySelector("div:nth-child(2)")
    cardFigure = front.innerHTML;
    back.classList.toggle("front-face")
    front.classList.toggle("back-face-turn")   
    front.classList.toggle("back-face")
}
