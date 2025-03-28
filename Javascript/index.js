const slidesContainer = document.querySelector(".slides-container");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");

let slideIndex = 0;
let slides = [];  
let slideInterval;

function updateSlides() {
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlides();
}

function startAutoSlide() {
  clearInterval(slideInterval); 
  slideInterval = setInterval(nextSlide, 3000);
}

btnLeft.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateSlides();
  startAutoSlide(); 
});

btnRight.addEventListener("click", () => {
  nextSlide();
  startAutoSlide();
});

fetch("Data/cartItem0.json")
  .then(response => response.json())
  .then(data => {


    data.forEach((item, index) => {
    
      if (index < 4) {
        const slide = document.createElement("div");
        slide.classList.add("slide");


        if (index === 0) {
          slide.classList.add("active");
        }

        slide.innerHTML = `
          <a href="#" class="slide-img">
            <img src="${item.image[0]}" alt="${item.altText}" />
          </a>
        `;

    
        slidesContainer.appendChild(slide);
        slides.push(slide); 
        slide.addEventListener("click", () => {
          localStorage.setItem("selectedCartItem", JSON.stringify(item));
          window.location.href = "cart.html"; 
        });
      }
      
    });

    startAutoSlide();
    updateSlides(); 
  });



const drop_open = document.getElementById("drop-open");
const drop_menu = document.getElementById("dropdown-menu");

