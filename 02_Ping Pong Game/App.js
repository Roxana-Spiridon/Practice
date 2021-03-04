window.addEventListener("DOMContentLoaded", function(e) {
    let btnOne = document.querySelector("#player1");
    let btnTwo = document.querySelector("#player2");
    let btnReset = document.querySelector("#reset");
    btnOne.addEventListener("click", clickedButton);
    btnTwo.addEventListener("click", clickedButton);
    btnReset.addEventListener("click", clickedButton);
})

let shouldStop = false;

function clickedButton(event) {
    // console.log("clicked", event);
    let clickedBtn = event.target.id;

    let fstPlayerScore = document.querySelector("#score1");
    let counter1 = parseInt(fstPlayerScore.innerText);

    let scdPlayerScore = document.querySelector("#score2");
    let counter2 = parseInt(scdPlayerScore.innerText);

    let reset = document.querySelector("#reset");

    let selectList = document.querySelector("#points");
    let maxScore = parseInt(selectList.value.replace("points", ""));

    if (clickedBtn === "reset") {
        shouldStop = false;
        counter1 = 0;
        counter2 = 0;
        fstPlayerScore.innerText = 0;
        scdPlayerScore.innerText = 0;
        fstPlayerScore.style.color = "white";
        scdPlayerScore.style.color = "white";

        btnOne.disabled = true;
        btnTwo.disabled = true;
    }

    if (shouldStop === true) {
        return;
    }

    if (clickedBtn === "player1") {
        counter1 += 1;
        fstPlayerScore.innerText = counter1;
    }

    if (clickedBtn === "player2") {
        counter2 += 1;
        scdPlayerScore.innerText = counter2;
    }

    if (counter1 === maxScore || counter2 === maxScore) {
        if (counter1 > counter2) {
            fstPlayerScore.style.color = "yellowgreen";
            scdPlayerScore.style.color = "red";
        } else {
            fstPlayerScore.style.color = "red";
            scdPlayerScore.style.color = "yellowgreen";
        }
        shouldStop = true;
    }
}