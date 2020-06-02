const images = document.querySelectorAll('img[src="./assets/img/arrow-bottom.svg"]');

const openText = e => {
  const img = e.target;
  const article = img.parentNode.parentNode;
  const DIV = document.createElement('div');
  if (img.classList.contains('rotated')) {
    article.classList.remove('opened')
    img.classList.remove('rotated');
    article.querySelector('.moreText').remove();
  } else {
    img.classList.add('rotated');
    article.classList.add('opened')
    DIV.textContent = img.dataset.text;
    DIV.classList.add('moreText')
    article.appendChild(DIV);
  }
}

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', openText);
}
