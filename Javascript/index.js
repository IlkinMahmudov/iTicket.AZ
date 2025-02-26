const drop_open = document.getElementById("drop-open");
const drop_menu = document.getElementById("dropdown-menu");

drop_open.addEventListener("click", () => {
  drop_menu.classList.toggle("open");
});
const leftButton1 = document.getElementById("left");
const rightButton1 = document.getElementById("right");
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides-container");
let slideIndex = 0;


function showSlide() {

  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}


function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length; 
  showSlide();
}


function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length; 
  showSlide();
}

rightButton1.addEventListener("click", nextSlide);
leftButton1.addEventListener("click", prevSlide);


showSlide();


setInterval(nextSlide, 3000);
const cartContainer = document.getElementById("sec2-carts");

fetch("Data/cartItem1.json")
.then(response =>{
  return response.json()
})
.then(card1 =>{
   card1.cartItems.forEach((item) => {
      const cartDiv = document.createElement("div");
      cartDiv.classList.add("image-wrapper");

      cartDiv.innerHTML = `
        <div class="cart1-img">
            <a href="#" class="cart-link"><img src="${item.image[0]}" alt="${item.altText}" class="festival-image"></a>
        </div>
        <div class="cart1-p">
            <p class="p-1">${item.eventDate}</p>
            <p class="p-2">${item.eventLocation}</p>
        </div>
        <div class="cart1-a">
            <a href="cart.html" class="cta-button">${item.price}</a>
        </div>
        <div class="info">
            <h3 style="margin-left: 20px;">${item.artistName}</h3>
            <p style="font-size: 13px; margin-left: 20px; opacity: 0.7;">${item.fullDateLocation}</p>
        </div>
      `;

      const cartLink = cartDiv.querySelector(".cart-link");
      cartLink.addEventListener("click", () => {
        localStorage.setItem("selectedCartItem", JSON.stringify(item));
        window.location.href = "cart.html";
      });

      cartContainer.appendChild(cartDiv);
    });
  
})
   

const cartContainer2 = document.getElementById("sec2-carts2");

