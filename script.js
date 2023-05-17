// script.js

// Get all the social media links
const socialLinks = document.querySelectorAll('.social-links a');

// Attach a hover event listener to each link
socialLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transform = 'scale(1.1)';
  });

  link.addEventListener('mouseout', () => {
    link.style.transform = 'scale(1)';
  });
});

// Get the header element
const header = document.getElementById('dynamic-header');

// Define an array of colors to cycle through
const colors = ['#ff0000', '#00ff00', '#0000ff'];

// Initialize a counter
let colorIndex = 0;

// Function to update the font color
function updateFontColor() {
  header.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

// Call the function every 2 seconds (2000 milliseconds)
setInterval(updateFontColor, 200);

// script.js

const popupOverlay = document.getElementById('popup-overlay');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('close-popup');

function openPopup() {
  popupOverlay.style.display = 'block';
  popup.style.display = 'block';
}

function closePopup() {
  popupOverlay.style.display = 'none';
  popup.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
  openPopup();
});

function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
  var openButton = document.getElementById('open-button');
  var popup = document.getElementById('popup');
  var closeButton = document.querySelector('.close-button');

  openButton.addEventListener('click', function() {
    setTimeout(function() {
      popup.style.display = 'block';
    }, 10000); // Delay in milliseconds (e.g., 2000 for 2 seconds)
  });

  closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
  });
});
