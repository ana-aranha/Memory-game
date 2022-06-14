function defineNumberOfCards(){
    numberSelected = prompt("Com quantas cartas você quer jogar? Escolha número par entre 4 e 14")
    while (numberSelected%2 != 0 || numberSelected>14 || numberSelected == null || numberSelected == ''){
        alert("Escolha número par e entre 4 e 14!")
        numberSelected = prompt("Com quantas cartas você quer jogar? Escolha número par entre 4 e 14")
    }
    // cardsArray = document.querySelectorAll(".card-game")
    // console.log({cardsArray})
    // for(i=0;i<numberSelected;i++){
    //     cardsArray[i].removeClass('hidden')
    // }
}

defineNumberOfCards();

function turnCard(element){
    back = element.querySelector("div:nth-child(1)")
    front = element.querySelector("div:nth-child(2)")
    cardFigure = front.innerHTML;
    console.log({cardFigure})
    back.classList.toggle("front-face")
    front.classList.toggle("back-face-turn")   
    front.classList.toggle("back-face")
}
