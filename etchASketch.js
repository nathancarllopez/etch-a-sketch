const gridContainer = document.querySelector('#grid-container');

function removeOldGrid() {
    /** Remove the old grid */
    const allGridSquares = document.querySelectorAll('#grid-square');
    allGridSquares.forEach((gridSquare) => {
        gridContainer.removeChild(gridSquare);
    })
}

function fillSquare(gridSquare) {
    gridSquare.setAttribute('style', 'background: black');
}

function createNewGrid() {
    /** Ask user for grid size */
    let size = prompt('Enter a number between 1-10 to set the grid size.');
    while (size > 10 || size < 1) {
        alert("Too small/large a size, try again.");
        size = prompt('Enter a number between 1-10 to set the grid size.');
    }
    
    /** Add grid of divs to #grid-container div */
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${size}, 50px)`)
    for (let _ = 0; _ < size * size; _++) {
        /** Create #grid-square */
        const gridSquare = document.createElement('div');
        gridSquare.setAttribute('id', 'grid-square');

        /** Add event listener for hover effect */
        gridSquare.addEventListener('mouseenter', e => {
            const currentSquare = e.target;
            fillSquare(currentSquare);
        });

        /** Add event listener to clear one square */
        gridSquare.addEventListener('click', e => {
            const currentSquare = e.target;
            currentSquare.setAttribute('style', 'background: white');
        })

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
clearSquaresButton.addEventListener('click', () => {
    const allGridSquares = document.querySelectorAll('#grid-square');
    allGridSquares.forEach((gridSquare) => {
        gridSquare.setAttribute('style', 'background: white');
    })
})