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
            box.dataset.opacity = 0;
            box.addEventListener("mouseenter", () => {
                let currentOpacity = parseFloat(box.dataset.opacity);
                currentOpacity = Math.min(currentOpacity + 0.3, 1);
                box.dataset.opacity = currentOpacity;
                box.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${currentOpacity})`
            })
            row.appendChild(box)
        }
        container.append(row)
    }

}
createGrid()