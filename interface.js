document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");
    
    squares.forEach(square => {
        
        square.addEventListener('click',handClick)

    });



})

function handClick(event){

    // console.log(event.target);
    
    handMove(event.target.id);
    updateSquares();


}


function updateSquares(){

    let squares = document.querySelectorAll(".square");
    
    squares.forEach(square => {
        
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {

            square.innerHTML = `<div class='${symbol}'></div>`
            
        }


    });


}
