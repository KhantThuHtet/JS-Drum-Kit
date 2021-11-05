let drumPad = document.getElementsByClassName("drumPad")[0];
let keyboardArr = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
let soundArr = ["boom","clap","hihat","kick","openhat","ride","snare","tink","tom"];
for (let i = 0; i < soundArr.length; i++) {
  drumPad.innerHTML += `
        <div class="drumItem" id="${keyboardArr[i]}">
          <span class="key">${keyboardArr[i].toUpperCase()}</span>
          <span class="def">${soundArr[i].toUpperCase()}</span>
        </div>
  `;
}
const playSoundWithKeyboard = (event) => {
  if (keyboardArr.includes(event.key)) {
    let drumItem = document.getElementById(event.key);
    let audioCollection = document.getElementsByTagName('audio');
    let audioArray = Array.from(audioCollection);
    let audioTag = audioArray.filter(el=> el.dataset.code == event.key);
    audioTag[0].play();
    drumItem.classList.add('isOpening');
    setTimeout(() => {
      drumItem.classList.remove('isOpening');
    }, 100);
  }
};
document.addEventListener("keydown", playSoundWithKeyboard);
