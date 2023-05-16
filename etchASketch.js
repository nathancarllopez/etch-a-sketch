function removeOldGrid() {
    /** Remove the old grid */
    const gridContainer = document.querySelector('#grid-container');
    const allGridSquares = document.querySelectorAll('#grid-square');
    allGridSquares.forEach((gridSquare) => {
        gridContainer.removeChild(gridSquare);
    })
}

function fillSquare() {

}

function createNewGrid() {
    /** Ask user for grid size */
    let size = prompt('Enter a number between 1-14 to set the grid size.');
    while (size > 14) {
        alert("Too large a size, try again.");
        size = prompt('Enter a number between 1-14 to set the grid size.');
    }
    
    /** Add grid of divs to #grid-container div */
    const gridContainer = document.querySelector('#grid-container');
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${size}, 50px)`)
    for (let _ = 0; _ < size * size; _++) {
        /** Create #grid-square */
        const gridSquare = document.createElement('div');
        gridSquare.setAttribute('id', 'grid-square');

        /** Add event listener for hover effect */
        

        /** Add #grid-square to #grid-container */
        gridContainer.appendChild(gridSquare);
    }
}

const setSizeButton = document.querySelector('#set-size');
setSizeButton.addEventListener('click', () => {
    removeOldGrid();
    createNewGrid();
});

const clearSquaresButton = document.querySelector('#clear-squares');