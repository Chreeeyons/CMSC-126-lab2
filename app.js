//!TOGGLE NAVIGATION MENU AND ICONS
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');

const toggleMenu = () => {
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');
};

menuToggleButton.addEventListener('click', toggleMenu);

// !REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK
const removeActiveLinkClass = e => {
    if(e.target.classList.contains('list-link')){
        menuElement.classList.remove('active');
        menuToggleButton.classList.remove('active');
    }
};

document.addEventListener('click', removeActiveLinkClass);

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE
const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');

if(currentTheme) {
    bodyElement.classList.add('dark-theme');
};

const toggleTheme = () => { 
    bodyElement.classList.toggle('dark-theme');

    if(bodyElement.classList.contains('dark-theme')) {
        localStorage.setItem('darkTheme', 'active');
    }else {
        localStorage.removeItem('darkTheme'); 
    }
};

themeToggleButton.addEventListener('click', toggleTheme);

document.querySelectorAll('.tech-stack-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = item.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);

        const rect = item.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - tooltip.offsetHeight}px`;
    });

    item.addEventListener('mouseleave', () => {
        document.querySelector('.tooltip').remove();
    });
});
// !SCROLL REVEAL