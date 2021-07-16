const count = document.getElementById("entry")
const preCount = document.getElementById("pre-entry")

let counter = 0;

const increment = () => {
    counter += 1;
    count.textContent = counter
}

const saveCount = () => {
    preCount.textContent += `${counter} - `
    counter = 0;
    count.textContent = 0;
}