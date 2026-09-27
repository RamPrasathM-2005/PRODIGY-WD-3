const bagCount = document.querySelector('.bag-count');
const toast = document.querySelector('.toast');
let itemsInBag = 0;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

document.querySelectorAll('.quick-add').forEach((button) => {
  button.addEventListener('click', () => {
    itemsInBag += 1;
    bagCount.textContent = itemsInBag;
    showToast(`${button.dataset.product} added to your bag`);
  });
});

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelectorAll('.product-card').forEach((card) => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

document.querySelectorAll('[data-filter-link]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(`[data-filter="${link.dataset.filterLink}"]`);
    if (target) target.click();
  });
});

document.querySelector('.signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email');
  const message = document.querySelector('.form-message');
  message.textContent = `Thanks - ${email.value} is on the list.`;
  email.value = '';
});

document.querySelector('.menu-toggle').addEventListener('click', (event) => {
  const button = event.currentTarget;
  const nav = document.querySelector('.desktop-nav');
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('mobile-open', !isOpen);
});

document.querySelector('.bag-toggle').addEventListener('click', () => {
  showToast(itemsInBag ? `${itemsInBag} item${itemsInBag === 1 ? '' : 's'} in your bag` : 'Your bag is waiting for something good');
});

document.querySelector('.search-toggle').addEventListener('click', () => {
  showToast('Search is coming soon');
});