const cartItems2 = [
  {
    image: ["Images/cart-12.jpg", "Images/cart-12x.jpg"],
    altText: "Dream Fest Poster",
    eventDate: "08 fevral 2025",
    eventLocation: "Lahıc Tarix - Diyarşünaslıq",
    price: "2 ₼-dan",
    artistName: "Lahıc Tarix - Diyarşünaslıq",
    fullDateLocation: "08 fevral 2025 • Lahıc Tarix - Diyarşünaslıq",
  },
  {
    image: ["Images/cart-13.jpg", "Images/cart-13x.jpg"],
    altText: "Dream Fest Poster",
    eventDate: "08 fevral 2025",
    eventLocation: "Diri Baba türbəsi",
    price: "3 ₼-dan",
    artistName:
      '“Basqal” Dövlət Tarix-Mədəniyyət Qoruğunun balansında olan "Diri Baba türbəsi"',
    fullDateLocation: '08 fevral 2025 • "Diri Baba türbəsi"',
  },

  {
    image: ["Images/cart-15.jpg", "Images/cart-14x.jpg"],
    altText: "Dream Fest Poster",
    eventDate: "08 fevral 2025",
    eventLocation: "Şuşa Şəhəri",
    price: "20 ₼-dan",
    artistName: "Şuşa şəhəri üzrə bələdçi xidməti",
    fullDateLocation: "08 fevral 2025 • Şuşa Şəhəri",
  },
  {
    image: ["Images/cart-16.jpg", "Images/cart-15x.jpg"],
    altText: "Dream Fest Poster",
    eventDate: "08 fevral 2025",
    eventLocation: "Qobustan Palçıq ",
    price: "3 ₼-dan",
    artistName: "«Palçıq Vulkanları» Turizm Kompleksi",
    fullDateLocation:
      "08 fevral 2025 • Qobustan Palçıq Vulkanları Turizm Kompleksi",
  },
  {
    image: ["Images/cart-17.jpg", "Images/cart-16x.jpg"],
    altText: "Dream Fest Poster",
    eventDate: "08 fevral 2025",
    eventLocation: "Atəşgah məbədi",
    price: "1 ₼-dan",
    artistName: "“Atəşgah məbədi” Dövlət Tarix-Memarlıq Qoruğu",
    fullDateLocation: "08 fevral 2025 • “Atəşgah məbədi”",
  },
  {
    image: ["Images/cart-18.jpg", "Images/cart-18x.jpg"],
    altText: "Dream Fest Poster",
    eventDate: "08 fevral 2025",
    eventLocation: "Yanar dağ",
    price: "1 ₼-dan",
    artistName: "“Yanar dağ” Dövlət Tarix-Mədəniyyət və Təbiət Qoruğu",
    fullDateLocation:
      "08 fevral 2025 • “Yanar dağ” Dövlət Tarix-Mədəniyyət və Təbiət Qoruğu",
  },
  {
    image: ["Images/carrt-19.jpg", "Images/cart-19x.jpg"],
    altText: "Dream Fest Poster",
    eventDate: "08 fevral 2025",
    eventLocation: "Yanardağ & Atəşgah",
    price: "15 ₼-dan",
    artistName: "Yanardağ & Atəşgah kombinə olunmuş bilet",
    fullDateLocation: "08 fevral 2025 • Yanardağ & Atəşgah",
  },
  {
    image: ["Images/cart-20.jpg", "Images/cart-20x.jpg"],
    altText: "Dream Fest Poster",
    eventDate: "08 fevral 2025",
    eventLocation: "Şəkixanovlar evi",
    price: "1 ₼-dan",
    artistName: "Şəkixanovlar evi",
    fullDateLocation: "08 fevral 2025 • Şəkixanovlar evi",
  },
  {
    image: ["Images/cart-21.jpg", "Images/cart-21x.jpg"],
    altText: "Dream Fest Poster",
    eventDate: "08 fevral 2025",
    eventLocation: "Kiş Alban Məbədi",
    price: "1 ₼-dan",
    artistName: "Kiş Alban Məbədi",
    fullDateLocation: "08 fevral 2025 • Kiş Alban Məbədi",
  },
];

cartItems2.forEach((item) => {
  const cartDiv = document.createElement("div");
  cartDiv.classList.add("image-wrapper");

  cartDiv.addEventListener("click", () => {
    localStorage.setItem("selectedCartItem", JSON.stringify(item));
    window.location.href = "cart.html";
  });

  cartDiv.innerHTML = `
        <div class="cart1-img">
            <img src="${item.image[0]}" alt="${item.altText}" class="festival-image">
        </div>
        <div class="cart1-p">
            <p class="p-1">${item.eventDate}</p>

        </div>
        <div class="cart1-a">
            <a href="cart.html" class="cta-button">${item.price}</a>
        </div>
        <div class="info">
            <h3 style="margin-left: 20px;">${item.artistName}</h3>
            <p style="font-size: 13px; margin-left: 20px; opacity: 0.7;">${item.fullDateLocation}</p>
        </div>
    `;

  cartContainer2.appendChild(cartDiv);
});

const leftButton = document.querySelector(".sec2-left");
const rightButton = document.querySelector(".sec2-right");

const cardWidth = document.querySelector(".image-wrapper").offsetWidth + 50;

rightButton.addEventListener("click", () => {
  if (
    cartContainer.scrollLeft + cartContainer2.clientWidth >=
    cartContainer.scrollWidth
  ) {
    cartContainer.scrollLeft = 0;
  } else {
    cartContainer.scrollLeft += cardWidth;
  }
});

