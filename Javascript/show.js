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
  let start = 0;
  let end = 4;
  const step = 4; 
  const maxItems = 12; 
  const button_event = document.getElementById("button-event");
  const spinner = document.querySelector(".spinner");
  
  function Get_Data(fethc_json, slice_start, slice_end) {
      button_event.innerText = "";
      spinner.style.display = "inline-block";
      button_event.disabled = true;
  
      fetch(fethc_json)
          .then((response) => response.json())
          .then((card) => {
              const relate_data = card.cartItems.slice(slice_start, slice_end);
              const events = document.getElementById("event-carts");
  
              setTimeout(() => {
                  relate_data.forEach((item) => {
                      const cartDiv = document.createElement("div");
                      cartDiv.classList.add("image-wrapper");
                      cartDiv.innerHTML = `
                          <div class="cart2-img">
                              <img src="${item.image[0]}" alt="${item.altText}" class="festival-image">
                              <img src="${item.image[1]}" alt="${item.altText}" class="cart-link2">
                          </div>
                          <div class="cart2-p">
                              <p class="p-1">${item.eventDate}</p>
                          </div>
                          <div class="cart2-a">
                              <a href="cart.html" class="cta-button">${item.price} ₼-dan</a>
                          </div>
                          <div class="info">
                              <h3 style="margin-left: 20px;">${item.artistName}</h3>
                              <p style="font-size: 13px; margin-left: 20px; opacity: 0.7;">${item.fullDateLocation}</p>
                          </div>
                      `;
  
                      cartDiv.addEventListener("click", () => {
                          localStorage.setItem("selectedCartItem", JSON.stringify(item));
                          window.location.href = "cart.html";
                      });
  
                      events.appendChild(cartDiv);
                  });
  
                  button_event.innerText = "Daha Çox";
                  spinner.style.display = "none";
                  button_event.disabled = false;
  
                  if (end >= maxItems) {
                      button_event.style.display = "none";
                  }
              }, 1000);
          })
          .catch(error => {
              console.error("Veri çekme hatası:", error);
              button_event.innerText = "";
              spinner.style.display = "none";
              button_event.disabled = false;
          });
  }
  
  Get_Data("Data/cartItem3.json", start, end);
  
  button_event.addEventListener("click", () => {
      start = end;
      end = end + step;
  
      if (end > maxItems) {
          end = maxItems;
      }
  
      Get_Data("Data/cartItem3.json", start, end);
  });
  