const container = document.querySelector('.container'),
      color1 = document.querySelector('.color-1'),
      color2 = document.querySelector('.color-2');

color2.addEventListener('click', () => {
    container.classList.add('change')
});

color1.addEventListener('click', () => {
    container.classList.remove('change')
});