leftButton.addEventListener("click", () => {
  if (cartContainer.scrollLeft === 0) {
    cartContainer.scrollLeft =
      cartContainer.scrollWidth - cartContainer.clientWidth;
  } else {
    cartContainer.scrollLeft -= cardWidth;
  }
});
setInterval(() => {
  if (cartContainer.scrollLeft + cartContainer.clientWidth >= cartContainer.scrollWidth) {
    cartContainer.scrollLeft = 0;
  } else {
    cartContainer.scrollLeft += cardWidth;
  }
}, 2000);

const leftButton2 = document.querySelector(".sec2-left2");
const rightButton2 = document.querySelector(".sec2-right2");

const cardWidth2 = document.querySelector(".image-wrapper").offsetWidth + 50;

rightButton2.addEventListener("click", () => {
  if (
    cartContainer2.scrollLeft + cartContainer2.clientWidth >=
    cartContainer2.scrollWidth
  ) {
    cartContainer2.scrollLeft = 0;
  } else {
    cartContainer2.scrollLeft += cardWidth2;
  }
});

leftButton2.addEventListener("click", () => {
  if (cartContainer2.scrollLeft === 0) {
    cartContainer2.scrollLeft =
      cartContainer2.scrollWidth - cartContainer2.clientWidth;
  } else {
    cartContainer2.scrollLeft -= cardWidth2;
  }
});

setInterval(() => {
  if (cartContainer2.scrollLeft + cartContainer2.clientWidth >= cartContainer2.scrollWidth) {
    cartContainer2.scrollLeft = 0;
  } else {
    cartContainer2.scrollLeft += cardWidth2;
  }
}, 2000);

document.addEventListener("DOMContentLoaded", function () {
  

  const formLogin2 = document.getElementById("form_login");




  formLogin2.style.display = "none"; 


  const open_form = document.getElementById("open_form");
  if (open_form) {
      open_form.addEventListener("click", () => {
          formLogin2.style.display = "block";
      });
  } else {
      console.error("open_form button not found");
  }

  document.addEventListener("click", (event) => {
      if (event.target && event.target.id === "close_btn") {
          formLogin2.style.display = "none";
      }
  });
});





let form_x=document.getElementById('form_x')
form_x.addEventListener('click', ()=>{
  const formLogin2 = document.getElementById("form_login").style.display='none' 
const form_register=document.getElementById('form_register').style.display="block"

})



const form_register=document.getElementById('form_register')

const close_btn=document.getElementById('close_btn2')

close_btn.addEventListener('click', ()=>{
  form_register.style.display="none"
})



