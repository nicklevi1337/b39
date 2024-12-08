// Прокрутка к якорям с плавной анимацией
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          window.scrollTo({
              top: target.offsetTop,
              behavior: 'smooth'
          });
      }
  });
});

// Функция для открытия и закрытия бургер-меню
function toggleMenu() {
  const burgerMenu = document.getElementById('burgerMenu');
  const burger = document.getElementById('burger');
  burgerMenu.classList.toggle('open');
  burger.classList.toggle('open');
}

// Функция для закрытия меню при нажатии на крестик
function closeMenu() {
  const burgerMenu = document.getElementById('burgerMenu');
  const burger = document.getElementById('burger');
  burgerMenu.classList.remove('open');
  burger.classList.remove('open');
}

// Функция для прокрутки наверх
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Показываем кнопку, когда прокрутили вниз
const scrollToTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
      scrollToTopButton.classList.add('visible');
  } else {
      scrollToTopButton.classList.remove('visible');
  }
});

// Функция для переключения отображения колбэк-меню
function toggleCallbackMenu() {
  const menu = document.getElementById('callbackMenu');
  menu.classList.toggle('show');
}
