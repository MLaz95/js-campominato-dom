const gridElement = document.querySelector('#grid');
const difficultyElement = document.querySelector('#difficulty');
const buttonElement = document.querySelector('#button');

buttonElement.addEventListener('click', function(){
    // reset
    gridElement.innerHTML = '';

    // records grid size from difficulty selector
    let gridSize = difficultyElement.value;

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

        // marks a cell as active and logs its number
        newCell.addEventListener('click', function(){
            newCell.classList.add('active');
            console.log(newCell.innerHTML);
        });

        gridElement.append(newCell);
    }
})