document.addEventListener('DOMContentLoaded', () => {


    const cardArray = [
        {
            name: 'CHUCKY',
            img: 'images/Chucky.PNG'
        },
        {
            name: 'CHUCKY',
            img: 'images/Chucky.PNG'
        },
        {
            name: 'COURTNEY',
            img: 'images/Courtney.PNG'
        },
        {
            name: 'COURTNEY',
            img: 'images/Courtney.PNG'
        },
        {
            name: 'NEO',
            img: 'images/Neo.PNG'
        },
        {
            name: 'NEO',
            img: 'images/Neo.PNG'
        },
        {
            name: 'SMOKER',
            img: 'images/smoker.PNG'
        },
        {
            name: 'SMOKER',
            img: 'images/smoker.PNG'
        }

    ]


    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = [] 


    //criar board 
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/pattern.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //check for match
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOne = cardsChosenId[0];
        const optionTwo = cardsChosenId[1];    
        if (optionOne === optionTwo){
            alert('match found!')
            cards[optionOne].setAttribute('src','images/blank.PNG' )
            cards[optionTwo].setAttribute('src','images/blank.PNG' )
            cardsWon.push(cardsChosen)

        }else{
            cards[optionOne].setAttribute('src','images/pattern.jpg' )
            cards[optionTwo].setAttribute('src','images/pattern.jpg' )
            alert('No Match');
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardsArray.length/2) {
            resultDisplay.textContent = 'You WON!'
        }
    }


    // flip card 

    function flipcard() {

        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,200)
        }
    }

    createBoard();

})



