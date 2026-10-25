arrBlock = document.querySelectorAll(".reveal");
console.log(arrBlock);
window.addEventListener("scroll", checkReveal, { passive: true });

function checkReveal() {
  console.log("scroll");
  for (var i = 0; i < arrBlock.length; i++) {
    var rect = arrBlock[i].getBoundingClientRect();
    console.log(i, rect.top, window.innerHeight, rect.bottom);
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      arrBlock[i].classList.add("reveal_active");
      console.log("add");
    }
  }
}

checkReveal();
