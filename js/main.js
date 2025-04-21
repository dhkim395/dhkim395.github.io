const header = document.querySelector(".header");

const headerHeight = header.offsetHeight; //요소의 총 높이
// console.log(headerHeight); //70

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    // console.log("window.scrollY가 headerHeight보다 큽니다");
    header.classList.add("header--dark");
  } else {
    // console.log("window.scrollY가 headerHeight보다 작습니다.");
    header.classList.remove("header--dark");
  } //스크롤이 위아래로 하기 위함(scrollY)
});

const home = document.querySelector(".home__contatiner");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

arrowUp.addEventListener("click", (e) => {
  e.preventDefault(); //a 태그의 기본 동작을 막음
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const navbarMenu = document.querySelector(".header__menu");
// 햄버거 메뉴 만들기
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
