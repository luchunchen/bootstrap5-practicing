function height() {
  let picHeight = document.querySelector(".img-height");
  let rowHeight = document.querySelector(".row-height");
  let height = picHeight.offsetHeight;

  rowHeight.style.height = `${height}px`;
}

height();

// copyright

function copyRight() {
  let year = new Date().getFullYear();
  let copyRight = document.querySelector("#copyright");
  let title = document.querySelector("title").innerText;

  copyRight.innerText = `Copyright © ${year} ${title} All Rights Reserved. Designed by tatsu`;
}

copyRight();

// animation

const animationRight = Array.from(
  document.querySelectorAll(".animation-right")
);

function move() {
  animationRight.forEach((item) => {
    if (window.scrollY + innerHeight > item.offsetTop + item.offsetHeight / 2) {
      item.classList.add("animation-right-active");
    }
  });
}

window.addEventListener("scroll", move);
