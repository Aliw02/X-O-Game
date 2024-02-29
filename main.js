
let container = document.querySelector(".container");
let cards = document.querySelectorAll(".card")
let shadowbackground = document.querySelector(".shadow-background")
let winCard = document.querySelector(".win-card");
let input1 = document.getElementById("one");
let exitBtn = document.querySelector(".exit");
let tryAgainBtn = document.querySelector(".try-again");
let input2 = document.getElementById("two");
let input3 = document.getElementById("three");
let input4 = document.getElementById("four");
let input5 = document.getElementById("five");
let input6 = document.getElementById("six");
let input7 = document.getElementById("seven");
let input8 = document.getElementById("eight");
let input9 = document.getElementById("nine");

let count = 1;


let turn = false;

let h3 = document.createElement("h3");
h3.innerText = "Congratulaions";


let p = document.createElement("p");


// Function To Print The resulte
function displayShadow (e) {
    winCard.appendChild(h3);
    if (e.textContent === "X") {
        p.innerText = "X is Win";
        winCard.appendChild(p);
    }
    else {
        p.innerText = "O is Win"
        winCard.appendChild(p);
    }
    shadowbackground.style.display = "block";
    shadowbackground.style.zIndex = "1000";
    shadowbackground.style.position = "absolute";
}

// Function To Get The Result
function flipping() {
    cards.forEach((e) => {
    e.addEventListener("click",() => {
        e.style.animation = "skipping 0.3s alternate"
        e.textContent = "X";
        if (count <= 9) {
            if (turn == true) {
                e.textContent = "O";
                turn = false;
            }

            else {
                turn = true;
            }
            if (e.textContent == "X" || e.textContent == "O") {
                if (count == 9) {
                    p.innerText = "You Are Equale :)";
                    winCard.appendChild(p);
                    shadowbackground.style.display = "block";
                    shadowbackground.style.zIndex = "1000";
                    shadowbackground.style.position = "absolute";
                }
                if (e.textContent === input1.textContent & e.textContent === input2.textContent & e.textContent === input3.textContent) {
                    displayShadow(e);
                }
                if (e.textContent === input4.textContent & e.textContent === input5.textContent & e.textContent === input6.textContent) {
                    displayShadow(e);
                }
                if (e.textContent === input7.textContent & e.textContent === input8.textContent & e.textContent === input9.textContent) {
                    displayShadow(e);
                }
                if (e.textContent === input1.textContent & e.textContent === input4.textContent & e.textContent === input7.textContent) {
                    displayShadow(e);
                }
                if (e.textContent === input2.textContent & e.textContent === input5.textContent & e.textContent === input8.textContent) {
                    displayShadow(e);
                }
                if (e.textContent === input3.textContent & e.textContent === input6.textContent & e.textContent === input9.textContent) {
                    displayShadow(e);
                }
                if (e.textContent === input1.textContent & e.textContent === input5.textContent & e.textContent === input9.textContent) {
                    displayShadow(e);
                }
                if (e.textContent === input3.textContent & e.textContent === input5.textContent & e.textContent === input7.textContent) {
                    displayShadow(e);
                }
            }
            count +=1;
            console.log("count = ", count)
        }
    });
    });
}

document.addEventListener("click", (e) => {
    if (e.target.className == "try-again") {
        location.reload();
    }
    if (e.target.className == "exit") {
        e.target.parentElement.remove();
    }
});


window.addEventListener("load", flipping())




container.style.backgroundColor = "#0f67fd";