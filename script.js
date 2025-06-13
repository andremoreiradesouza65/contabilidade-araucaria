document.querySelectorAll('.galeria').forEach(section => {
  const items = section.querySelectorAll('.carousel-item');
  const prevBtn = section.querySelector('.carousel-button.prev');
  const nextBtn = section.querySelector('.carousel-button.next');
  let currentIndex = 0;

  function updateCarousel() {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  updateCarousel();
});

// Modal de imagem
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

// Ao clicar em uma imagem
document.querySelectorAll(".carousel-item img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// Fechar o modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menuList = document.querySelector(".menu-list");

  toggle.addEventListener("click", () => {
    menuList.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menuList = document.querySelector(".menu-list");

  toggle.addEventListener("click", () => {
    menuList.classList.toggle("active");
  });
});
