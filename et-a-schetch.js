let container = document.querySelector(".container")
let button = document.querySelector(".button")

button.addEventListener("click", () => {
    let userBox = prompt("Enter the number of grids:")
    createGrid(userBox)
})

function createGrid(squares = 16) {
    container.innerText = "";
    for (let i = 0; i < squares; i++) {
        let row = document.createElement("div")
        row.classList.add("row")
        for (let j = 0; j < squares; j++) {
            let box = document.createElement("div")
            box.classList.add("box")

            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            let opacity = 0;
            box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;

            box.addEventListener("mouseenter", () => {
                opacity = Math.min(opacity + 0.2, 1);
                box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            });
            row.appendChild(box)
        }
        container.append(row)
    }

}
createGrid()