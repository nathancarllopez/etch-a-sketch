GRIDSIZE = 16;

/** Add grid of divs to #grid-container div */
const gridContainer = document.querySelector('#grid-container');
for (let _ = 0; _ < GRIDSIZE; _++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'grid-square');
    const label = document.createElement('p');
    label.textContent = `${_ + 1}`;
    div.appendChild(label);
    gridContainer.appendChild(div);
}