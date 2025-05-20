document.addEventListener("DOMContentLoaded", () => {
    let menu = document.querySelector(".menu");
    let menu_bar = document.querySelector(".menu-bar");
    let loginBtn = document.getElementById("login-btn");
    let signUpForm = document.querySelector(".sign-up-form");
    let signInForm = document.querySelector(".sign-in-form")
    let signUpBtn = document.getElementById("signup-btn")

  
    if (loginBtn) {
      loginBtn.addEventListener("click", function () {
        signUpForm.classList.toggle("hidden")
        signInForm.classList.remove("hidden")
      });
    }
    if(signUpBtn) {
        signUpBtn.addEventListener("click", function(){
            signInForm.classList.toggle("hidden")
            signUpForm.classList.remove("hidden")
        })
    }
  
    if (menu && menu_bar) {
      menu.addEventListener("click", function () {
        menu_bar.classList.add("hidden");
      });
    }
  });
  