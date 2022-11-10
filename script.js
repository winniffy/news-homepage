'use strict'

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_list_group');
const overlay = document.querySelector('.overlay');
const navItems = document.querySelectorAll('.nav_item');

console.log(navItems)

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
});