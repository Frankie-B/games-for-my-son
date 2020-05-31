document.addEventListener('DOMContentLoaded', () => {
  // cards
  const cardArr = [
    {
      name: 'jellyOne',
      img: 'images/Jelly-1.png',
    },
    {
      name: 'jellyOne',
      img: 'images/Jelly-1.png',
    },
    {
      name: 'jellyTwo',
      img: 'images/Jelly-2.png',
    },
    {
      name: 'jellyTwo',
      img: 'images/Jelly-2.png',
    },
    {
      name: 'jellyThree',
      img: 'images/Jelly-3.png',
    },
    {
      name: 'jellyThree',
      img: 'images/Jelly-3.png',
    },
    {
      name: 'jellyFour',
      img: 'images/Jelly-4.png',
    },
    {
      name: 'jellyFour',
      img: 'images/Jelly-4.png',
    },
    {
      name: 'jellyFive',
      img: 'images/Jelly-5.png',
    },
    {
      name: 'jellyFive',
      img: 'images/Jelly-5.png',
    },
    {
      name: 'jellySix',
      img: 'images/Jelly-6.png',
    },
    {
      name: 'jellySix',
      img: 'images/Jelly-6.png',
    },
  ];

  // Game board
  const grid = document.querySelector('.grid');
  let cardsChosen = [];
  cardsChosenId = [];

  // Create Board
  function createBoard() {
    for (let i = 0; i < cardArr.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      // card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches

  // flip cards over
  function flipCard() {
    let cardId = document.querySelector('data-id');
    cardsChosen.push(cardArr[cardId].name);
  }

  createBoard();
});
