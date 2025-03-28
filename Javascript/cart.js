const drop_open = document.getElementById("drop-open");
const drop_menu = document.getElementById("dropdown-menu");

drop_open.addEventListener("click", () => {
  drop_menu.classList.toggle("open");
});

function openMenu() {
  const menu = document.querySelector(".bars-open");
  menu.classList.toggle("open");

  menu.classList.remove("close");
}

const close_bars = document.getElementById("bars-close");
close_bars.addEventListener("click", () => {
  const menu = document.querySelector(".bars-open");

  menu.classList.toggle("close");
 
  menu.classList.remove("open");
});

const selectedCartItem = localStorage.getItem("selectedCartItem");
const parseItem = selectedCartItem ? JSON.parse(selectedCartItem) : null;

if (!parseItem) {
    console.error("Səbət məlumatı tapılmadı.");
} else {
    const about_area = document.getElementById("about-area");
    const about_area2 = document.getElementById("about-area2");

    about_area.textContent = parseItem.description;
    about_area2.textContent = parseItem.maxAge;

    const buttonx_1 = document.getElementById("buttonx-1");
    const buttonx_2 = document.getElementById("buttonx-2");

    if (buttonx_1 && buttonx_2) {

        buttonx_1.classList.add("on");

        buttonx_1.addEventListener("click", () => {
            buttonx_1.classList.add("on");
            buttonx_2.classList.remove("on");
            about_area.style.display = "block";
            about_area2.style.display = "none";
            about_area.textContent = parseItem.description;
        });

        buttonx_2.addEventListener("click", () => {
            buttonx_2.classList.add("on");
            buttonx_1.classList.remove("on");
            about_area.style.display = "none";
            about_area2.style.display = "block";
            about_area2.textContent = parseItem.maxAge;
        });
    }
}


if (!parseItem) {
  console.error("Səbət məlumatı tapılmadı.");
} else {
  const about_area3= document.getElementById("about-area3");
  const about_area4= document.getElementById("about-area2-2");

  about_area3.textContent = parseItem.description;
  about_area4.textContent = parseItem.maxAge;

  const buttonx_1_1 = document.getElementById("buttonx-1-1");
  const buttonx_2_2 = document.getElementById("buttonx-2-2");

  buttonx_1_1.classList.add("on");
  buttonx_2_2.classList.add("on");
   

          about_area3.textContent = parseItem.description;
          about_area4.textContent = parseItem.maxAge;
    
}


const cart_details = document.getElementById("cart-details");
cart_details.innerHTML = `
<img src="${parseItem.image[2]}" class="cart1-img">
<img src="${parseItem.image[0]}" class="cart1-img2">
<img src="${parseItem.image[1]}" class="cart1-img3">
`;

const cart_price = document.querySelector(".cart-price");

if (cart_price && parseItem.price) {
  cart_price.innerHTML = `
        <button class="price" data-target="event-description" id="price">
            <a href="#"> ${parseItem.price}  ₼-dan</a>
        </button>
    `;
}

