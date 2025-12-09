// facilities-data.js
// Data dan logic untuk menampilkan fasilitas ZeeTech Academy
// hehe hi gantenk.

const facilitiesData = [
  {
    id: 1,
    image: "assets/img/fasilitas (1).jpg",
    title: "Parkiran Nyaman & Aman",
    description: "Area parkir luas dengan akses mudah untuk motor dan mobil."
  },
  {
    id: 2,
    image: "assets/img/fasilitas (2).jpg",
    title: "Ruang Belajar Ber-AC",
    description: "Kelas berkapasitas 15 siswa dengan AC dan tata ruang yang rapi."
  },
  {
    id: 3,
    image: "assets/img/fasilitas (3).jpg",
    title: "Ruang Belajar Nyaman",
    description: "Lingkungan belajar dibuat tenang dan nyaman untuk menjaga fokus siswa."
  },
  {
    id: 4,
    image: "assets/img/fasilitas (4).jpg",
    title: "Desain Kelas Modern",
    description: "Penataan meja dan kursi ergonomis menciptakan suasana belajar profesional."
  },
  {
    id: 5,
    image: "assets/img/fasilitas (5).jpg",
    title: "Komputer Berperforma Tinggi",
    description: "Setiap komputer memiliki spesifikasi mumpuni untuk kebutuhan belajar teknologi."
  },
  {
    id: 6,
    image: "assets/img/fasilitas (6).jpg",
    title: "Area Presentasi Lengkap",
    description: "Dilengkapi proyektor dan papan presentasi untuk penyampaian materi yang efektif."
  },
  {
    id: 7,
    image: "assets/img/fasilitas (7).jpg",
    title: "Pencahayaan Ruang Optimal",
    description: "Ruang belajar terang dan nyaman untuk mendukung konsentrasi."
  },
  {
    id: 8,
    image: "assets/img/fasilitas (8).jpg",
    title: "Didukung UPS",
    description: "Setiap perangkat memiliki UPS agar pembelajaran tetap berjalan saat listrik padam."
  },
  {
    id: 9,
    image: "assets/img/fasilitas (9).jpg",
    title: "WiFi Berkecepatan Tinggi",
    description: "Akses internet cepat dan stabil untuk menunjang pembelajaran digital."
  },
  {
    id: 10,
    image: "assets/img/fasilitas (10).jpg",
    title: "Fasilitas Pelatihan Menjahit",
    description: "Dilengkapi mesin menjahit dan alat pendukung untuk pelatihan keterampilan."
  },
  {
    id: 11,
    image: "assets/img/fasilitas (11).jpg",
    title: "Peralatan Menjahit Lengkap",
    description: "Setiap siswa dapat menggunakan peralatan menjahit standar pelatihan."
  },
  {
    id: 12,
    image: "assets/img/fasilitas (12).jpg",
    title: "Ruang Praktek Menjahit",
    description: "Lingkungan praktek tertata rapi untuk kenyamanan belajar menjahit."
  },
  {
    id: 13,
    image: "assets/img/fasilitas (13).jpg",
    title: "Parkiran Luas",
    description: "Area parkir yang mampu menampung lebih banyak kendaraan."
  }
];

// Carousel state
let currentIndex = 0;
let autoScrollInterval;
let isAnimating = false;

// Function untuk render facilities carousel
function renderFacilities() {
  const facilitiesContainer = document.getElementById('facilities-track');
  
  if (!facilitiesContainer) {
    console.error('Facilities track not found');
    return;
  }

  facilitiesContainer.innerHTML = '';

  // Duplicate items untuk infinite loop effect
  const allFacilities = [...facilitiesData, ...facilitiesData];

  allFacilities.forEach((facility, index) => {
    const facilityCard = document.createElement('div');
    facilityCard.className = 'facility-slide';

    facilityCard.innerHTML = `
      <div class="facility-card">
        <div class="facility-image-wrapper">
          <img src="${facility.image}" alt="${facility.title}" class="facility-image" loading="lazy" onerror="this.onerror=null; this.src='assets/img/placeholder.jpg';">
          <div class="facility-overlay">
            <div class="facility-icon">
              <i class="fas fa-search-plus"></i>
            </div>
          </div>
        </div>
        <div class="facility-content">
          <h5 class="facility-title">${facility.title}</h5>
          <p class="facility-description">${facility.description}</p>
        </div>
      </div>
    `;

    facilitiesContainer.appendChild(facilityCard);
  });

  // Initialize carousel
  initializeCarousel();
  
  // Add click event untuk zoom image
  addImageZoomEffect();
}

