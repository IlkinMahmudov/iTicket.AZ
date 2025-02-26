
const drop_open = document.getElementById("drop-open");
const drop_menu = document.getElementById("dropdown-menu");

drop_open.addEventListener("click", () => {
    drop_menu.classList.toggle("open");
});



document.getElementById("heartButton").addEventListener("click", function() {
    this.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
    const share = document.getElementById('share');
    const closebox = document.getElementById('close_box');
    const share_box = document.getElementById('share_box');

    if (share && closebox && share_box) {
        // Modalı açma düyməsi
        share.addEventListener("click", () => {
            share_box.style.display = 'block';
        });

        closebox.addEventListener("click", () => {
            share_box.style.display = 'none';
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
  
  







  
  
