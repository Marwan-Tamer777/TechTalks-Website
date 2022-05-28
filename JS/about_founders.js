let founders = document.querySelectorAll("#founders .founders_list .founder_card");
let leftArrow = document.querySelector("#founders .arrow_left");
let rightArrow = document.querySelector("#founders .arrow_right");
let SHOWNfoundersRANGE = 3;
let shownfoundersIndex = 1;

founders.forEach((o, i) =>
  o.addEventListener("animationend", () =>
    o.classList.remove("moveLeft", "moveRight")
  )
);

function animationInProcess() {
  let state = false;
  founders.forEach((o, i) =>
    o.classList.contains("moveLeft") || o.classList.contains("moveRight")
      ? (state = true)
      : 0
  );
  return state;
}

function updateAnimation(n) {
  shownfoundersIndex += n;
  //console.log("asfasfg", shownfoundersIndex);
  if (animationInProcess() === true) {
    return 0;
  }

  if (
    shownfoundersIndex >
    founders.length - Math.ceil(SHOWNfoundersRANGE / 2) + 1
  ) {
    shownfoundersIndex = 1;
  }
  if (shownfoundersIndex < 1) {
    shownfoundersIndex =
      founders.length - Math.ceil(SHOWNfoundersRANGE / 2) + 1;
  }

  founders.forEach(
    (o, i) =>
      // o.classList.contains("moveLeft") == true ||
      // o.classList.contains("moveRight") == true ? (0) : (
      i > shownfoundersIndex - Math.ceil(SHOWNfoundersRANGE / 2) &&
      i < shownfoundersIndex + Math.ceil(SHOWNfoundersRANGE / 2)
        ? // o.classList.contains("moveLeft") == false &&
          // o.classList.contains("moveRight") == false
          ((o.style.display = "flex"),
          n < 0 ? o.classList.add("moveRight") : o.classList.add("moveLeft"))
        : (o.style.display = "none")
    // )
  );
}

leftArrow.addEventListener("click", () => updateAnimation(1));
rightArrow.addEventListener("click", () => updateAnimation(-1));
