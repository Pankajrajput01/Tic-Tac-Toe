let  a = document.querySelectorAll(".box");
let b = document.querySelector(".winner-container");
let msg = document.querySelector(".msg");
let c = document.querySelector(".reset");
let  turnO = true;

const winningPatterns = [
    // Horizontal winning patterns
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    
    // Vertical winning patterns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    // Diagonal winning patterns
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  
const resetGame = () => {
    turnO = true
    enableBox();
    b.classList.add("hide");
} 

a.forEach((box) =>{
    box.addEventListener(("click") , ()=>{
       console.log("yes its working");
       if(turnO){
        box.innerText="O";
        turnO = false;
       }
       else{
        box.innerText="X";
        turnO = true;
       }
       box.disabled = true
       checkWinner();
    })
})

const showWinner= (winner) =>{
    msg.innerText = "Congratulation , Winner is  " +`${winner}`;
    b.classList.remove("hide");
    disabledBox();
}


const disabledBox = () =>{
    for (box of a){
        box.disabled= true;
    }
}

const enableBox = () =>{
    for (box of a){
        box.disabled= false;
        box.innerText = "";
    }
}

const checkWinner = ()=>{
    for( let pattern of winningPatterns){
       winVal1 = a[pattern[0]].innerText;
       winVal2 = a[pattern[1]].innerText;
       winVal3 = a[pattern[2]].innerText;
       if (winVal1 != "" && winVal2 != "" && winVal3 !=""){
            if (winVal1 === winVal2 && winVal2 === winVal3){
                console.log("congratulation you win!!!" + `${winVal1}`)
                showWinner(winVal1);
            }
        }
    }
    
}

c.addEventListener("click" , resetGame);