import {arrayOfPhotos} from './data.js';
import {openModalPicture} from './modal.js';

const picturesListElement = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const appendPicture = (picture) => {
  const {id, url, likes, comments} = picture;
  const pictureElement = photoTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.id = id;
  picturesFragment.appendChild(pictureElement);
};

const renderPictures = () => {
  arrayOfPhotos.forEach(appendPicture);
  picturesListElement.appendChild(picturesFragment);
  picturesListElement.addEventListener('click', (evt) => {
    const pictureElement = evt.target.closest('.picture');
    if (pictureElement) {
      const clickedPicture = arrayOfPhotos.find(({id}) => Number(pictureElement.dataset.id) === id);
      openModalPicture(clickedPicture);
    }
  });
};

export {renderPictures};
