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
  let cardsChosenId = [];
  let cardsWon = [];

  // Create Board
  function createBoard() {
    for (let i = 0; i < cardArr.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('Way to go you found a match!');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
    }
  }

  // flip cards over
  function flipCard() {
    let cardId = document.querySelector('data-id');
    cardsChosen.push(cardArr[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArr[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
