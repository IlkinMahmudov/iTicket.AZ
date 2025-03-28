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


    const warning_cart = document.getElementById("warning-cart");
    const eventCarts = document.getElementById("event-carts");
    const totalLabel = document.getElementById("total-label");
    const formArea = document.getElementById("form-area");
    const shopMethod = document.getElementById("shop-method");
  
    let sebet = JSON.parse(localStorage.getItem("sebet")) || [];
    let totalPrice = 0;
  

  
    sebet.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <div class="cart-item-img">
          <img src="${item.image?.[0] || 'default.jpg'}" class="festival-image">
          <img src="${item.image?.[1] || 'default.jpg'}" class="cart-link2">
        </div>
        <div class="cart-item-content-1">
          <h4>${item.fullDateLocation || 'Tarix yoxdur'}</h4>
          <p>${item.artistName || 'Artist yoxdur'}</p>
          <p>${item.maxAge || 'Yaş məhdudiyyəti yoxdur'}</p>
        </div>
        <div class="price-div">
          <div class="cart-item-price">
            <a>${item.price} ₼</a>
            <i class="fa-solid fa-trash trash-icon" data-index="${index}"></i>
          </div>
        </div>
      `;
      
  
      eventCarts.appendChild(cartItem);
      totalPrice += parseFloat(item.price || 0);
      if (index < sebet.length - 1) {
        const hr = document.createElement("hr");
        eventCarts.appendChild(hr);
        hr.classList.add("index-hr")
    }
    });
  
    
    totalLabel.textContent = `${totalPrice} ₼`;
  
    // Trash-icon kliklədikdə məhsulu silirik
    document.querySelectorAll(".trash-icon").forEach((icon) => {
      icon.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        sebet.splice(index, 1);
        localStorage.setItem("sebet", JSON.stringify(sebet));
        location.reload();
      });
    });
    
    
  
    // Formu və çatdırılma metodlarını göstəririk
    if (sebet.length > 0) {
      if (formArea) formArea.style.display = "block";
      if (warning_cart) warning_cart.style.display = "none";
      if (shopMethod) shopMethod.style.display = "block";
    } else {
      if (warning_cart) warning_cart.style.display = "flex";
      if (shopMethod) shopMethod.style.display = "none";
    }
  
    // Çatdırılma metodlarını göstərəcək hissə
    if (shopMethod) {
      shopMethod.innerHTML = `
        <div class="method-content">
          <h2>Çatdırılma üsulunu seçin </h2>
        </div>
        <div class="method-cart">
          <div class="cart-1 delivery-method" data-method="Elektron">
            <div class="cart1-content">
              <img src="Images/method-1.svg" alt="">
              <p>Elektron bilet və ya vauçer</p>
            </div>
          </div>
          <div class="cart-1 delivery-method" data-method="Məntəqə">
            <div class="cart1-content">
              <img src="Images/method-2.svg" alt="">
              <p>Şəhərin satış məntəqələrində</p>
            </div>
          </div>
        </div>
      `;
  
      
    }
  
  

  
  
  


  