function changeTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;

  const themeName = newTheme.slice(0, 1).toUpperCase() + newTheme.slice(1) + ' Theme';

  document.querySelector('.theme-toggle').textContent = themeName;
}

document.querySelector('.theme-toggle').addEventListener('click', changeTheme);

const articleIcons = document.querySelectorAll('.article-icons .icon');

for (let icon of articleIcons) {

  if (!/share/.test(icon.className)) {

    icon.addEventListener('mouseover', () => {
      if (!/filled/.test(icon.className)) {
        if (/star/.test(icon.className)) {
          icon.setAttribute('src', 'media/icon/star-plus-outline.svg');
        } else if (/eye/.test(icon.className)) { 
          icon.setAttribute('src', 'media/icon/eye-plus-outline.svg');
        }
      } else {
        if (/star/.test(icon.className)) {
          icon.setAttribute('src', 'media/icon/star-remove.svg');
        } else if (/eye/.test(icon.className)) {
          icon.setAttribute('src', 'media/icon/eye-remove.svg');
        }
      }
    });

    icon.addEventListener('mouseout', () => {
      if (!/filled/.test(icon.className)) {
        if (/star/.test(icon.className)) {
          icon.setAttribute('src', 'media/icon/star-outline.svg');
        } else if (/eye/.test(icon.className)) {
          icon.setAttribute('src', 'media/icon/eye-outline.svg');
        }
      } else {
        if (/star/.test(icon.className)) {
          icon.setAttribute('src', 'media/icon/star.svg');
        } else if (/eye/.test(icon.className)) {
          icon.setAttribute('src', 'media/icon/eye.svg');
        }
      }
    });

    icon.addEventListener('click', () => {
      if (!/filled/.test(icon.className)) {
        if (/star/.test(icon.className)) {
          icon.setAttribute('src', 'media/icon/star.svg');
        } else if (/eye/.test(icon.className)) {
          icon.setAttribute('src', 'media/icon/eye.svg');
        }
        icon.className += ' filled';
      } else {
        if (/star/.test(icon.className)) {
          icon.setAttribute('src', 'media/icon/star-outline.svg');
        } else if (/eye/.test(icon.className)) {
          icon.setAttribute('src', 'media/icon/eye-outline.svg');
        }
        icon.className = icon.className.replace(/ filled/g, '');
      }
    });

  }
}