const cartItems3 = [
  {
    date: "17 oktyabr 2025",
    price: "35 ₼-dan",
    title: 'Sergey Bezrukov -"Хулиган. Исповедь"',
    location: "Heydər Əliyev Sarayı",
    image: ["Images/cart-23.jpg","Images/cart-23x.jpg"]
  },
  {
    date: "25 fevral 2025",
    price: "10 ₼-dan",
    title: "Hamlet – ƏSA Teatrı",
    location: "Akademik Milli Dram Teatrı",
    image: ["Images/cart-24-1.jpg", "Images/cart-24-2.png", "Images/cart-24x.jpg"]
  },
  {
    date: "27 fevral 2025",
    price: "30 ₼-dan",
    title: "Love is...",
    location: "Teatr O2",
    image: ["Images/cart-25.jpg", "Images/cart-25x.jpg"]
  },
  {
    date: "02 mart 2025",
    price: "8 ₼-dan",
    title: "Rapunzel - uşaqlar üçün musiqili tamaşa",
    location: "Rəşid Behbudov adına Dövlət Mahnı Teatrı",
    image: ["Images/cart-26-1.jpg", "Images/cart-26-2.png", "Images/cart-26x.jpg"]
  },
  {
    date: "07 mart 2025",
    price: "25 ₼-dan",
    title: "Гамлет",
    location: "Akademik Rus Dram Teatrı",
    image: ["Images/cart-27.jpg"]
},
{
  date: "09 mart 2025",
  price: "8 ₼-dan",
  title: "Sindirella - musiqili tamaşa",
  location: "Rəşid Behbudov adına Dövlət Mahnı Teatrı",
  image: ["Images/cart-28-1.jpg", "Images/cart-28-2.png"]
},
{  date: "06 aprel 2025",
  price: "8 ₼-dan",
  title: "Alisa Möcüzələr Diyarında",
  location: "Rəşid Behbudov adına Dövlət Mahnı Teatrı",
  image: ["Images/cart-29-1.jpg", "Images/cart-29-1.png", "Images/cart-29x.jpg"]
},
{  date: "13 aprel 2025",
  price: "8 ₼-dan",
  title: "Kung-Fu Panda - uşaqlar üçün musiqili tamaşa",
  location: "Rəşid Behbudov adına Dövlət Mahnı Teatrı",
  image: ["Images/cart-30-1.jpg", "Images/cart-30-2.png","Images/cart-30x.jpg"]
},
{  date: "20 aprel 2025",
  price: "8 ₼-dan",
  title: "Mulan - Uşaqlar üçün interaktiv musiqili tamaşa",
  location: "Rəşid Behbudov adına Dövlət Mahnı Teatrı",
  image: ["Images/cart-31-1.jpg", "Images/cart-31-2.png", "Images/cart-31x.jpg"]
},
{  date: "11 may 2025",
  price: "10 ₼-dan",
  title: "«Böyük Şoumen» Azərbaycanda",
  location: "Rəşid Behbudov adına Dövlət Mahnı Teatrı",
  image: ["Images/cart-32-1.jpg", "Images/cart-32-2.png", "Images/cart-32x.jpg"]
},
{  date: "17 may 2025",
  price: "10 ₼-dan",
  title: "\"Donnanın Hekayəsi – Mamma Mia əsasında\"",
  location: "Rəşid Behbudov adına Dövlət Mahnı Teatrı",
  image: ["Images/cart-33-1.jpg", "Images/cart-33-2.png", "Images/cart-33x.jpg"]
},
{  date: "08 iyun 2025",
  price: "8 ₼-dan",
  title: "Buratino və Pinokkio Karabas Barabasa qarşı - musiqili tamaşa",
  location: "Rəşid Behbudov adına Dövlət Mahnı Teatrı",
  image: [
    "Images/cart-34-1.jpg", "Images/cart-34-2.png", "Images/cart-34x.jpg"]
}
];

const cartContainer3 = document.getElementById("sec3-carts3");

cartItems3.forEach((item) => {
  const cartDiv3 = document.createElement("div");
  cartDiv3.classList.add("image-wrapper");

  cartDiv3.addEventListener("click", () => {
    localStorage.setItem("selectedCartItem", JSON.stringify(item));
    window.location.href = "cart.html";
  });


  const secondImage = item.image.find(img => img.endsWith(".png"));

  cartDiv3.innerHTML = `
        <div class="cart1-img">
            <img src="${item.image[0]}" alt="${item.title}" class="festival-image">
            ${secondImage ? `<a href="#" class="cart-link2"><img src="${secondImage}" alt="${item.title}"></a>` : ""}
        </div>
        <div class="cart1-p">
            <p class="p-1">${item.date}</p>
        </div>
        <div class="cart1-a">
            <a href="cart.html" class="cta-button" onclick="event.stopPropagation(); localStorage.setItem('selectedCartItem', JSON.stringify(${JSON.stringify(item)}));">${item.price}z</a>
        </div>
        <div class="info">
            <h3 style="margin-left: 20px;">${item.title}</h3>
            <p style="font-size: 13px; margin-left: 20px; opacity: 0.7;">${item.date} • ${item.location}</p>
        </div>
    `;

  cartContainer3.appendChild(cartDiv3);
});


const leftButton3 = document.querySelector(".sec3-left");
const rightButton3 = document.querySelector(".sec3-right");

const cardWidth3 = document.querySelector(".image-wrapper").offsetWidth + 50;