// Initialize carousel functionality
function initializeCarousel() {
  const track = document.getElementById('facilities-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  
  if (!track) return;

  // Set initial position without animation
  updateCarouselPosition(false);

  // Start auto scroll after a short delay
  setTimeout(() => {
    startAutoScroll();
  }, 500);

  // Navigation buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isAnimating) {
        stopAutoScroll();
        prevSlide();
        setTimeout(startAutoScroll, 1000);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isAnimating) {
        stopAutoScroll();
        nextSlide();
        setTimeout(startAutoScroll, 1000);
      }
    });
  }

  // Pause on hover
  const carousel = document.querySelector('.facilities-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', () => {
      setTimeout(startAutoScroll, 500);
    });
  }

  // Pause on touch for mobile
  if (carousel) {
    carousel.addEventListener('touchstart', stopAutoScroll);
    carousel.addEventListener('touchend', () => {
      setTimeout(startAutoScroll, 2000);
    });
  }
}

// Update carousel position
function updateCarouselPosition(animate = true) {
  const track = document.getElementById('facilities-track');
  if (!track) return;

  const slides = track.querySelectorAll('.facility-slide');
  if (slides.length === 0) return;

  // Get window width for responsive calculation
  const windowWidth = window.innerWidth;
  let slideWidth, gap;

  if (windowWidth <= 767) {
    // Mobile: 1 item
    slideWidth = 100;
    gap = 0;
  } else if (windowWidth <= 991) {
    // Tablet: 2 items
    slideWidth = 48;
    gap = 2;
  } else {
    // Desktop: 3 items
    slideWidth = 32;
    gap = 1.5;
  }

  const offset = currentIndex * (slideWidth + gap);

  if (animate) {
    isAnimating = true;
    track.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
  } else {
    track.style.transition = 'none';
  }

  track.style.transform = `translateX(-${offset}%)`;

  // Reset position for infinite loop
  setTimeout(() => {
    if (currentIndex >= facilitiesData.length) {
      track.style.transition = 'none';
      currentIndex = 0;
      track.style.transform = `translateX(0%)`;
      // Force reflow
      void track.offsetWidth;
    }
    isAnimating = false;
  }, animate ? 800 : 0);
}

// Next slide
function nextSlide() {
  currentIndex++;
  updateCarouselPosition();
}

// Previous slide
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = facilitiesData.length - 1;
  }
  updateCarouselPosition();
}

// Start auto scroll
function startAutoScroll() {
  stopAutoScroll(); // Clear any existing interval
  autoScrollInterval = setInterval(() => {
    if (!isAnimating) {
      nextSlide();
    }
  }, 3500); // Scroll every 3.5 seconds
}

// Stop auto scroll
function stopAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
}

// Function untuk zoom effect pada gambar
function addImageZoomEffect() {
  const facilityCards = document.querySelectorAll('.facility-card');

  facilityCards.forEach(card => {
    const overlay = card.querySelector('.facility-overlay');
    const image = card.querySelector('.facility-image');

    card.addEventListener('mouseenter', () => {
      overlay.style.opacity = '1';
      image.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseleave', () => {
      overlay.style.opacity = '0';
      image.style.transform = 'scale(1)';
    });

    // Add click to view full image
    overlay.addEventListener('click', (e) => {
      e.stopPropagation();
      const imageSrc = image.src;
      openImageModal(imageSrc, card.querySelector('.facility-title').textContent);
    });
  });
}

// Function untuk modal gambar (optional)
function openImageModal(imageSrc, title) {
  // Create modal element
  const modal = document.createElement('div');
  modal.className = 'facility-modal';
  modal.innerHTML = `
    <div class="facility-modal-content">
      <span class="facility-modal-close">&times;</span>
      <img src="${imageSrc}" alt="${title}">
      <p class="facility-modal-title">${title}</p>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal on click
  const closeBtn = modal.querySelector('.facility-modal-close');
  closeBtn.addEventListener('click', () => {
    modal.remove();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal) {
      modal.remove();
    }
  });
}

// Auto load facilities when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderFacilities);
} else {
  renderFacilities();
}

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { facilitiesData, renderFacilities };
}
