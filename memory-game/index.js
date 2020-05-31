document.addEventListener('DOMContentLoaded', () => {
  // cards
  const cardsArr = [
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

  cardsArr.sort(() => 0.5 - Math.random());

  // Game board
  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  // Create Board
  function createBoard() {
    for (let i = 0; i < cardsArr.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('You have clicked the same image!');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardsArr.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArr[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardsArr[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
