const helpcenter = document.getElementById("help-center");
const helpicon = document.getElementById("help-icon");
const dropdown = document.getElementById("dropdown");
helpicon.classList.add("active");
helpcenter.addEventListener("click", () => {
  helpicon.classList.toggle("active");
  helpicon.classList.toggle("unactive");
  dropdown.classList.toggle("active");
});

const searchInput = document.querySelector(".search-container input");
const searchIcon = document.querySelector(".search-icon");
const backIcon = document.querySelector(".back-icon");
const navbar = document.querySelector(".navbar");
const body = document.body;

searchInput.addEventListener("input", function () {
  if (this.value.length > 0) {
    searchIcon.style.display = "none";
    backIcon.style.display = "block";

    navbar.style.backgroundColor = "#ffffff";
    navbar.style.transition = "background-color 0.3s ease";

    body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  } else {
    searchIcon.style.display = "block";
    backIcon.style.display = "none";

    navbar.style.backgroundColor = "";

    body.style.backgroundColor = "";
  }
});

backIcon.addEventListener("click", function () {
  searchInput.value = "";
  searchIcon.style.display = "block";
  backIcon.style.display = "none";

  
  navbar.style.backgroundColor = "";
  body.style.backgroundColor = "";

  searchInput.focus();
});




let slideIndex = 1;
let autoSlideInterval;

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("activedot");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("activedot");
}

function plusSlides(n) {
    clearInterval(autoSlideInterval);
    showSlides(slideIndex += n);
    startAutoSlide();
}

function currentSlide(n) {
    clearInterval(autoSlideInterval);
    showSlides(slideIndex = n);
    startAutoSlide();
}


document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);

});
const cityText = document.querySelector('.city-text');
const cityInput = document.querySelector('.city-input');
const browsingArrow = document.querySelector('.browsing-arrow');

function activateInput() {
    cityText.style.opacity = '0';
    cityInput.style.display = 'block';
    cityInput.focus();
}

function deactivateInput() {
    if (cityInput.value.trim() === '') {
        cityText.style.opacity = '1';
    }
    cityInput.style.display = 'none';
}

// **Gizleme yerine sadece opacity sıfırlıyoruz, çizgi kaybolmuyor!**
cityInput.addEventListener('input', () => {
    cityText.style.opacity = cityInput.value.trim() ? '0' : '1';
});

// **Blur event kaldırıldı, input yazarken kaybolmayacak**
browsingArrow.addEventListener('click', (event) => {
    event.stopPropagation();
    activateInput();
});

cityText.addEventListener('click', (event) => {
    event.stopPropagation();
    activateInput();
});

const btnLeft=document.getElementById("btnLeft")
const btnRight=document.getElementById("btnRight")

btnRight.setAttribute("disabled","disabled")

btnLeft.addEventListener("click",()=>{
    const slidecard=document.getElementById("slide-card-sec")
slidecard.scrollLeft +=950

})

btnLeft.addEventListener("click", ()=>{

    if(btnLeft.scrollLeft +950){
        btnRight.removeAttribute("disabled",)
    }
    else{
        btnRight.setAttribute("disabled","disabled")
    }
})


btnRight.addEventListener("click",()=>{
    const slidecard=document.getElementById("slide-card-sec")
    slidecard.scrollLeft-=950

})


document.getElementById("bars").addEventListener("click", function() {
    document.getElementById("responsive-ul").classList.toggle("show-menu");
});
