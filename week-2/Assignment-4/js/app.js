const headline = document.querySelector(".headline");
headline.addEventListener("click", () => {
  headline.textContent = "Have a Good Time!";
});

const dropbtn = document.querySelector(".dropbtn");
const mobileMenu = document.querySelector(".mobile-menu");
const closebtn = document.querySelector(".closebtn");
const showMoreBtn = document.querySelector(".show-more-btn");
const section4 = document.querySelector("#section-4");

dropbtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closebtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

showMoreBtn.firstElementChild.addEventListener("click", () => {
  section4.classList.remove("hidden");
  showMoreBtn.style.display = "none";
});
