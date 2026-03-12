// Made By: Carla Manansala
// Created: November 21, 2024
// Updated:

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-close').forEach(link => {
  link.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
    });
});

document.querySelector('.btn-talk').addEventListener('click', () => {
    alert("Let's Talk button clicked!");
  });
  