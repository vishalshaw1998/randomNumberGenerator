var container = document.createElement("div");
container.setAttribute("class", "container text-align-center bold");
container.innerText = "Generate 8 digit Random Number";

var div1 = document.createElement("div");
div1.setAttribute("class", "fordigit text-align-center margin-top");

var div2 = document.createElement("div");
div2.setAttribute("class", "forButton");

var btn = document.createElement("button");
btn.setAttribute("class", "btn");
btn.innerText = "Generate Random Digit";

div2.appendChild(btn);
container.appendChild(div1);
container.appendChild(div2);

document.body.appendChild(container);

var element = document.getElementsByClassName("fordigit")[0];
var btn1 = document.getElementsByClassName("btn")[0];

btn1.addEventListener("click", () => {
    arr = [];
    count = 0;
    randomNumberGenerator(Math.floor(Math.random() * 9));
});

function randomNumberGenerator(num) {
    if (arr.length == 8) {
        element.innerText = arr.join("");
        console.log(count);
        return arr;
    } else {
        count++;
        if (!arr.includes(num)) {
            arr.push(num);
        }
        randomNumberGenerator(Math.floor(Math.random() * 9));
    }
}
