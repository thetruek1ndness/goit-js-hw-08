import SimpleLightbox from "simplelightbox";
console.log(galleryItems);


const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) =>
  `<li class="gallery__item">
    <a class="gallery__link" href='${original}'>
      <img class="gallery__image" src = '${preview}' alt='${description}' title='${description}' />
    </a>
  </li>`).join('');

gallery.insertAdjacentHTML('beforeend', markup);
    
new SimpleLightbox('.gallery a', {
        captionDelay: 250,
    });