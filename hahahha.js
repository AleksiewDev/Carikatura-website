function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
// Filter gallery
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Zoom image
function zoomImage(img) {
  const zoomModal = document.getElementById('zoom-modal');
  const zoomedImg = document.getElementById('zoomed-img');
  zoomedImg.src = img.src;
  zoomModal.style.display = 'flex';
}

// Close zoom
function closeZoom() {
  document.getElementById('zoom-modal').style.display = 'none';
}
