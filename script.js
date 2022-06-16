let arrayCards = []
let frontImages=[`img src="img/unicornparrot.gif" alt="unicornparrot"`,
    `img src="img/bobrossparrot.gif" alt="bobrossparrot"`,
    `img src="img/explodyparrot.gif" alt="explodyparrot"`,
    `img src="img/fiestaparrot.gif" alt="fiestaparrot"`,
    `img src="img/metalparrot.gif" alt="metalparrot"`,
    `img src="img/revertitparrot.gif" alt="revertitparrot"`,
    `img src="img/tripletsparrot.gif" alt="tripletsparrot"`]

function defineNumberOfCards(){
    numberSelected = prompt("Com quantas cartas você quer jogar? Escolha número par entre 4 e 14")
    while (numberSelected%2 != 0 || numberSelected>14 || numberSelected == null || numberSelected == ''){
        alert("Escolha número par e entre 4 e 14!")
        numberSelected = prompt("Com quantas cartas você quer jogar? Escolha número par entre 4 e 14")
    }
    cardsGame = document.querySelector(".cards")
    frontImages.sort(comparador);
    for(i=0;i<(numberSelected/2);i++){
        let templadeCard = `
        <div class="card-game" data-identifier="card" onclick="turnCard(this)">
            <div data-identifier="back-face" class="face">
                <img src="img/front.png" alt="carrot">
            </div>
            <div data-identifier="front-face" class="back-face face">
                <${frontImages[i]}>
            </div>
        </div>`    
        arrayCards.push(`${templadeCard}`,`${templadeCard}`);
    }; 
    arrayCards.sort(comparador);
    for(i=0;i<(numberSelected);i++){
        cardsGame.innerHTML = cardsGame.innerHTML + arrayCards[i]}
}

function comparador() { 
	return Math.random() - 0.5; 
}

defineNumberOfCards()

function turnCard(element){
    back = element.querySelector("div:nth-child(1)")
    front = element.querySelector("div:nth-child(2)")
    cardTurned = cardsGame.querySelector(".front-face");
    back.classList.add("front-face")
    front.classList.add("back-face-turn")   
    front.classList.remove("back-face")
    if(cardTurned === null){
        firstCardTurned = element.innerHTML
        cardSelected = element
        FindPairs()
    }
    else if(cardTurned !== null){
        secondCardTurned = element.innerHTML
        cardSelected2 = element
        FindPairs()
    }
}

function FindPairs(){
    if (firstCardTurned !== secondCardTurned){
        console.log("Não são iguais")
        // quando virar irá redefinir o cardTurned
    } if (firstCardTurned === secondCardTurned){
        console.log("São Iguais")
    }
}