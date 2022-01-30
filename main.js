const generateHexColor = () => {
  const colorsTotal = Math.pow(256, 3);
  const colorInt = Math.floor(Math.random() * colorsTotal);
  let colorHexString = colorInt.toString(16);
  if (colorHexString.length === 5) {
    colorHexString = "0" + colorHexString;
  }
  return colorHexString;
};

const switchBgColor = () => {
  let bgHexColor = generateHexColor();
  document.body.style.backgroundColor = "#" + bgHexColor;
  document.getElementById("color-string").innerHTML = "Color: #" + bgHexColor;
};

switchBgColor();
