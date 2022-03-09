const body = document.body;
const bgColorsBody = ['#ffb457', '#ff96bd', '#9999fb', '#ffe797', '#cffff1'];
const menu = body.querySelector('.menu');
const menuItems = menu.querySelectorAll('.menu__item');
let activeItem = menu.querySelector('.active');
const menuBorder = menu.querySelector('.menu__border');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => clickItem(item, index));
});

const clickItem = (item, index) => {
  if (activeItem == item) return;
  if (activeItem) activeItem.classList.remove('active');

  item.classList.add('active');
  body.style.backgroundColor = bgColorsBody[index];
  activeItem = item;
  offsetMenuBorder(activeItem, menuBorder);
};

const offsetMenuBorder = (element, menuBorder) => {
  const offsetActiveItem = element.getBoundingClientRect();

  const left =
    Math.floor(
      offsetActiveItem.left -
        menu.offsetLeft -
        (menuBorder.offsetWidth - offsetActiveItem.width) / 2
    ) + 'px';

  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
};

window.addEventListener('resize', () => {
  offsetMenuBorder(activeItem, menuBorder);
});
