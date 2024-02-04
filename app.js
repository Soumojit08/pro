let img_sec = document.getElementById("image");
let yes = document.querySelector("#btn1");
let no = document.querySelector("#btn2");
let head = document.querySelector("#head");
let buttonSec = document.querySelector(".buttons");
let turn = 0;

no.addEventListener("click", () => {
  if (turn === 0) {
    no.style.padding = `10px 20px`;
    yes.style.padding = `10px 40px`;
    no.innerText = `Think again`;
    img_sec.innerHTML = `<img src="download.jpeg">`;
    turn++;
  } else if (turn === 1) {
    no.style.padding = `10px 10px`;
    yes.style.padding = `10px 50px`;
    no.innerText = `Last Chance`;
    img_sec.innerHTML = `<img src="cute-bear.gif">`;
    turn++;
  } else if (turn === 2) {
    no.style.padding = `5px 5px`;
    yes.style.padding = `20px 60px`;
    no.innerText = `pls`;
    img_sec.innerHTML = `<img src="plss.gif">`;
    turn++;
  } else if (turn === 3) {
    no.style.display = `none`;
    yes.style.padding = `20px 80px`;
    img_sec.innerHTML = `<img src="plss.gif">`;
    turn = 0;
  }
});

yes.addEventListener("click", () => {
  img_sec.innerHTML = `<img src="cute-bears-love.gif">`;
  head.innerText = `Thank You :)`;
  buttonSec.style.display = `none`;
});
