const btnUp = document.querySelector('.btn__up');
const menuMobile = document.querySelector('.menu__mobile');
const menuLinkWrap = document.querySelector('.menu__link_wrap');

document.addEventListener('scroll', debounce(e => {
  let scrollTopPosition = document.documentElement.scrollTop;

  if (scrollTopPosition !== 0) {
    btnUp.style.display = 'block';
    return;
  }

  btnUp.style.display = 'none';
}, 100));

btnUp.addEventListener('click', e => {
  document.documentElement.scrollTop = 0;
});

menuMobile.addEventListener('click', e => {

  menuMobile.classList.toggle('menu__mobile_active');
  menuLinkWrap.classList.toggle('menu__link_wrap_active');

  if (menuLinkWrap.style.visibility === 'visible') {

    menuLinkWrap.style.visibility = 'hidden';
    return;
  }

  menuLinkWrap.style.visibility = 'visible';
});

function debounce(cb, ms) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      cb.apply(this, args)
    }, ms)
  }
};

