document.addEventListener("DOMContentLoaded", function() {
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    document.getElementById('left').addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });

    document.getElementById('right').addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });


    setInterval(function() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 3000);

    const menuopen = document.getElementById("drop-open");
    if(menuopen){
      menuopen.addEventListener("click", () => {
        const dropdown = document.getElementById("dropdown-menu");
dropdown.classList.toggle("open")
      });
    }
  });

  // JavaScript for infinite carousel navigation
  document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.querySelector('.sec2-left');
    const rightButton = document.querySelector('.sec2-right');
    const scrollContainer = document.querySelector('.sec2-carts');
  
    const scrollAmount = 300; 
  
    // İçeriği sonsuz döngü için klonla
    const cloneContent = () => {
      scrollContainer.innerHTML += scrollContainer.innerHTML;
    };
  
    // Sayfa yüklendiğinde içeriği iki katına çıkar
    cloneContent();
  
    // Sağ butona tıklama
    rightButton.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  
      // Sonsuz döngü etkisi: Eğer sonuna yaklaşıyorsa başa al
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    });
  
    // Sol butona tıklama
    leftButton.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  
      // Sonsuz döngü etkisi: Eğer başına yaklaşıyorsa sona al
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
      }
    });
  });
  



document.addEventListener('DOMContentLoaded', () => {
  const leftButton = document.querySelector('.sec2-left');
  const rightButton = document.querySelector('.sec2-right');
  const scrollContainer = document.querySelector('.sec2-carts');

  const scrollAmount = 320 + 20;

  const scrollRight = () => {
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
      scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollTo({ left: scrollContainer.scrollWidth, behavior: 'smooth' });
    } else {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  rightButton.addEventListener('click', scrollRight);
  leftButton.addEventListener('click', scrollLeft);

  let slideshowInterval = setInterval(scrollRight, 3000); 


  scrollContainer.addEventListener('mouseover', () => clearInterval(slideshowInterval));
  scrollContainer.addEventListener('mouseout', () => slideshowInterval = setInterval(scrollRight, 2000));
});

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".sec2-carts2");
  const leftButton = document.querySelector(".sec2-left2");
  const rightButton = document.querySelector(".sec2-right2");
  const cards = Array.from(document.querySelectorAll(".sec2-carts2 .image-wrapper"));
  
  const cardWidth = cards[0].offsetWidth + 20; // Kart genişliği (margin dahil)
  let currentScrollPosition = 0;
  let totalWidth = cards.length * cardWidth;

  // İçeriği sağdan ve soldan klonlayarak sonsuz döngü oluştur
  function createInfiniteScroll() {
    // İlk başta sağ ve sol taraftan içerik klonlanarak sonsuz döngü oluşturulur
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      cardsContainer.appendChild(clone);
    });
    totalWidth = cardsContainer.scrollWidth;
    cardsContainer.scrollLeft = currentScrollPosition;
  }

  createInfiniteScroll();

  // Sağ kaydırma fonksiyonu
  function slideRight() {
    currentScrollPosition += cardWidth;
    cardsContainer.scrollTo({ left: currentScrollPosition, behavior: "smooth" });

    // Eğer sağa kaydırma sonuna gelirsek, en başa gitmek yerine
    // devam ettiriyoruz (sonsuz döngü)
    if (currentScrollPosition >= totalWidth) {
      currentScrollPosition = 0;
      cardsContainer.scrollLeft = currentScrollPosition;
    }
  }

  // Sol kaydırma fonksiyonu
  function slideLeft() {
    currentScrollPosition -= cardWidth;
    cardsContainer.scrollTo({ left: currentScrollPosition, behavior: "smooth" });

    // Eğer sola kaydırma başına gelirsek, en sona gitmek yerine
    // devam ettiriyoruz (sonsuz döngü)
    if (currentScrollPosition < 0) {
      currentScrollPosition = totalWidth - cardWidth;
      cardsContainer.scrollLeft = currentScrollPosition;
    }
  }

  // Otomatik kaydırma
  let autoSlide = setInterval(slideRight, 3000);

  // Buton dinleyicileri
  rightButton.addEventListener("click", () => {
    clearInterval(autoSlide);
    slideRight();
    resetAutoSlide();
  });

  leftButton.addEventListener("click", () => {
    clearInterval(autoSlide);
    slideLeft();
    resetAutoSlide();
  });

  // Otomatik kaydırmayı sıfırla
  function resetAutoSlide() {
    autoSlide = setInterval(slideRight, 3000);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const leftButton = document.querySelector('.sec2-left2');
  const rightButton = document.querySelector('.sec2-right2');
  const scrollContainer = document.querySelector('.sec2-carts2');
  
  const scrollAmount = 300; // Her seferinde kaydırılacak mesafe
  
  // İçeriği sonsuz döngü için klonla
  const cloneContent = () => {
    const contentClone = scrollContainer.innerHTML;
    scrollContainer.innerHTML += contentClone; // İçeriği iki katına çıkar
  };
  
  // Sayfa yüklendiğinde içeriği iki katına çıkar
  cloneContent();

  // Sağ butona tıklama
  rightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    // Sonsuz döngü efekti: Eğer sonuna yaklaşıyorsa başa al
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
      scrollContainer.scrollLeft = 0;
    }
  });

  // Sol butona tıklama
  leftButton.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

    // Sonsuz döngü efekti: Eğer başına yaklaşıyorsa sona al
    if (scrollContainer.scrollLeft <= 0) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
    }
  });
});


