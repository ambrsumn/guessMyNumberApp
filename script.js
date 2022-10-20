'use strict';

let x = Math.trunc(Math.random() * 10) + 1;

let points = 20;

function checkCompare() {

    let temp = Number(document.querySelector('.guess_display').value);
    const body = document.querySelector('body');

    if (temp === x) {

        body.style.backgroundColor = 'green';

        document.querySelector('.message').textContent = "🎉 Hurrah!!";

        const temp = Number(document.querySelector('.hscore').textContent);
        console.log(temp);
        document.querySelector('.hscore').textContent = Math.max(temp, points);

        points = 20;
        document.querySelector('.score').textContent = points;
        x = Math.trunc(Math.random() * 10) + 1;

        document.querySelector('.display').textContent = document.querySelector('.hscore').textContent
    }

    else if (temp < x) {

        body.style.backgroundColor = 'black';
        document.querySelector('.message').textContent = "Enter a Bigger number";
        points--;
        document.querySelector('.score').textContent = points;
    }

    else if (temp > x) {

        body.style.backgroundColor = 'black';
        document.querySelector('.message').textContent = "Enter a Smaller number";
        points--;
        document.querySelector('.score').textContent = points;
    }
}

function trash() {
    location.reload()
}


document.querySelector('.checker').addEventListener('click', checkCompare);
document.querySelector('.reset').addEventListener('click', trash);