const registerLink = document.querySelector('.register-link');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');


registerLink.addEventListener('click', () => {
  wrapper.classList.add('active')
})

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active')
})


//activer popup e inpede a interação con objectos fora do wrapper
 const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const body = document.querySelector('body');
const bodyElements = Array.from(document.querySelectorAll('body *'));


btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
  disableBodyInteractions();
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  enableBodyInteractions();
});

function disableBodyInteractions() {
  bodyElements.forEach((element) => {
    if (!wrapper.contains(element)) { 
      element.style.pointerEvents = 'none';
    }
  });
}

function enableBodyInteractions() {
  bodyElements.forEach((element) => {
    element.style.pointerEvents = '';
  });
} 