const select = document.getElementById("theme");
const html = document.querySelector("html");
const paragraph = document.getElementById("text");
const image = document.getElementById("image1")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const image4 = document.getElementById("image4")
const image5 = document.getElementById("image5")




select.addEventListener("change", setTheme);

function setTheme() {
  if(select.value === "dark") {
    html.style.backgroundColor = "black";
    html.style.color = "white";
    paragraph.style.color = "white";
    image.src = "https://vip-go.shutterstock.com/blog/wp-content/uploads/sites/5/2019/05/Color-Scheme-Types-Definitions_Color-Wheel.jpg";

  } 
  else if (select.value === "light") {
    html.style.backgroundColor = "white";
    html.style.color = "black";
    paragraph.style.color = "black";
    image2.src = "https://www.maketecheasier.com/assets/uploads/2018/11/Featured-Android-Dark-Theme-Horror.jpg";
  }
  
  else if (select.value === "pastel") {
    html.style.backgroundColor = "d7e3fc";
    html.style.color = "black";
    paragraph.style.color = "ffb3c6";
    image3.src =

  }

else if (select.value === "neon") {
    html.style.backgroundColor = "FFFE37";
    html.style.color = "black";
    paragraph.style.color = "FF005C";
    image4.src =
  }

else if (select.value === "greyish") {
    html.style.backgroundColor = "808080";
    html.style.color = "black";
    paragraph.style.color = "black";
    image5.src =
  }





}