rightButton3.addEventListener("click", () => {
  if (cartContainer3.scrollLeft + cartContainer3.clientWidth >= cartContainer3.scrollWidth) {
    cartContainer3.scrollLeft = 0;
  } else {
    cartContainer3.scrollLeft += cardWidth3;
  }
});

leftButton3.addEventListener("click", () => {
  if (cartContainer3.scrollLeft === 0) {
    cartContainer3.scrollLeft = cartContainer3.scrollWidth - cartContainer3.clientWidth;
  } else {
    cartContainer3.scrollLeft -= cardWidth3;
  }
});

setInterval(() => {
  if (cartContainer3.scrollLeft + cartContainer3.clientWidth >= cartContainer3.scrollWidth) {
    cartContainer3.scrollLeft = 0;
  } else {
    cartContainer3.scrollLeft += cardWidth3;
  }
}, 2000);


const cartContainer4 = document.getElementById("sec4-carts4");

const cartItems4 = [
  {
    date: "27 aprel 2025",
    price: "10 ₼-dan",
    title: "Kukutiki",
    location: "Bakı Musiqi Akademiyası nəzdində Opera Studiyasının Konsert salonu",
    images: [
      "Images/cart-35-1.jpg", 
      "Images/cart-35-2.png",
      "Images/cart-35x.jpg", 
    ]
  },
  {
    date: "01 mart 2025",
    price: "15 ₼-dan",
    title: "Pizza Hut'dan uşaqlar üçün 'Pizza' master-klassı",
    location: "Pizza Hut",
    images: [
      "Images/cart-36-1.jpg", 
      "Images/cart-36-2.png",
      "Images/cart-36x.jpg", 
    ]
  },
  {
    date: "25 fevral 2025",
    price: "10 ₼-dan",
    title: "Elçin Abbasovun İnteraktiv Elm Muzeyi",
    location: "Hədəf Liseyi",
    images: [
      "Images/cart-37-1.jpg", 
      "Images/cart-37-2.png"
    ]
  },
  {
    date: "28 fevral 2025",
    price: "5 ₼-dan",
    title: "\"Durna balığı\"",
    location: "Azərbaycan Dövlət Kukla Teatrı",
    images: [
      "Images/cart-38-1.jpg", 
      "Images/cart-38-2.png"
    ]
  },
  {
    date: "05 mart 2025",
    price: "15 ₼-dan",
    title: "İtalyan Sirki – Flavio və Daniele Togni",
    location: "Circus Sea Breeze",
    images: [
      "Images/cart-39-1.jpg", 
      "Images/cart-39-2.png"
    ]
  },
  {
    date: "08 mart 2025",
    price: "8 ₼-dan",
    title: "Meri Poppins - Sehrli macəralar",
    location: "Bakı Musiqi Akademiyası nəzdində Opera Studiyasının Konsert salonu",
    images: [
      "Images/cart-40-1.jpg", 
      "Images/cart-40-2.png"
    ]
  },
  {
    date: "15 mart 2025",
    price: "10 ₼-dan",
    title: "Три кота: День Варенья! - Lənkəran",
    location: "Lənkəran Dövlət Dram Teatrı",
    images: [
      "Images/cart-41-1.jpg", 
      "Images/cart-41-2.png"
    ]
  },
  {
    date: "15 mart 2025",
    price: "11 ₼-dan",
    title: "Nikulin Sirki Bakıda",
    location: "Bakı İdman Sarayı",
    images: [
      "Images/cart-42-2.jpg", 
      "Images/cart-41-2.png"
    ]
  },
  {
    "date": "16 mart 2025",
    "price": "9 ₼-dan",
    "title": "Minecraft Şou",
    "location": "Bakı Musiqi Akademiyası nəzdində Opera Studiyasının Konsert salonu",
    "images": [
      "Images/cart-43-1.jpg",
      "Images/cart-43-2.png"
    ]
  },
  {
    "date": "16 mart 2025",
    "price": "10 ₼-dan",
    "title": "Три кота: День Варенья! - Sumqayıt",
    "location": "Sumqayıt Dövlət Dram Teatrı",
    "images": [
      "Images/cart-44-1.jpg",
      "Images/cart-41-2.png"
    ]
  },
  {
    "date": "20 mart 2025",
    "price": "5 ₼-dan",
    "title": "Aladdin dostlarla Novruz şənliyində",
    "location": "Rəşid Behbudov adına Dövlət Mahnı Teatrı",
    "images": [
      "Images/cart-45-1.jpg",
      "Images/cart-41-2.png"
    ]
  },
  {
    "date": "21 mart 2025",
    "price": "8 ₼-dan",
    "title": "Novruz macərası",
    "location": "Heydər Əliyev Sarayı",
    "images": [
      "Images/cart-46-1.jpg",
      "Images/cart-41-2.png"
    ]
  },
  {
    "date": "22 mart 2025",
    "price": "10 ₼-dan",
    "title": "Три кота: День Варенья! - Gəncə",
    "location": "Gəncə Dövlət Milli Dram Teatrı",
    "images": [
      "Images/cart-47-1.jpg",
      "Images/cart-41-2.png"
    ]
  },
  {
    "date": "23 mart 2025",
    "price": "10 ₼-dan",
    "title": "Три кота: День Варенья! - Mingəçevir",
    "location": "Mingəçevir Dövlət Dram Teatrı",
    "images": [
      "Images/cart-48-1.jpg",
      "Images/cart-41-2.png"
    ]
  }
  
  
  
  
];

