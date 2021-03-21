document.addEventListener('DOMContentLoaded', () => {


    const cardArray = [
        {
            name: 'BEL',
            img: 'images/Bel.PNG'
        },
        {
            name: 'CHUCKY',
            img: 'images/Chucky.PNG'
        },
        {
            name: 'CLOWN',
            img: 'images/clown.PNG'
        },
        {
            name: 'COURTNEY',
            img: 'images/Courtney.PNG'
        },
        {
            name: 'ELLIOT',
            img: 'images/Elliot.PNG'
        },
        {
            name: 'NEO',
            img: 'images/Neo.PNG'
        },
        {
            name: 'NORRIS',
            img: 'images/Norris.PNG'
        },
        {
            name: 'SMOKER',
            img: 'images/smoker.PNG'
        },

    ]

    const grid = document.querySelector('.grid')
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

    }


    // flip card 

    function flipcard() {

        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500)
        }
    }

    createBoard();

})



