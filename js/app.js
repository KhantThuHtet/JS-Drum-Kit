let drumPad = document.getElementsByClassName("drumPad")[0];
let keyboardArr = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
let soundArr = [
  "boom",
  "clap",
  "hihat",
  "kick",
  "openhat",
  "ride",
  "snare",
  "tink",
  "tom",
];

for (let i = 0; i < keyboardArr.length; i++) {
  drumPad.innerHTML += `
        <div class="drumItem" id='${i}'>
            <span class="key">${keyboardArr[i].toUpperCase()}</span>
            <span class="def">${soundArr[i].toUpperCase()}</span>
        </div>
    `;
}
let d1 = document.getElementById(0);
let d2 = document.getElementById(1);
let d3 = document.getElementById(2);
let d4 = document.getElementById(3);
let d5 = document.getElementById(4);
let d6 = document.getElementById(5);
let d7 = document.getElementById(6);
let d8 = document.getElementById(7);
let d9 = document.getElementById(8);

let drumFun = (event)=>{
    if (keyboardArr.includes(event.key)) {
      switch (event.key) {
        case "a":
          d1.classList.add("isOpening");
          let a1 = new Audio('./sounds/boom.wav');
          a1.play();
          setTimeout(() => {
            d1.classList.remove("isOpening");
          }, 100);
          break;
        case "s":
          d2.classList.add("isOpening");
          let a2 = new Audio("./sounds/clap.wav");
          a2.play();
          setTimeout(() => {
            d2.classList.remove("isOpening");
          }, 100);
          break;
        case "d":
          d3.classList.add("isOpening");
          let a3 = new Audio("./sounds/hihat.wav");
          a3.play();
          setTimeout(() => {
            d3.classList.remove("isOpening");
          }, 100);
          break;
        case "f":
          d4.classList.add("isOpening");
          let a4 = new Audio("./sounds/kick.wav");
          a4.play();
          setTimeout(() => {
            d4.classList.remove("isOpening");
          }, 100);
          break;
        case "g":
          d5.classList.add("isOpening");
          let a5 = new Audio("./sounds/openhat.wav");
          a5.play();
          setTimeout(() => {
            d5.classList.remove("isOpening");
          }, 100);
          break;
        case "h":
          d6.classList.add("isOpening");
          let a6 = new Audio("./sounds/ride.wav");
          a6.play();
          setTimeout(() => {
            d6.classList.remove("isOpening");
          }, 100);
          break;
        case "j":
          d7.classList.add("isOpening");
          let a7 = new Audio("./sounds/snare.wav");
          a7.play();
          setTimeout(() => {
            d7.classList.remove("isOpening");
          }, 100);
          break;
        case "k":
          d8.classList.add("isOpening");
          let a8 = new Audio("./sounds/tink.wav");
          a8.play();
          setTimeout(() => {
            d8.classList.remove("isOpening");
          }, 100);
          break;
        case "l":
          d9.classList.add("isOpening");
          let a9 = new Audio("./sounds/tom.wav");
          a9.play();
          setTimeout(() => {
            d9.classList.remove("isOpening");
          }, 100);
          break;

        default:
          break;
      }
    } else {
      return;
    }
}

document.addEventListener("keypress", (event) => {
  drumFun(event);
});
