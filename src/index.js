import { sum } from "./sum";
import style from "./css/index.scss";
import Icon from "./assets/img/proba.png";

console.log("Hello World");
console.log(sum(2, 10));

let heading = document.querySelector("#demo"),
    sumValue = sum(10, 5);

heading.innerHTML = `25 + 25 = ${sumValue}`;


//obrazki

let myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div").appendChild(myIcon);
document.querySelector("div").classList.add("change");
