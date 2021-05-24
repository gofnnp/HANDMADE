const $stars = document.getElementById('stars');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

for (var i = 0; i < 150; i++) {
  const $star = document.createElement('div');
  const size = getRandomInt(3, 7);
  $star.className = 'star';
  $star.style.width = `${size}px`;
  $star.style.height = `${size}px`;
  $star.style.borderRadius = '100%';
  $star.style.position = 'fixed';
  $star.style.top = `${getRandomInt(1, 99)}vh`;
  $star.style.left = `${getRandomInt(1, 99)}vw`;
  console.log($star.style.top, $star.style.left);
  $stars.appendChild($star);
}

console.log($stars);
