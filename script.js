let ArrayTest = []

function defineNumberOfCards(){
    numberSelected = prompt("Com quantas cartas você quer jogar? Escolha número par entre 4 e 14")
    while (numberSelected%2 != 0 || numberSelected>14 || numberSelected == null || numberSelected == ''){
        alert("Escolha número par e entre 4 e 14!")
        numberSelected = prompt("Com quantas cartas você quer jogar? Escolha número par entre 4 e 14")
    }
    cardsArray = [`
    <div class="card-game" data-identifier="card" onclick="turnCard(this)">
        <div data-identifier="back-face" class="face">
            <img src="img/front.png" alt="carrot">
        </div>
        <div data-identifier="front-face" class="back-face face">
            <img src="img/unicornparrot.gif" alt="unicornparrot">
        </div>
    </div>`
    ,`
    <div class="card-game" data-identifier="card" onclick="turnCard(this)">
        <div data-identifier="back-face" class="face">
            <img src="img/front.png" alt="carrot">
        </div>
        <div data-identifier="front-face" class="back-face face">
            <img src="img/unicornparrot.gif" alt="unicornparrot">
        </div>
    </div>`
    ,`<div class="card-game" data-identifier="card" onclick="turnCard(this)">
        <div data-identifier="back-face" class="face">
            <img src="img/front.png" alt="carrot">
        </div>
        <div data-identifier="front-face" class="back-face face">
            <img src="img/bobrossparrot.gif" alt="bobrossparrot">
        </div>
    </div>`
    ,`<div class="card-game" data-identifier="card" onclick="turnCard(this)">
    <div data-identifier="back-face" class="face">
        <img src="img/front.png" alt="carrot">
    </div>
    <div data-identifier="front-face" class="back-face face">
        <img src="img/bobrossparrot.gif" alt="bobrossparrot">
    </div>
    </div>`
    ,`<div class="card-game" data-identifier="card" onclick="turnCard(this)">
        <div data-identifier="back-face" class="face">
            <img src="img/front.png" alt="carrot">
        </div>
        <div data-identifier="front-face" class="back-face face">
            <img src="img/explodyparrot.gif" alt="explodyparrot">
        </div>
    </div>`
    ,`<div class="card-game" data-identifier="card" onclick="turnCard(this)">
    <div data-identifier="back-face" class="face">
        <img src="img/front.png" alt="carrot">
    </div>
    <div data-identifier="front-face" class="back-face face">
        <img src="img/explodyparrot.gif" alt="explodyparrot">
    </div>
    </div>`
    ,`<div class="card-game" data-identifier="card" onclick="turnCard(this)">
        <div data-identifier="back-face" class="face">
            <img src="img/front.png" alt="carrot">
        </div>
        <div data-identifier="front-face" class="back-face face">
            <img src="img/fiestaparrot.gif" alt="fiestaparrot">
        </div>
    </div>`
    ,`<div class="card-game" data-identifier="card" onclick="turnCard(this)">
    <div data-identifier="back-face" class="face">
        <img src="img/front.png" alt="carrot">
    </div>
    <div data-identifier="front-face" class="back-face face">
        <img src="img/fiestaparrot.gif" alt="fiestaparrot">
    </div>
    </div>`
    ,`<div class="card-game" data-identifier="card" onclick="turnCard(this)">
        <div data-identifier="back-face" class="face">
            <img src="img/front.png" alt="carrot">
        </div>
        <div data-identifier="front-face" class="back-face face">
            <img src="img/metalparrot.gif" alt="metalparrot">
        </div>
    </div>`
    ,`<div class="card-game" data-identifier="card" onclick="turnCard(this)">
    <div data-identifier="back-face" class="face">
        <img src="img/front.png" alt="carrot">
    </div>
    <div data-identifier="front-face" class="back-face face">
        <img src="img/metalparrot.gif" alt="metalparrot">
    </div>
    </div>`
    ,`<div class="card-game" data-identifier="card" onclick="turnCard(this)">
        <div data-identifier="back-face" class="face">
            <img src="img/front.png" alt="carrot">
        </div>
        <div data-identifier="front-face" class="back-face face">
            <img src="img/revertitparrot.gif" alt="revertitparrot">
        </div>
    </div>`
    ,`<div class="card-game" data-identifier="card" onclick="turnCard(this)">
    <div data-identifier="back-face" class="face">
        <img src="img/front.png" alt="carrot">
    </div>
    <div data-identifier="front-face" class="back-face face">
        <img src="img/revertitparrot.gif" alt="revertitparrot">
    </div>
    </div>`
    ,`<div class="card-game" data-identifier="card" onclick="turnCard(this)">
        <div data-identifier="back-face" class="face">
            <img src="img/front.png" alt="carrot">
        </div>
        <div data-identifier="front-face" class="back-face face">
            <img src="img/tripletsparrot.gif" alt="tripletsparrot">
        </div>
    </div>`
    ,`<div class="card-game" data-identifier="card" onclick="turnCard(this)">
    <div data-identifier="back-face" class="face">
        <img src="img/front.png" alt="carrot">
    </div>
    <div data-identifier="front-face" class="back-face face">
        <img src="img/tripletsparrot.gif" alt="tripletsparrot">
    </div>
    </div>`
    ]
    cardsGame = document.querySelector(".cards")
    for(i=0;i<(numberSelected);i++){
        ArrayTest.push(cardsArray[i])
    }; 
    ArrayTest.sort(comparador);
    for(i=0;i<(numberSelected);i++){
        cardsGame.innerHTML = cardsGame.innerHTML + ArrayTest[i]}
}

function comparador() { 
	return Math.random() - 0.5; 
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