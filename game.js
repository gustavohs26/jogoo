let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols = ["freddy","jason"];
let result = 0;
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const winning_message = document.querySelector('[data-winning-message]')
const restartButton = document.querySelector('[data-winning-message-button]')
let gameOver = false;

let winstates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    

]

function handMove(position){
    result++;

    if (board[position]  == '') {
        board[position]=symbols[playerTime];

        if (isWin()){
            return endGame()
            
        }
        if(result >= 9){
            return empate()
           
        }
    
        if(!gameOver){
            if(playerTime == 0){
    
                playerTime = 1;
        
            }else{
                playerTime =0
            }   


            var pc = document.getElementById('_bot').checked;

            if(pc && playerTime == 1){

                var a = BOT();
                console.log("Here: " + a);

                return handMove(a);
            }
        }

        
    }

}

function isWin(){


    for (let i = 0; i < winstates.length; i++) {
        let seq = winstates[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
    
        if (board[pos1] == board[pos2] && board[pos1] == board[pos3]
            && board[pos1] != '') {

            return true;

        }
       
    }
    return false;
}

function endGame(){
    
    winningMessageTextElement.innerHTML = 'o vencedor é o '+symbols[playerTime];

    winning_message.classList.add("show_winning_menssage");

    winning_message.classList.add("show_winning_menssage");
}

function empate(){

   
    winningMessageTextElement.innerHTML = 'empate'
    
    winning_message.classList.add("show_winning_menssage");

    winning_message.classList.add("show_winning_menssage");
}
const btn = document.querySelector('#refresh');

btn.addEventListener('click', ()=>{

    location.reload()
})


function BOT(){

    var slot4 = document.getElementById('4').getElementsByTagName('div');

    if(slot4.length == 0){
        return '4';
    }

    var slot = document.getElementById(`${Math.floor(Math.random() * 8)}`);
    var divs = slot.getElementsByTagName('div').length;


    console.log('Elements: ' + divs + ": Slot " + slot.id);

    if(divs == 0){
        return slot.id;
    }

    return BOT();
}



   