drop_open.addEventListener("click", () => {
    drop_menu.classList.toggle("open");
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





function openMenu() {
  const menu = document.querySelector('.bars-open');
  menu.classList.toggle('open');
  
  menu.classList.remove('close');
}

const close_bars = document.getElementById('bars-close');
close_bars.addEventListener('click', () => {
  const menu = document.querySelector('.bars-open');

  menu.classList.toggle('close');

  menu.classList.remove('open');
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



function createAutoSlider(cartContainer, leftButton, rightButton) {
  const scrollAmount = 320;
  let slideInterval;

  function scrollLeftSmoothly() {
    cartContainer.scrollLeft -= scrollAmount;

    if (cartContainer.scrollLeft <= 0) {
      cartContainer.scrollLeft += cartContainer.scrollWidth / 2;
    }
  }

  function scrollRightSmoothly() {
    cartContainer.scrollLeft += scrollAmount;

    if (cartContainer.scrollLeft >= cartContainer.scrollWidth / 2) {
      cartContainer.scrollLeft -= cartContainer.scrollWidth / 2;
    }
  }


  function startAutoSlideshow() {
    slideInterval = setInterval(() => {
      cartContainer.scrollLeft += scrollAmount;

      if (cartContainer.scrollLeft >= cartContainer.scrollWidth / 2) {
        cartContainer.scrollLeft -= cartContainer.scrollWidth / 2;
      }
    }, 2000); 
  }


  startAutoSlideshow();


  leftButton.addEventListener("click", () => {
    clearInterval(slideInterval);
    scrollLeftSmoothly();
    startAutoSlideshow(); 
  });

  rightButton.addEventListener("click", () => {
    clearInterval(slideInterval); 
    scrollRightSmoothly();
    startAutoSlideshow();
  });
}
fetch("Data/cartItem0.json")
  .then(response => response.json())
  .then(data => {
    data.forEach((item, index) => {
      const slide = document.createElement("div");
      slide.classList.add("slide");
      if (index === 0) {
        slide.classList.add("active");
      }

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.alt;

      slide.appendChild(img);
      slidesContainer.appendChild(slide);


      slide.addEventListener("click", () => {
        localStorage.setItem("selectedCartItem", JSON.stringify(item));
        window.location.href = "cart.html";
      });

    });
  })



const cartContainer = document.getElementById("sec2-carts");
const leftButton = document.querySelector(".sec2-left");
const rightButton = document.querySelector(".sec2-right");

fetch("Data/cartItem1.json")
  .then(response => response.json())
  .then(card1 => {

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
            <a href="cart.html" class="cta-button">${item.price}  ₼-dan</a>
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
      
      
     
      createAutoSlider(cartContainer, leftButton, rightButton);
      cartContainer.appendChild(cartDiv);
    });

    const scrollAmount = 320;

    function scrollLeftSmoothly() {
      cartContainer.scrollLeft -= scrollAmount;


      if (cartContainer.scrollLeft <= 0) {
        cartContainer.scrollLeft += cartContainer.scrollWidth / 2;
      }
    }

    function scrollRightSmoothly() {
      cartContainer.scrollLeft += scrollAmount;

     
      if (cartContainer.scrollLeft >= cartContainer.scrollWidth / 2) {
        cartContainer.scrollLeft -= cartContainer.scrollWidth / 2;
      }
    }

    leftButton.addEventListener("click", scrollLeftSmoothly);
    rightButton.addEventListener("click", scrollRightSmoothly);
  });

const cartContainer2 = document.getElementById("sec2-carts2");
const leftButton2 = document.querySelector(".sec2-left2");
const rightButton2 = document.querySelector(".sec2-right2");
fetch("Data/cartItem2.json")
  .then((response) => {
    return response.json();
  })
  .then((card2) => {
    card2.cartItems.forEach((item) => {
      const cartDiv = document.createElement("div");
      cartDiv.classList.add("image-wrapper");
      cartDiv.innerHTML = `
      <div class="cart1-img">
          <img src="${item.image[0]}" alt="${item.altText}" class="festival-image">
            <img src="${item.image[1]}" alt=${item.altText}" class="cart-link2">
      
      </div>
      <div class="cart1-p">
          <p class="p-1">${item.eventDate}</p>
      </div>
      <div class="cart1-a">
          <a href="cart.html" class="cta-button">${item.price}  ₼-dan</a>
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
      createAutoSlider(cartContainer2, leftButton2, rightButton2);
      const scrollAmount = 320; 

      function scrollLeftSmoothly() {
        cartContainer2.scrollLeft -= scrollAmount;

        if (cartContainer2.scrollLeft <= 0) {
          cartContainer2.scrollLeft += cartContainer2.scrollWidth / 2;
        }
      }
  
      function scrollRightSmoothly() {
        cartContainer2.scrollLeft += scrollAmount;

        if (cartContainer2.scrollLeft >= cartContainer2.scrollWidth / 2) {
          cartContainer2.scrollLeft -= cartContainer2.scrollWidth / 2;
        }
      }
  
      leftButton2.addEventListener("click", scrollLeftSmoothly);
      rightButton2.addEventListener("click", scrollRightSmoothly);
      cartContainer2.appendChild(cartDiv);
    });
  })






const cartContainer3 = document.getElementById("sec3-carts3");

const leftButton3 = document.querySelector(".sec3-left3");
const rightButton3 = document.querySelector(".sec3-right3");
fetch("Data/cartItem3.json")
  .then((response) => {
    return response.json();
  })
  .then((card3) => {
    card3.cartItems.forEach((item) => {
      const cartDiv = document.createElement("div");

      cartDiv.classList.add("image-wrapper");
      cartDiv.innerHTML = `
      <div class="cart1-img">
          <img src="${item.image[0]}" alt="${item.altText}" class="festival-image">
              <img src="${item.image[1]}" alt=${item.altText}" class="cart-link2">
      </div>
      <div class="cart1-p">
          <p class="p-1">${item.eventDate}</p>
      </div>
      <div class="cart1-a">
          <a href="cart.html" class="cta-button">${item.price}  ₼-dan</a>
      </div>
      <div class="info">
          <h3 style="margin-left: 20px;">${item.artistName}</h3>
          <p style="font-size: 13px; margin-left: 20px; opacity: 0.7;">${item.fullDateLocation}</p>
      </div>
      `;


      const scrollAmount = 320; 

      function scrollLeftSmoothly() {
        cartContainer3.scrollLeft -= scrollAmount;

        if (cartContainer3.scrollLeft <= 0) {
          cartContainer3.scrollLeft += cartContainer3.scrollWidth / 2;
        }
      }
  
      function scrollRightSmoothly() {
        cartContainer3.scrollLeft += scrollAmount;

        if (cartContainer3.scrollLeft >= cartContainer3.scrollWidth / 2) {
          cartContainer3.scrollLeft -= cartContainer3.scrollWidth / 2;
        }
      }
  
      leftButton3.addEventListener("click", scrollLeftSmoothly);
      rightButton3.addEventListener("click", scrollRightSmoothly);
      cartDiv.addEventListener("click", () => {
        localStorage.setItem("selectedCartItem", JSON.stringify(item));
        window.location.href = "cart.html";
      });
      createAutoSlider(cartContainer3, leftButton3, rightButton3);

      cartContainer3.appendChild(cartDiv);
    });
  })


const cartContainer4 = document.getElementById("sec4-carts4");
const leftButton4 = document.querySelector(".sec4-left4");
const rightButton4 = document.querySelector(".sec4-right4");
fetch("Data/cartItem4.json")
  .then((response) => {
    return response.json();
  })
  .then((card4) => {
    card4.cartItems.forEach((item) => {
      const cartDiv = document.createElement("div");


      cartDiv.classList.add("image-wrapper");
      cartDiv.innerHTML = `
      <div class="cart1-img">
          <img src="${item.image[0]}" alt="${item.altText}" class="festival-image">
              <img src="${item.image[1]}" alt=${item.altText}" class="cart-link2">
      </div>
      <div class="cart1-p">
          <p class="p-1">${item.eventDate}</p>
      </div>
      <div class="cart1-a">
          <a href="cart.html" class="cta-button">${item.price}  ₼-dan</a>
      </div>
      <div class="info">
          <h3 style="margin-left: 20px;">${item.artistName}</h3>
          <p style="font-size: 13px; margin-left: 20px; opacity: 0.7;">${item.fullDateLocation}</p>
      </div>
      `;

      const scrollAmount = 320; 

      function scrollLeftSmoothly() {
        cartContainer4.scrollLeft -= scrollAmount;

        if (cartContainer4.scrollLeft <= 0) {
          cartContainer4.scrollLeft += cartContainer4.scrollWidth / 2;
        }
      }
  
      function scrollRightSmoothly() {
        cartContainer4.scrollLeft += scrollAmount;

        if (cartContainer4.scrollLeft >= cartContainer4.scrollWidth / 2) {
          cartContainer4.scrollLeft -= cartContainer4.scrollWidth / 2;
        }
      }
  
      leftButton4.addEventListener("click", scrollLeftSmoothly);
      rightButton4.addEventListener("click", scrollRightSmoothly);

      cartDiv.addEventListener("click", () => {
        localStorage.setItem("selectedCartItem", JSON.stringify(item));
        window.location.href = "cart.html";
      });
      createAutoSlider(cartContainer4, leftButton4, rightButton4);

      cartContainer4.appendChild(cartDiv);
    });
  })


  const cartContainer5 = document.getElementById("sec5-carts5");
  const leftButton5 = document.querySelector(".sec5-left5");
  const rightButton5 = document.querySelector(".sec5-right5");
fetch("Data/cartItem5.json")
  .then((response) => {
    return response.json();
  })
  .then((card5) => {
    card5.cartItems.forEach((item) => {
      const cartDiv = document.createElement("div");


      cartDiv.classList.add("image-wrapper");
      cartDiv.innerHTML = `
      <div class="cart1-img">
          <img src="${item.image[0]}" alt="${item.altText}" class="festival-image">
              <img src="${item.image[1]}" alt=${item.altText}" class="cart-link2">
      </div>
      <div class="cart1-p">
          <p class="p-1">${item.eventDate}</p>
      </div>
      <div class="cart1-a">
          <a href="cart.html" class="cta-button">${item.price}  ₼-dan</a>
      </div>
      <div class="info">
          <h3 style="margin-left: 20px;">${item.artistName}</h3>
          <p style="font-size: 13px; margin-left: 20px; opacity: 0.7;">${item.fullDateLocation}</p>
      </div>
      `;
      const scrollAmount = 320; 

      function scrollLeftSmoothly() {
        cartContainer5.scrollLeft -= scrollAmount;

        if (cartContainer5.scrollLeft <= 0) {
          cartContainer5.scrollLeft += cartContainer5.scrollWidth / 2;
        }
      }
  
      function scrollRightSmoothly() {
        cartContainer5.scrollLeft += scrollAmount;

        if (cartContainer5.scrollLeft >= cartContainer5.scrollWidth / 2) {
          cartContainer5.scrollLeft -= cartContainer5.scrollWidth / 2;
        }
      }
  
      leftButton5.addEventListener("click", scrollLeftSmoothly);
      rightButton5.addEventListener("click", scrollRightSmoothly);

      cartDiv.addEventListener("click", () => {
        localStorage.setItem("selectedCartItem", JSON.stringify(item));
        window.location.href = "cart.html";
      });
      createAutoSlider(cartContainer5, leftButton5, rightButton5);

      cartContainer5.appendChild(cartDiv);
    });
  })






  const cartContainer6 = document.getElementById("sec6-carts6");
  const leftButton6 = document.querySelector(".sec6-left6");
  const rightButton6 = document.querySelector(".sec6-right6");
fetch("Data/cartItem6.json")
  .then((response) => {
    return response.json();
  })
  .then((card6) => {
    card6.cartItems.forEach((item) => {
      const cartDiv = document.createElement("div");


      cartDiv.classList.add("image-wrapper");
      cartDiv.innerHTML = `
      <div class="cart1-img">
          <img src="${item.image[0]}" alt="${item.altText}" class="festival-image">
              <img src="${item.image[1]}" alt=${item.altText}" class="cart-link2">
      </div>
      <div class="cart1-p">
          <p class="p-1">${item.eventDate}</p>
      </div>
      <div class="cart1-a">
          <a href="cart.html" class="cta-button">${item.price}  ₼-dan</a>
      </div>
      <div class="info">
          <h3 style="margin-left: 20px;">${item.artistName}</h3>
          <p style="font-size: 13px; margin-left: 20px; opacity: 0.7;">${item.fullDateLocation}</p>
      </div>
      `;
      const scrollAmount = 320; 

      function scrollLeftSmoothly() {
        cartContainer6.scrollLeft -= scrollAmount;

        if (cartContainer6.scrollLeft <= 0) {
          cartContainer6.scrollLeft += cartContainer6.scrollWidth / 2;
        }
      }
  
      function scrollRightSmoothly() {
        cartContainer6.scrollLeft += scrollAmount;

        if (cartContainer6.scrollLeft >= cartContainer6.scrollWidth / 2) {
          cartContainer6.scrollLeft -= cartContainer6.scrollWidth / 2;
        }
      }
  
      leftButton6.addEventListener("click", scrollLeftSmoothly);
      rightButton6.addEventListener("click", scrollRightSmoothly);

      cartDiv.addEventListener("click", () => {
        localStorage.setItem("selectedCartItem", JSON.stringify(item));
        window.location.href = "cart.html";
      });

      createAutoSlider(cartContainer6, leftButton6, rightButton6);
      cartContainer6.appendChild(cartDiv);
    });
  })