document.getElementById("heartButton").addEventListener("click", function () {
  this.classList.toggle("active");
  spinnerOverlay.style.display = "flex";

  // Seçilmiş məhsulu götürürük
  const selectedCartItem = localStorage.getItem("selectedCartItem");

  if (!selectedCartItem) {
    console.error("Seçilmiş məhsul tapılmadı!");
    return;
  }

  const parseItem = JSON.parse(selectedCartItem);

  // **Biletlərə ayrıca əlavə edirik**
  let biletlər = JSON.parse(localStorage.getItem("biletlər")) || [];
  biletlər.push(parseItem);
  localStorage.setItem("biletlər", JSON.stringify(biletlər));

  // **Favoritlərə ayrıca əlavə edirik**
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  if (!favorites.some(fav => fav.id === parseItem.id)) {
    favorites.push(parseItem);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  localStorage.setItem("fromCart", "true");

  setTimeout(() => {
    window.location.href = "favorites.html";
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const share = document.getElementById("share");
  const closebox = document.getElementById("close_box");
  const share_box = document.getElementById("share_box");

  if (share && closebox && share_box) {
   
    share.addEventListener("click", () => {
      share_box.style.display = "block";
    });

    closebox.addEventListener("click", () => {
      share_box.style.display = "none";
    });
  }
});

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

document.addEventListener("DOMContentLoaded", function () {
  const formLogin2 = document.getElementById("form_login");

  formLogin2.style.display = "none";

  const open_form2 = document.getElementById("open_form2");
  if (open_form2) {
    open_form2.addEventListener("click", () => {
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

let form_x = document.getElementById("form_x");
form_x.addEventListener("click", () => {
  const formLogin2 = (document.getElementById("form_login").style.display =
    "none");
  const form_register = (document.getElementById(
    "form_register"
  ).style.display = "block");
});

const form_register = document.getElementById("form_register");

const close_btn = document.getElementById("close_btn2");

close_btn.addEventListener("click", () => {
  form_register.style.display = "none";
});

const eventCard = document.querySelector(".event-description");
eventCard.innerHTML = `
    <div class="event-left">
      <h2>${parseItem.artistName}</h2>
      <p class="location">${parseItem.eventLocation}</p>
    </div>
  <span class="space"></span>
    <div class="event-middle">
      <div class="event-detail">
        <p class="label">Tarix</p>
        <p class="value">${parseItem.eventDate}</p>
      </div>
        <span class="space"></span>
      <div class="divider"></div>
      <div class="event-detail">
        <p class="label">Qiymət</p>
        <p class="value">${parseItem.price} ₼</p>
      </div>
    </div>

    <div class="event_button_div">
    <a href="#" class="event-button" id="event-button">Bilet əldə edin</a>
    </div>
  `;




const about_image = document.getElementById("about-image");
about_image.innerHTML = `
<img src="${parseItem.image[0]}">
<img src="${parseItem.image[1]}" class="item-image-2">
`;
const event_button = document.querySelector(".event-button");
const spinnerOverlay = document.querySelector(".spinner-overlay");

event_button.addEventListener("click", () => {
  spinnerOverlay.style.display = "flex";

  // Yeni məhsulu götür
  const parseItem = JSON.parse(localStorage.getItem("selectedCartItem")) || {};

  // `sebet`-i oxuyub array kimi yoxlayırıq
  let sebet = JSON.parse(localStorage.getItem("sebet"));
  
  // Əgər `sebet` null və ya qeyri-massivdirsə, boş array kimi götür
  if (!Array.isArray(sebet)) {
    sebet = [];
  }

  // Yeni məhsulu əlavə et
  sebet.push(parseItem);

  // Yenilənmiş səbəti yadda saxla
  localStorage.setItem("sebet", JSON.stringify(sebet));
  localStorage.setItem("fromCart", "true");

  console.log("Məlumatlar səbətə yükləndi");

  setTimeout(() => {
    window.location.href = "shop.html";
  }, 1000);
});



document.getElementById("price").addEventListener("click", function (e) {
  e.preventDefault(); 

  const targetId = e.currentTarget.getAttribute("data-target");
  const targetElement = document.getElementById(targetId);
  targetElement.scrollIntoView({ behavior: "smooth" });
});


function Get_Data(fethc_json) {
  fetch(fethc_json)
    .then((response) => response.json())
    .then((card) => {
      const relate_data = card.cartItems.slice(1, 7);
      const event_cards= document.querySelector(".event_cards")

        relate_data.forEach((item) => {
          const cartDiv = document.createElement("div");
          cartDiv.classList.add("image-wrapper");
          cartDiv.innerHTML = `
    <div class="cart2-img">
        <img src="${item.image[0]}" alt="${item.altText}" class="festival-image">
          <img src="${item.image[1]}" alt=${item.altText}" class="cart-link2">
    
    </div>
    <div class="cart2-p">
        <p class="p-1">${item.eventDate}</p>
    </div>
    <div class="cart2-a">
        <a href="cart.html" class="cta-button">${item.price}  ₼-dan</a>
    </div>
    <div class="info">
        <h3 style="margin-left: 20px;">${item.artistName}</h3>
        <p style="font-size: 13px; margin-left: 20px; opacity: 0.7;">${item.fullDateLocation}</p>
    </div>
    `
    ;

          cartDiv.addEventListener("click", () => {
            localStorage.setItem("selectedCartItem", JSON.stringify(item));
            window.location.href = "cart.html";
          });
          event_cards.appendChild(cartDiv);
        });
      
    });

  }
  console.log(parseItem.category)
  if(parseItem.category === "Populyar tədbirlər"){
    Get_Data("Data/cartItem1.json")
    console.log("true")
    }


  else if(parseItem.category === "Turizm"){
      Get_Data("Data/cartItem2.json")
      console.log("true")
      }

      
  else if(parseItem.category === "Tamaşalar"){
    Get_Data("Data/cartItem3.json")
    console.log("true")
    }

    else if(parseItem.category === "Uşaqlar"){
      Get_Data("Data/cartItem4.json")
      console.log("true")
      }


      else if(parseItem.category === "Yenilik"){
        Get_Data("Data/cartItem5.json")
        console.log("true")
        }

        else if(parseItem.category === "Həftəsonları"){
          Get_Data("Data/cartItem6.json")
          console.log("true")
          }
          else if(parseItem.category === "Idman"){
            Get_Data("Data/cartItem7.json")
            console.log("true")
            }

