let arrayCards = []
let counter = 0
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
        <div class="card-game notPair" data-identifier="card" onclick="turnCard(this)">
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
        setTimeout(showAll, 500)
}

function comparador() { 
	return Math.random() - 0.5; 
}

defineNumberOfCards()
startCount()

firstCard = undefined
secondCard = undefined
cardTurned = cardsGame.querySelectorAll(".card-game.notPair");
contadorJogada = 0

function showAll(){
    for(i=0;i<cardTurned.length;i++){
    back = cardTurned[i].querySelector("div:nth-child(1)")
    front = cardTurned[i].querySelector("div:nth-child(2)")
    back.classList.add("front-face")
    front.classList.add("back-face-turn")   
    front.classList.remove("back-face")}
    setTimeout(notPairYet, 400);
    cardTurned = cardsGame.querySelectorAll(".card-game.notPair");
}

function turnCard(element){
    back = element.querySelector("div:nth-child(1)")
    front = element.querySelector("div:nth-child(2)")
    if(front.classList.contains("back-face") && secondCard == undefined){
    back.classList.add("front-face")
    front.classList.add("back-face-turn")   
    front.classList.remove("back-face")
    if(firstCard === undefined && secondCard === undefined){
        firstCard = element.innerHTML
        contadorJogada++
    }
    else if(firstCard != undefined){
        secondCard = element.innerHTML
        contadorJogada++
        FindPairs(element)
    }
    }
}
function FindPairs(element){
    if(firstCard != undefined && secondCard != undefined){
        if(secondCard == firstCard){
            for(i=0;i<cardTurned.length;i++){
                if(cardTurned[i].innerHTML == firstCard){
                    cardTurned[i].classList.remove("notPair")            
                }
                if(cardTurned.length == 0){
                    stopCount()
                }
            }
            
        } else if(firstCard != secondCard){
            setTimeout(notPairYet, 1000);
        }
    }
    cardTurned = cardsGame.querySelectorAll(".card-game.notPair");
    setTimeout(youWIn, 1000)
}

function notPairYet(){
    for(i=0;i<cardTurned.length;i++){
        let thisone = cardTurned[i]
        back = thisone.querySelector("div:nth-child(1)")
        front = thisone.querySelector("div:nth-child(2)")
        back.classList.remove("front-face")
        front.classList.remove("back-face-turn")   
        front.classList.add("back-face")}
}

function youWIn(){
    firstCard = undefined
    secondCard = undefined
    if(cardTurned.length === 0){
        alert(`Você ganhou em ${counter-1} segundos com ${contadorJogada} jogadas`)
    let resposta = prompt("Você quer jogar novamente? Responda sim ou não")
    while(resposta != 'sim' && resposta != 'não'){
        alert("Responda sim ou não")
        resposta = prompt("Você quer jogar novamente?")
    }
    if(resposta === 'sim'){
        cardsGame.innerHTML = ""
        arrayCards = []
        numberSelected = undefined
        contadorJogada = 0
        counter = 0
        defineNumberOfCards()
        cardTurned = cardsGame.querySelectorAll(".card-game.notPair");
    }else if(resposta === 'não'){
        alert("Bye!")
        close()
    }
}
}

function startCount() {
    document.querySelector(".topo").innerHTML = `<div class='timer'> Timer: ${counter} s</div>`;
    timeout = setInterval(secondsCount, 1000);
  }

  function secondsCount(){
    document.querySelector(".topo").innerHTML = `<div class='timer'> Timer: ${counter} s</div>`;
    counter++;
  }

  function stopCount() {
    clearTimeout(timeout);
}