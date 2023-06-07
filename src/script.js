const kitty = document.querySelector("#kitty");
let clicks = 0;

kitty.addEventListener("click", (event) => {
  kitty.style.transform = "scale(0.8)";
  setTimeout (() => {
    kitty.style.transform = "scale(1)";
  }, 100)
  let number = document.createElement("span");
  number.className = "number";
  number.style.top = event.clientY + "px";
  number.style.left = event.clientX + "px";
  number.innerHTML = "+1";
  document.querySelector(".container").appendChild(number);
  clicks = clicks + 1;
  setTimeout(()=>{
    number.remove();
  }, 2100);
  document.querySelector("#score").textContent = `${clicks} meaws`;
  if (clicks == 50){
    alert("Lasă-te");
  }

  if (clicks == 10){
    alert("Meaw?");
  }

  if (clicks == 100){
    alert("AHhahahaha, naiv");
  }

  if (clicks == 150){
    alert("Bine, eu am plecat");
  }

  if (clicks == 167){
    kitty.style.filter = "brightness(0.2)"
  }

  if (clicks == 200){
    alert("CE AI FĂCUT!");
  }

  if (clicks == 270){
    alert("Pentru ce tu faci asta?")
  }

  if (clicks == 280){
    kitty.style.filter = "brightness(1)"
  }

  if (clicks == 300){
    alert("Mersi, lasă așa")
  }

  if (clicks == 380){
    kitty.style.opacity = "0";
  }

  if (clicks == 400){
    alert("Pune la loc! Eu serios, asta nu e amuzant");
  }

  if (clicks == 420){
    document.querySelector("#hiddenOne").style.display = "block";
  }

  if (clicks == 450){
    alert("Mă ții de prost? Nici măcar animația nu lucrează!");
  }

  if (clicks == 452){
    alert ("Poate tu ești prost că vorbești cu un alert window? \uD83D\uDE0A")
  }

  if (clicks == 500){
    kitty.style.opacity = "1";
    document.querySelector("#hiddenOne").style.display = "none";
  }

  if (clicks == 600){
    alert("Ladna, cam aici, poti să pleci împăcat că mai departe n-am pus nimic");
  }

  if (clicks == 1000){
    alert("Brat...")
  }

  if (clicks == 1500){
    alert("Aici eu serios gata");
  }

  if(clicks == 5000){
    alert("Salut Iulian cu mult timp liber")
  }

  if (clicks == 8000){
    alert("Idiot.")
  }

  if (clicks == 9999){
    location.reload();
    alert("Salut Tudor)))")
  }
});