let arrFontControls = document.querySelectorAll(".font-size");
let book = document.querySelector(".book");

arrFontControls.forEach((control) => {
  control.addEventListener("click", (event) => {
    event.preventDefault();

    arrFontControls.forEach((elem) =>
      elem.classList.remove("font-size_active"),
    );

    control.classList.add("font-size_active");
    book.classList.remove("book_fs-big", "book_fs-small");

    if (control.dataset.size) {
      book.classList.add(`book_fs-${control.dataset.size}`);
    }
  });
});
