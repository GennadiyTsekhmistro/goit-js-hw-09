const images = [
  {
    preview:
      'https://i.ibb.co/twgWX58g/meeting-small.jpg',
    original:
      'https://i.ibb.co/LDQFmhT9/meeting-large.jpg',
    description: 'Meeting',
  },
  {
    preview:
      'https://i.ibb.co/CsP3TyG4/hand-with-light-bulb-small.jpg',
    original:
      'https://i.ibb.co/Q7qQZbTP/hand-with-light-bulb-large.jpg',
    description: 'Hand With Light Bulb',
  },
  {
    preview:
      'https://i.ibb.co/0y8B4G5c/design-and-develop-small.jpg',
    original:
      'https://i.ibb.co/3mJxskcV/design-and-develop-large.jpg',
    description: 'Design and Develop',
  },
  {
    preview:
      'https://i.ibb.co/kgWWR0KR/veranda-small.jpg',
    original:
      'https://i.ibb.co/PvxvVSBL/veranda-large.jpg',
    description: 'Veranda',
  },
  {
    preview:
      'https://i.ibb.co/m5fJ09Qr/lounge-small.jpg',
    original:
      'https://i.ibb.co/cSZCS38h/lounge-large.jpg',
    description: 'Lounge',
  },
  {
    preview:
      'https://i.ibb.co/hRcJbX0Y/office-small.jpg',
    original:
      'https://i.ibb.co/jZbbPYy1/office-large.jpg',
    description: 'Office',
  },
  {
    preview:
      'https://i.ibb.co/n8ffT8sB/desk-small.jpg',
    original:
      'https://i.ibb.co/20fw36XR/desk-large.jpg',
    description: 'Desk',
  },
  {
    preview:
      'https://i.ibb.co/FqdQqT8x/work-small.jpg',
    original:
      'https://i.ibb.co/Kxfr8vMM/work-large.jpg',
    description: 'Work',
  },
  {
    preview:
      'https://i.ibb.co/93ckkgHT/presentation-small.jpg',
    original:
      'https://i.ibb.co/xSxMzscd/presentation-large.jpg',
    description: 'Presentation',
  },
];

const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join('');

gallery.innerHTML = markup;

// Ініціалізація SimpleLightbox
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

  