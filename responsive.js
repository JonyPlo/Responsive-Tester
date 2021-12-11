const resBtns = document.querySelectorAll(".resButton");
const view = document.querySelector(".responsiveView");
const input = document.querySelector(".input");
const btnSearch = document.querySelector(".btnSearch");
const svg = document.querySelector(".svg");

btnSearch.addEventListener("click", () => {
  const page = input.value;
  if (page === "") {
    Swal.fire({
      icon: "error",
      title: "Invalid URL",
      text: "Please enter a valid URL",
    });
    return;
  } else {
    svg.className = "svg animated fadeOut";
    setTimeout(() => {
      svg.style.display = "none";
    }, 1000);
    view.style.display = "flex";
    view.setAttribute("src", page);
  }
});

resBtns.forEach((button) => {
  button.addEventListener("click", () => {
    // view.style.width = `${button.value}px`;
    view.setAttribute("style", `min-height: ${button.id}px`);
    view.style.display = "flex";
    view.style.width = `${button.value}px`;
    button.classList.add("active");
    removeActive(button, resBtns);
  });
});

const removeActive = (el, array) => {
  array.forEach((element) => {
    if (el !== element) {
      element.classList.remove("active");
    }
  });
};
