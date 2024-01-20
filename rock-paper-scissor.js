let computermove = '';

        let score = JSON.parse(localStorage.getItem('score'));
        if (score === null) {
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            }
        }
        updatedscore();

        function playgame(playermove) {

            let result = '';
            if (playermove === 'rock') {
                if (computermove === 'rock') {

                    result = 'Tie';
                } else if (computermove === 'scissor') {
                    result = 'Win';
                } else if (computermove === 'paper') {
                    result = 'Lose';
                }
            }
            if(playermove==='paper')
            {
                if(computermove==='rock')
                {

                result='Win';
                }
                else if(computermove==='scissor')
                {
                result='Lose';
                }
                else if(computermove==='paper')
                {
                result='Tie';
                }
            }
            if(playermove==='scissor')
            {
                if(computermove==='rock')
                {

                result='Lose';
                }
                else if(computermove==='scissor')
                {
                result='Tie';
                }
                else if(computermove==='paper')
                {
                result='Win';
                }
            }

            if (result === 'Win') {
                score.wins = score.wins + 1;
            } else if (result === 'Lose') {
                score.losses += 1;
            } else if (result === 'Tie') {
                score.ties += 1;
            }

            // even the page gets reload the score sets the same
            localStorage.setItem('score', JSON.stringify(score));

            document.querySelector('.js-result').innerHTML = `You ${result}`;
            document.querySelector('.js-moves').innerHTML = ` You <img src="${playermove}-emoji.png" alt="move" class="img-button">
            <img src="${computermove}-emoji.png" alt="move" class="img-button"> computer`;


            updatedscore();

            alert(`You picked ${playermove}, The computer picked ${computermove}. you ${result}
            Wins : ${score.wins}
            Losses : ${score.losses}
            Ties : ${score.ties}`);

        }

        function updatedscore() {
            document.querySelector('.js-score').innerHTML =
                `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`
        }

        function rock() {

            const val = Math.random();

            if (val >= 0 && val < 1 / 3) {
                console.log('rock');
                computermove = 'rock';
            } else if (val >= 1 / 3 && val < 2 / 3) {
                console.log('paper');
                computermove = 'paper';
            } else {
                console.log('scissor');
                computermove = 'scissor';
            }
            console.log(computermove);
            playgame('rock')

        }

        function paper() {

            const val = Math.random();

            if (val >= 0 && val < 1 / 3) {
                console.log('rock');
                computermove = 'rock';
            } else if (val >= 1 / 3 && val < 2 / 3) {
                console.log('paper');
                computermove = 'paper';
            } else {
                console.log('scissor');
                computermove = 'scissor';
            }
            console.log(computermove);
            playgame('paper');
        }

        function scissor() {

            const val = Math.random();

            if (val >= 0 && val < 1 / 3) {
                console.log('rock');
                computermove = 'rock';
            } else if (val >= 1 / 3 && val < 2 / 3) {
                console.log('paper');
                computermove = 'paper';
            } else {
                console.log('scissor');
                computermove = 'scissor';
            }
            console.log(computermove);
            playgame('scissor');
        }

        function reset() {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            alert(`Score has been reset
Wins : ${score.wins}
Losses : ${score.losses}
Ties : ${score.ties}`);
            updatedscore();
        }