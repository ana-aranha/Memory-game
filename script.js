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
}

function comparador() { 
	return Math.random() - 0.5; 
}

defineNumberOfCards()
let equalCards = []

function turnCard(element){
    back = element.querySelector("div:nth-child(1)")
    front = element.querySelector("div:nth-child(2)")
    if(front.classList.contains("back-face")){
    back.classList.add("front-face")
    front.classList.add("back-face-turn")   
    front.classList.remove("back-face")
    FindPairs(element)}
}
contador = 0
cardTurned = cardsGame.querySelectorAll(".card-game.notPair");
function FindPairs(element){
    if(contador==0){
        startCount()
    }
    contador++
    if(equalCards.length<2){
        equalCards.push(element.innerHTML)
        if(equalCards.length == 2 && equalCards[0] === equalCards[1]){
            for(i=0;i<cardTurned.length;i++){
                if(cardTurned[i].innerHTML == equalCards[0]){
                    cardTurned[i].classList.remove("notPair")
                }
            if(cardTurned.length == 0){
                stopCount()
            }
            }
            equalCards=[]
        } else if(equalCards.length == 2 && equalCards[0] !== equalCards[1]){
            setTimeout(notPairYet, 1000);
            equalCards=[]
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
    if(cardTurned.length === 0){
        alert(`Você ganhou em ${counter-1} segundos com ${contador} jogadas`)
    }
}

function startCount() {
    document.querySelector(".topo").innerHTML = `<div class='timer'> Timer: ${counter} s</div>`;
    counter++;
    timeout = setTimeout(startCount, 1000);
  }

//   function startCount() {
//     if (!timer_on) {
//       timer_on = 1;
//       timedCount();
//     }
//   }

  function stopCount() {
    clearTimeout(timeout);
}