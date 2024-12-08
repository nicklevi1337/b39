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
  