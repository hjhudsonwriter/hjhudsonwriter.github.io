document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
if (menu && navigation) {
  const setOpen = (open) => {
    menu.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
    menu.querySelector('span').textContent = open ? '−' : '+';
  };
  menu.addEventListener('click', () => setOpen(menu.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      menu.focus();
    }
  });
  window.matchMedia('(min-width: 601px)').addEventListener('change', () => setOpen(false));
}
