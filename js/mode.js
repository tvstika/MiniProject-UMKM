const btn = document.body;

let dark = () => {
  btn.classList.toggle('dark');
  if (btn.classList.contains('dark')) {
    localStorage.setItem('modeGelap', 'true');
  } else {
    localStorage.setItem('modeGelap', 'false');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('modeGelap') === 'true') {
    btn.classList.add('dark');
  } else {
    btn.classList.remove('dark');
  }
});
