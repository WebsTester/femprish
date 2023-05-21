// Get the current page URL
const currentPage = window.location.href;

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Loop through each navigation link
navLinks.forEach(link => {
  // Compare the link's href with the current page URL
  if (link.href === currentPage) {
    // Add the active class to the link
    link.classList.add('active');
  }
});


const dragImage = document.getElementById('drag-image');

dragImage.addEventListener('dragstart', function(event) {
  const linkUrl = this.parentElement.href;
  event.dataTransfer.setData('text/uri-list', linkUrl);
});
