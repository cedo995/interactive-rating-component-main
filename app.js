let ratingScore;

let circleButtons = document.querySelectorAll(".circle");
let submitButton = document.querySelector('.submit-button');
let view1 = document.querySelector('.rating-container');
let view2 = document.querySelector('.rated-container');



document.querySelector('.rating-numbers').addEventListener("click", function (e) {
    ratingScore = e.target.innerText
    for (i = 0; i < circleButtons.length; i++) {
        if (circleButtons[i].innerText != ratingScore) {
            circleButtons[i].style.backgroundColor = 'rgb(38, 47, 56)';
        }
        else circleButtons[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
    }
});

submitButton.addEventListener("click", function () {
    if (ratingScore != undefined) {
        view1.style.display = 'none';
        view2.style.display = 'flex';
        document.querySelector('.rating-number').innerText = ratingScore;
    }

});