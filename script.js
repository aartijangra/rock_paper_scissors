

let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins: 0,
    losses: 0,
    ties: 0
};
//default value in case left side get falsy then it will get executed

updateScoreElement();

function playGame(playerMove) {
    computermove = pickcomputermove();
    let res = '';
    if (playerMove === 'scissors') {
        if (computermove === 'rock') res = 'You lose 🤦‍♀️🤦‍♂️';
        else if (computermove === 'Paper') res = 'You win 🥳🥳';
        else if (computermove === 'Scissors') res = 'Tie 😶';

    }
    if (playerMove === 'rock') {
        computermove = pickcomputermove();
        res = '';
        if (computermove === 'rock') res = 'Tie 😶';
        else if (computermove === 'Paper') res = 'You lose 🤦‍♀️🤦‍♂️';
        else if (computermove === 'Scissors') res = 'You win 🥳🥳';


    }
    if (playerMove === 'paper') {
        computermove = pickcomputermove();
        res = '';
        if (computermove === 'rock') res = 'You win 🥳🥳';
        else if (computermove === 'Paper') res = 'Tie 😶';
        else if (computermove === 'Scissors') res = 'You lose 🤦‍♀️🤦‍♂️';


    }

    if (res === 'You win 🥳🥳') {
        score.wins += 1;
    }
    else if (res === 'You lose 🤦‍♀️🤦‍♂️') {
        score.losses += 1;

    }
    else if (res === 'Tie 😶') {
        score.ties += 1;

    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = res;
    document.querySelector('.js-moves').innerHTML = `you <img src="${playerMove}.png" alt="" class="move-icon">
              <img src="${computermove}.png" alt="" class="move-icon"> computer`;

}


function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

function pickcomputermove() {
    let computermove = '';
    const randomNum = Math.random();
    if (randomNum >= 0 && randomNum < 1 / 3) {
        computermove = 'rock';
    }
    else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        computermove = 'Paper';
    }
    else if (randomNum >= 2 / 3 && randomNum <= 1) {
        computermove = 'Scissors';
    }

    return computermove;
}

