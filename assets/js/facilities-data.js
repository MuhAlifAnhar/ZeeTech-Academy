// facilities-data.js
// Data dan logic untuk menampilkan fasilitas ZeeTech Academy

const facilitiesData = [
  {
    id: 1,
    image: "assets/img/fasilitas1.jpg",
    title: "Ruang Kelas Modern",
    description: "Kelas ber-AC dengan kapasitas maksimal 15 siswa untuk pembelajaran yang nyaman"
  },
  {
    id: 2,
    image: "assets/img/fasilitas2.jpg",
    title: "Komputer Spesifikasi Tinggi",
    description: "Setiap siswa mendapat 1 unit PC/Laptop dengan spesifikasi untuk development"
  },
  {
    id: 3,
    image: "assets/img/fasilitas3.jpg",
    title: "Internet Fiber 100 Mbps",
    description: "Koneksi internet super cepat untuk mendukung pembelajaran dan riset"
  },
  {
    id: 4,
    image: "assets/img/fasilitas4.jpg",
    title: "Proyektor HD",
    description: "Layar proyektor besar untuk presentasi dan live coding sessions"
  },
  {
    id: 5,
    image: "assets/img/fasilitas5.jpg",
    title: "Area Diskusi",
    description: "Ruang santai untuk diskusi kelompok dan brainstorming"
  },
  {
    id: 6,
    image: "assets/img/fasilitas6.jpg",
    title: "Perpustakaan Digital",
    description: "Akses ke ribuan e-book dan video tutorial premium"
  },
  {
    id: 7,
    image: "assets/img/fasilitas7.jpg",
    title: "Coffee Corner",
    description: "Kopi gratis dan snack untuk menemani belajar"
  },
  {
    id: 8,
    image: "assets/img/fasilitas8.jpg",
    title: "Free Parking",
    description: "Area parkir luas dan aman untuk motor dan mobil"
  },
  {
    id: 9,
    image: "assets/img/fasilitas9.jpg",
    title: "Whiteboard Digital",
    description: "Smart board untuk menjelaskan konsep dengan lebih interaktif"
  },
  {
    id: 10,
    image: "assets/img/fasilitas10.jpg",
    title: "Ruang Praktek",
    description: "Lab khusus untuk project-based learning"
  },
  {
    id: 11,
    image: "assets/img/fasilitas11.jpg",
    title: "Musholla",
    description: "Tempat ibadah yang nyaman untuk siswa muslim"
  },
  {
    id: 12,
    image: "assets/img/fasilitas12.jpg",
    title: "Toilet Bersih",
    description: "Fasilitas toilet yang selalu dijaga kebersihannya"
  },
  {
    id: 13,
    image: "assets/img/fasilitas13.jpg",
    title: "Security 24/7",
    description: "Keamanan terjaga dengan sistem CCTV dan petugas keamanan"
  }
];

// Function untuk render facilities
function renderFacilities() {
  const facilitiesContainer = document.getElementById('facilities-container');
  
  if (!facilitiesContainer) {
    console.error('Facilities container not found');
    return;
  }

  facilitiesContainer.innerHTML = '';

  facilitiesData.forEach((facility, index) => {
    const facilityCard = document.createElement('div');
    facilityCard.className = 'col-lg-3 col-md-4 col-sm-6 col-12';
    facilityCard.setAttribute('data-aos', 'zoom-in');
    facilityCard.setAttribute('data-aos-delay', index * 50);

    facilityCard.innerHTML = `
      <div class="facility-card">
        <div class="facility-image-wrapper">
          <img src="${facility.image}" alt="${facility.title}" class="facility-image" loading="lazy">
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

  // Add click event untuk zoom image
  addImageZoomEffect();
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

    // Optional: Add click to view full image
    overlay.addEventListener('click', () => {
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
