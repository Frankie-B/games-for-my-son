document.addEventListener('DOMContentLoaded', () => {
  //
  const squares = document.querySelectorAll('.grid div');
  const resultDisplay = document.querySelector('#result');
  let width = 15;
  let currentShooterIndex = 202;
  let currentInvaderIndex = 0;
  let alienInvadersTakenDown = [];
  let result = 0;
  let direction = 1;
  let invaderId;

  // Defining alien invaders
  const alineInvaders = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
  ];

  // render the alien invaders in the grid
  alineInvaders.forEach((invader) =>
    squares[currentInvaderIndex + invader].classList.add('invader')
  );

  // render space cannon
  squares[currentShooterIndex].classList.add('cannon');

  // Moving the cannon left and right
  function moveCannon(e) {
    squares[currentShooterIndex].classList.remove('cannon');
    switch (e.keyCode) {
      case 37:
        if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
        break;
      case 39:
        if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
        break;
    }
    squares[currentShooterIndex].classList.add('cannon');
  }

  document.addEventListener('keydown', moveCannon);
});
