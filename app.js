let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");

const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let turn0 = true;

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
        
        checkwin();
    });
});

const checkwin = () => {
    for (let patterns of win) {

        let val1 = box[patterns[0]].innerText;
        let val2 = box[patterns[1]].innerText;
        let val3 = box[patterns[2]].innerText;
        //Check horizontal, vertical and diagonal wins

        if (val1 != "" && val3 != "" && val2 != "") {
            if (val2 == val3 && val1 == val2) {

                alert(`Player ${val1} wins!`);

            }

        }
    }

}

