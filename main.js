document.title = "dulur dulur";
const body = document.body;
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

const defaultText = "Klik saya 1";
btn1.textContent = defaultText;

btn1.style.border = "none";
btn1.style.padding = "8px";
btn1.style.fontSize = "24px";
btn1.style.background = "tomato";

//style btn2
btn2.style.border = "none";
btn2.style.padding = "8px";
btn2.style.fontSize = "24px";
btn2.style.background = "tomato";

function clickButton() {
  btn1.style.background = "aqua";
  const newText = document.createElement("p");
  newText.textContent = "Halo bung! apa kabar";
  body.append(newText);
}

function ubahText() {
  btn1.textContent = "cie mau nge-klik ya?";
}

function oriText() {
  btn1.textContent = defaultText;
}

function onHover() {
  const newText = document.createElement("p");
  newText.textContent = "jadi pas onmouseout ganti warna nih";
  body.append(newText);
}

function animasiOut() {}
