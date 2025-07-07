const pet = document.getElementById("pet");

// Aplica imagem e estilo com base na config.js
pet.style.width = PET_WIDTH + "px";
pet.style.height = PET_HEIGHT + "px";
pet.style.backgroundImage = `url(${PET_IMG})`;
pet.style.backgroundSize = "cover";

let pos = 0;
let direction = 1;

function movePet() {
  pos += direction;
  if (pos > window.innerWidth - PET_WIDTH || pos < 0) {
    direction *= -1;
    pet.style.transform = direction === 1 ? "scaleX(1)" : "scaleX(-1)";
  }
  pet.style.left = pos + "px";
  requestAnimationFrame(movePet);
}

movePet();
