import { Router } from "./src/services/router.js";

window.app = {
    router: Router,
    theme: 'light'
};

class ThemeManager {
    constructor() {
        this.STORAGE_KEY = 'hc-server-theme';
        this.THEMES = {
            LIGHT: 'light',
            DARK: 'dark'
        };
    }

    init() {
        const savedTheme = localStorage.getItem(this.STORAGE_KEY) || this.THEMES.LIGHT;
        this.setTheme(savedTheme, false);
    }

    setTheme(theme, save = true) {
        const validTheme = Object.values(this.THEMES).includes(theme) ? theme : this.THEMES.LIGHT;
        window.app.theme = validTheme;
        
        document.documentElement.setAttribute('data-theme', validTheme);
        document.body.setAttribute('data-theme', validTheme);
        
        if (save) {
            localStorage.setItem(this.STORAGE_KEY, validTheme);
        }
        
        this.updateButton();
    }

    toggle() {
        const newTheme = window.app.theme === this.THEMES.LIGHT ? this.THEMES.DARK : this.THEMES.LIGHT;
        this.setTheme(newTheme, true);
    }

    updateButton() {
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.textContent = window.app.theme === this.THEMES.LIGHT ? '🌙' : '☀️';
        }
    }
}

const themeManager = new ThemeManager();

const initMobileMenu = () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
};

window.addEventListener("DOMContentLoaded", () => {
    themeManager.init();
    initMobileMenu();
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            themeManager.toggle();
        });
    }
    
    Router.init();
});