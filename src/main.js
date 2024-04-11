const topMenu = document.getElementById('ct-top-menu');
const toggleTopMenuIcon = document.getElementById('ct-toggle-top-menu-icon');

document.addEventListener('click', (event) => {
  if (toggleTopMenuIcon.contains(event.target)) {
    topMenu.classList.toggle('hidden');
  } else {
  }
});
