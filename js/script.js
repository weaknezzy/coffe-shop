// Toogle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//toggle class aktif untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//toogle class active untuk shopping cart
const navbarShop = document.querySelector(".shopping-cart");
// ketika shopping cart di click
document.querySelector("#shopping-cart-button").onclick = () => {
  navbarShop.classList.toggle("active");
};

// klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sp = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sp.contains(e.target) && !navbarShop.contains(e.target)) {
    navbarShop.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
