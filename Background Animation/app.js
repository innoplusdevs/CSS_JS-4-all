const container = document.querySelector('.container');

for (let i = 0; i <= 100; i++) {
  const blocks = document.createElement('div');
  blocks.classList.add('block');
  container.appendChild(blocks);
}

const animateBlocks = () => {
  anime({
    targets: '.block',
    translateX: () => {
      return anime.random(-700, 700);
    },
    translateY: () => {
      return anime.random(-500, 500);
    },
    scale: () => {
      return anime.random(1, 5);
    },

    esaing: 'linear',
    duration: 3000,
    delay: anime.stagger(10),
    complete: animateBlocks,
  })
}

animateBlocks();