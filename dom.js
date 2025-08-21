const parent = document.querySelector("#container")
const elem1 = document.createElement("p")
elem1.style.color = "red"
elem1.innerText = "Hey, I m red"
parent.appendChild(elem1)
const elem2 = document.createElement("div")
elem2.classList.add("parent2")
elem2.style.border = "black"
elem2.style.backgroundColor = "pink"
parent.appendChild(elem2)

const div = document.querySelector(".parent2")
const h1 = document.createElement("h1")
h1.innerText="I m in div"
const p = document.createElement("p")
p.innerText="ME TOO"
div.appendChild(h1)
div.appendChild(p)