cartItems4.forEach((item) => {
  const cartDiv4 = document.createElement("div");
  cartDiv4.classList.add("image-wrapper");

  cartDiv4.addEventListener("click", () => {
    localStorage.setItem("selectedCartItem", JSON.stringify(item));
    window.location.href = "cart.html";
  });

  const secondImage2 = item.images[1] ? `<a href="#" class="cart-link2"><img src="${item.images[1]}" alt="${item.title}"></a>` : "";

  cartDiv4.innerHTML = `
        <div class="cart1-img">
            <img src="${item.images[0]}" alt="${item.title}" class="festival-image">
            ${secondImage2}
        </div>
        <div class="cart1-p">
            <p class="p-1">${item.date}</p>
        </div>
        <div class="cart1-a">
            <a href="cart.html" class="cta-button" onclick="event.stopPropagation(); localStorage.setItem('selectedCartItem', JSON.stringify(${JSON.stringify(item)}));">${item.price}</a>
        </div>
        <div class="info">
            <h3 style="margin-left: 20px;">${item.title}</h3>
            <p style="font-size: 13px; margin-left: 20px; opacity: 0.7;">${item.date} • ${item.location}</p>
        </div>
    `;

  cartContainer4.appendChild(cartDiv4);
});



const leftButton4 = document.querySelector(".sec4-left");
const rightButton4 = document.querySelector(".sec4-right");

const cardWidth4 = document.querySelector(".image-wrapper").offsetWidth + 50;

rightButton4.addEventListener("click", () => {
  if (cartContainer4.scrollLeft + cartContainer4.clientWidth >= cartContainer4.scrollWidth) {
    cartContainer4.scrollLeft = 0;
  } else {
    cartContainer4.scrollLeft += cardWidth4;
  }
});

leftButton4.addEventListener("click", () => {
  if (cartContainer4.scrollLeft === 0) {
    cartContainer4.scrollLeft = cartContainer4.scrollWidth - cartContainer4.clientWidth;
  } else {
    cartContainer4.scrollLeft -= cardWidth4;
  }
});

setInterval(() => {
  if (cartContainer4.scrollLeft + cartContainer4.clientWidth >= cartContainer4.scrollWidth) {
    cartContainer4.scrollLeft = 0;
  } else {
    cartContainer4.scrollLeft += cardWidth4;
  }
}, 2000);
