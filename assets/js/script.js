document.addEventListener("DOMContentLoaded", function () {
  
    // Toggle Menu
    const menu = document.getElementById("menu");
    const mobile = document.getElementById("mobile");
    const desktop = document.getElementById("desktop");
  
    menu.addEventListener("click", () => {
      if (mobile.style.display === "none" || mobile.style.display === "") {
        closeMenu();
        mobile.style.display = "grid";
      } else {
        mobile.style.display = "none";
        closeMenu();
      }
    });
  
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 480) {
        desktop.style.display = "grid";
        mobile.style.display = "none";
      } else {
        desktop.style.display = "none";
        menu.classList.remove("change");
      }
    });
  
    function closeMenu() {
      menu.classList.toggle("change");
    }
  
    // Contact modal
    const formBtn = document.getElementById("formBtn");
    const formModal = document.getElementById("formModal");
    const close = document.getElementsByClassName("close")[0];
  
    formBtn.addEventListener("click", () => {
      formModal.style.display = "flex";
    });
  
    close.addEventListener("click", () => {
      formModal.style.display = "none";
    });
    
  

  });