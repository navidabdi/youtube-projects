const loginBtn = document.querySelector('#login-button');
const wrapper = document.querySelector('.wrapper');
const title = document.querySelector('.title');
loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  wrapper.classList.add('success');
  title.innerText = 'Welcome Back!';
});

x = 1;
while (x <= 12) {
  let square = document.createElement('li');

  if (x % 2 == 0) {
    square.style.left = `${x * 5}%`;
    square.style.width = `${x * 20}px`;
    square.style.height = `${x * 20}px`;
    square.style.animationDelay = `${x * 1}s`;
    square.style.animationDuration = `${x * 2.5}s`;
  } else if (x % 2 != 0) {
    square.style.left = `${x * 5}%`;
    square.style.width = `${x * 10}px`;
    square.style.height = `${x * 10}px`;
    square.style.animationDelay = `${x * 0.5}s`;
    square.style.animationDuration = `${x * 0.5}s`;
  }
  document.querySelector('.bg-bubbles').appendChild(square);
  x++;
}
