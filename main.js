const a = document.querySelectorAll(".link");

a.forEach(function (tiklanan) {
  tiklanan.addEventListener("click", () => {
    a.forEach(function (tik) {
      tik.classList.remove("active");
    });
    tiklanan.classList.add("active");
  });
});

const b = document.querySelectorAll(".hamlink");

b.forEach(function (tiklanan) {
  tiklanan.addEventListener("click", () => {
    b.forEach(function (tik) {
      tik.classList.remove("active");
    });
    tiklanan.classList.add("active");
  });
});

const hamburger = document.querySelector(".hamburger");
const hamburgerMEnu = document.querySelector(".hamburger-menu");
const close = document.getElementById("close");

hamburger.addEventListener("click", () => {
  hamburgerMEnu.style.right = "0";
  // hamburgerMEnu.style.display = "block";
});

close.addEventListener("click", () => {
  hamburgerMEnu.style.right = "-200px";
  // hamburgerMEnu.style.display = "none";
});
