let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let new_game = document.querySelector("#Newgame");
let msg = document.querySelector('#msg');
let msgcontainer = document.querySelector(".msg-container");

const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let turn0 = true;
let count = 0;

const resetGame = () => {
    turn0 = true;
    enablebox();
    msgcontainer.classList.add('hide');
    count =0;
}


const newGame = () => {
    location.reload(
        alert("Game Restarted")
    );
};


//Add click event listener to each box
box.forEach(box => {
    box.addEventListener("click", () => {
        console.log("box was clicked ")
        if (turn0) {
            box.innerHTML = "O";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        checkwin();

        if  (count == 9) {
            Drawgame();
        }
    });
});

const disablebox = () => {
    for (let i of box) {
        i.disabled = true;
    }
};


const enablebox = () => {
    for (let i of box) {
        i.disabled = false;
        i.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is player  ${winner} `;
    msgcontainer.classList.remove('hide');
    disablebox();
};

const Drawgame = () => {
    msg.innerText = `No  one wins, it's a draw`;
    msgcontainer.classList.remove('hide');
    disablebox();

};
const checkwin = () => {
    for (let patterns of win) {

        let val1 = box[patterns[0]].innerText;
        let val2 = box[patterns[1]].innerText;
        let val3 = box[patterns[2]].innerText;
        //Check horizontal, vertical and diagonal wins

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                // console.log("the winner is" `${val1}` );
                // alert(`Player ${val1} wins!`);
                showWinner(val1);
                return true;
            }


        }

    }

};

new_game .addEventListener( "click", newGame );
reset.addEventListener( "click", resetGame );