// Social media links
const socialLinksContainer = document.querySelector('.social-links');

socialLinksContainer.addEventListener('mouseover', function(event) {
  if (event.target.matches('.social-links a')) {
    event.target.classList.add('link-hovered');
  }
});

socialLinksContainer.addEventListener('mouseout', function(event) {
  if (event.target.matches('.social-links a')) {
    event.target.classList.remove('link-hovered');
  }
});

// Header font color animation
const header = document.getElementById('dynamic-header');
const colors = ['#ff0000', '#00ff00', '#0000ff'];
let colorIndex = 0;

function updateFontColor() {
  header.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  requestAnimationFrame(updateFontColor);
}

updateFontColor();

// Popup functionality
const popupOverlay = document.getElementById('popup-overlay');
const popup = document.getElementById('popup');
const openButton = document.getElementById('open-button');
const closeButton = document.querySelector('.close-button');

function openPopup() {
  popupOverlay.style.display = 'block';
  popup.style.display = 'block';
}

function closePopup() {
  popupOverlay.style.display = 'none';
  popup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  openPopup();
});

openButton.addEventListener('click', function() {
  setTimeout(function() {
    popup.style.display = 'block';
  }, 10000);
});

closeButton.addEventListener('click', function() {
  popup.style.display = 'none';
});
