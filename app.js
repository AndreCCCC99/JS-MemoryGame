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

    function createBoard() {
        for(let i= 0; i < cardArray.length;i++ ){
            var card = document.createElement('img');
            card.setAttribute('src','images/blank.PNG');
            card.setAttribute('data-id',i);

            grid.appendChild(card);
        }
    }



    createBoard();

})