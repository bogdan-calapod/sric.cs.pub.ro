let applyButton = document.querySelector('#apply'),
    howtoSection = document.querySelector('section.howtoapply');

applyButton.addEventListener(
  'click',
  e => {
    howtoSection.classList.toggle('active');
  }
)