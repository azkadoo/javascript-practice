document.title = "dulur dulur";
const body = document.body;
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

const defaultText = "Klik saya 1";
btn1.textContent = defaultText;

const textTugas = "jadi pas onmouseout ganti warna nih";
const newText2 = document.createElement("p");
newText2.textContent = textTugas;

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
  const newText1 = document.createElement("p");
  newText1.textContent = "Halo bung! apa kabar";
  body.append(newText1);
}

function ubahText() {
  btn1.textContent = "cie mau nge-klik ya?";
}

function oriText() {
  btn1.textContent = defaultText;
}

//tugas tugasan
function onHover() {
  body.append(newText2);
  newText2.style.background = null;
}

function animasiOut() {
  newText2.style.background = "aqua";
}
