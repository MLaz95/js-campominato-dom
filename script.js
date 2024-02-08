const gridElement = document.querySelector('#grid');
const difficultyElement = document.querySelector('#difficulty');
const buttonElement = document.querySelector('#button');
const resultElement = document.querySelector('#result');

buttonElement.addEventListener('click', function(){
    // reset
    gridElement.innerHTML = '';
    gridElement.classList.remove('no-click');
    resultElement.innerHTML = '';

    // records grid size from difficulty selector
    let gridSize = difficultyElement.value;

    // keeps track of how many safe cells the player found
    let score = 0;

    // records where the bombs are
    let bombsArray = [];
    
    // picks a random cell and puts a bomb there if the cell is empty
    do{
        const bomb = randomNumber(gridSize);
        if(!bombsArray.includes(bomb)){
            bombsArray.push(bomb);
        }
    }while (bombsArray.length < 16)

    console.log(bombsArray);

    // adds cells until the grid size limit is reached
    for(i = 1; i <= gridSize; i++){
        const newCell = document.createElement('div');
        newCell.classList.add('cell');

        // adds a different class to determine the size of each cell depending on grid size
        if (gridSize == 100){
            newCell.classList.add('easy');
        } else if (gridSize == 81){
            newCell.classList.add('medium');
        } else {
            newCell.classList.add('hard');
        }

        newCell.innerHTML = i;
        let cellValue = Number(newCell.innerHTML);
        

        // on click behavior for each cell
        newCell.addEventListener('click', function(){
            // if cell is a bomb marks it and prevents further interaction with the field
            if(bombsArray.includes(cellValue)){
                newCell.classList.add('bomb');
                gridElement.classList.add('no-click');
                resultElement.innerHTML = `You Lost! You found ${score} safe cells`;
            // reveals a new cell and increases score by 1
            }else if(!newCell.classList.contains('active')){
                newCell.classList.add('active');
                console.log(newCell.innerHTML);
                score += 1;
                console.log(score);
            }

            if(score == gridSize - 16){
                gridElement.classList.add('no-click');
                resultElement.innerHTML = `You Won! You found all ${score} safe cells`;
            }
            
        });

        gridElement.append(newCell);
        
    }

})











// FUNCTIONS
// generates a random integer between 1 and max
function randomNumber(max) {
    const rnd = Math.floor(Math.random() * max + 1);
    return rnd
}