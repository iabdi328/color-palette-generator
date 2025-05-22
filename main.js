const generateBTN = document.querySelector(".generate-btn");
const PaletteContainer = document.querySelector(".paletee-container");


generatePalette();

generateBTN.addEventListener("click", generatePalette);

function generatePalette() {
  const colors = [];

  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColor());
  }

  updatePaletterDispaly(colors);
}

function updatePaletterDispaly(colors) {
  const colorBoxes = document.querySelectorAll(".color-box");

  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    const colorDiv = box.querySelector(".color");
    const hexValue = box.querySelector(".hex-value");

    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color;
   
  });
}

function generateRandomColor() {
  
  const letters = "0123456789ABCDEF"; 
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
