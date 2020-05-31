document.addEventListener('DOMContentLoaded', () => {
  // logic for the card gam is going to go in here

  const cardsArr = [
    {
      name: jelly1,
      img: './assets/images/Jelly (1).png',
    },
    {
      name: jelly1,
      img: './assets/images/Jelly (1).png',
    },
    {
      name: jelly2,
      img: './assets/images/Jelly (2).png',
    },
    {
      name: jelly2,
      img: './assets/images/Jelly (2).png',
    },
    {
      name: jelly3,
      img: './assets/images/Jelly (3).png',
    },
    {
      name: jelly3,
      img: './assets/images/Jelly (3).png',
    },
    {
      name: jelly4,
      img: './assets/images/Jelly (4).png',
    },
    {
      name: jelly4,
      img: './assets/images/Jelly (4).png',
    },
    {
      name: jelly5,
      img: './assets/images/Jelly (5).png',
    },
    {
      name: jelly5,
      img: './assets/images/Jelly (5).png',
    },
    {
      name: jelly6,
      img: './assets/images/Jelly (6).png',
    },
    {
      name: jelly6,
      img: './assets/images/Jelly (6).png',
    },
    {
      name: jelly7,
      img: './assets/images/Jelly (7).png',
    },
    {
      name: jelly7,
      img: './assets/images/Jelly (7).png',
    },
    {
      name: jelly8,
      img: './assets/images/Jelly (8).png',
    },
    {
      name: jelly8,
      img: './assets/images/Jelly (8).png',
    },
  ];

  // Game board
  const grid = document.querySelector('.grid');

  // Create Board
  function createBoard() {
    for (let i = 0; i < cardsArr.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', './assets/images/white.png');
      card.setAttribute('data-id', 1);
      /
      grid.appendChild(card);
    }
  }
});
