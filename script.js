const container = document.querySelector('.container');
const refreshBtn = document.querySelector('.refresh');

const numberOfColors = 32;

function generateColors() {
  container.innerHTML = '';
  for (let i = 0; i < numberOfColors; i++) {
    const randomHex = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    const colorEl = document.createElement('li');
    colorEl.classList.add('color');

    const rectBox = document.createElement('div');
    rectBox.classList.add('rect-box');
    rectBox.style.backgroundColor = randomHex;
    const hexVal = document.createElement('span');
    hexVal.classList.add('hex-value');
    hexVal.appendChild(document.createTextNode(randomHex));

    colorEl.appendChild(rectBox);
    colorEl.appendChild(hexVal);
    container.appendChild(colorEl);

    refreshBtn.style.backgroundColor = randomHex;

  }
}
// event listeners
refreshBtn.addEventListener('click', generateColors);

document.addEventListener('DOMContentLoaded', generateColors);
