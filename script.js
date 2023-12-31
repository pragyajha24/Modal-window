'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', showModal);
}

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

btnCloseModal.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    
  }
});

