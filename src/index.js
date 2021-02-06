import { sum } from "./sum";
import style from "./css/index.css";

console.log("Hello World");
console.log(sum(2, 10));

let heading = document.querySelector("#demo"),
    sumValue = sum(10, 5);

heading.innerHTML = "25 + 25 = ${sumValue}";
