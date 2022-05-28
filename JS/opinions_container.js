let opinions = document.querySelectorAll("#opinions_container .opinions > div");
let leftArrow = document.querySelector("#opinions_container .arrow_left");
let rightArrow = document.querySelector("#opinions_container .arrow_right");
let SHOWNOPINIONSRANGE = 3;
let shownOpinionsIndex = 1;

opinions.forEach((o, i) => o.addEventListener("animationend",()=>(
    o.classList.remove("moveLeft","moveRight")
)))


function animationInProcess(){
  let state= false;
  opinions.forEach((o, i) =>(
      o.classList.contains("moveLeft") ||o.classList.contains("moveRight") ?(state = true):(0)
    )
  )
return state;
}

function updateAnimation(n){
    shownOpinionsIndex += n;
    //console.log("asfasfg", shownOpinionsIndex);
    if(animationInProcess() === true){
      return 0;
    }
    
    if (shownOpinionsIndex > opinions.length - Math.ceil(SHOWNOPINIONSRANGE / 2)+1) {
      shownOpinionsIndex = 1;
    }
    if (shownOpinionsIndex < 1) {
      shownOpinionsIndex = opinions.length - Math.ceil(SHOWNOPINIONSRANGE / 2)+1;
    }
    
    opinions.forEach((o, i) =>
      // o.classList.contains("moveLeft") == true ||
      // o.classList.contains("moveRight") == true ? (0) : (
      i > shownOpinionsIndex - Math.ceil(SHOWNOPINIONSRANGE / 2) &&
      i < shownOpinionsIndex + Math.ceil(SHOWNOPINIONSRANGE / 2) 
      // o.classList.contains("moveLeft") == false &&
      // o.classList.contains("moveRight") == false
        ? ((o.style.display = "block"),
          n < 0 ? o.classList.add("moveRight") : o.classList.add("moveLeft"))
        : (o.style.display = "none")
      // )
    )
}

leftArrow.addEventListener("click",()=>(updateAnimation(1)))
rightArrow.addEventListener("click", () => updateAnimation(-1));