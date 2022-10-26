"strict mode";
const categoryBtn = document.querySelectorAll(".cat-btn");
const tabDetails = document.querySelectorAll(".tab-details");
const slide = document.querySelectorAll(".slide");
const sBtn = document.querySelectorAll(".s-btn");
const menuBar = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

// menubar

menuBar.addEventListener("click", function () {
  navLinks.classList.toggle("translate");
  menuBar.querySelector(".fa-solid").classList.toggle("fa-xmark");
  menuBar.classList.toggle("menuColor");
  document.querySelector("body").classList.toggle("body-height");
  document.querySelector(".overlay").classList.toggle("none");
});

categoryBtn.forEach((catBtn) => {
  catBtn.addEventListener("click", function (e) {
    categoryBtn.forEach((btn) => {
      btn.style.backgroundColor = "transparent";
      btn.style.color = "white";
    });

    catBtn.classList.toggle(".cat-btn-active");
    catBtn.style.backgroundColor = "white";
    catBtn.style.color = "black";

    tabDetails.forEach((tab) => {
      tab.classList.add("none");
      tab.style.opacity = "0";
    });

    const tab = e.target.getAttribute("data-tab");
    console.log(tab);

    [...tabDetails].find((tabd) => {
      if (tab === tabd.getAttribute("data-tab")) {
        tabd.classList.remove("none");
        setTimeout(() => {
          tabd.style.transition = "all .4s";
          tabd.style.opacity = "1";
        }, 100);
      }
    });
  });
});

//
// //////
slide.forEach((sl, i) => {
  sl.style.transform = `translate(${i}00%)`;
});
//

let sP = 0;
sBtn.forEach((sb) => {
  sb.addEventListener("click", function (e) {
    // if (e.target.closest("s-btn").classList.contains(""))
    console.log("click");
    if (sb.classList.contains("slide-right")) {
      sP--;
    }
    if (sb.classList.contains("slide-left") && sP < 0) {
      sP++;
    }
    if (sP <= -3) {
      sP = 0;
    }
    if (sP === 0) {
      //   return;
    }

    if (sb.classList.contains("slide-right")) {
      slide.forEach((sl, i) => {
        sl.style.transition = "all .8s";

        sl.style.transform = `translateX(${sP + i}00%)`;
      });
    } else if (sb.classList.contains("slide-left")) {
      slide.forEach((sl, i) => {
        sl.style.transition = "all .8s";

        sl.style.transform = `translateX(${sP + i}00%)`;
      });
    }
  });
});
