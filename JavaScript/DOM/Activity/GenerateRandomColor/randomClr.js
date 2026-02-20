
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let h1 = document.querySelector("h1");
    let getRandomColor = randomColor();
    h1.innerText = getRandomColor;
    h1.style.color = getRandomColor;

    document.querySelector(".color-div").style.backgroundColor = getRandomColor;
});

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
