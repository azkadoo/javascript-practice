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

//------------------ array ------------------

const arraySaya = ["🥑", "🍑", "🍐", "🍉", "🍊"];
console.log(arraySaya);
const semangka = arraySaya.includes("🍉");

if (semangka) {
  const posisiSemangka = arraySaya.indexOf("🍉");
  const indexBefore = posisiSemangka - 1;
  const indexAfter = posisiSemangka + 1;
  const buahBefore = arraySaya[indexBefore];
  const buahAfter = arraySaya[indexAfter];
  console.log(`buah sebelum semangka adalah ${buahBefore}`);
  console.log(`buah setelah semangka adalah ${buahAfter}`);
  const buahAwal = arraySaya.shift();
  console.log(`buah awal adalah ${buahAwal}`);
  const buahAkhir = arraySaya.pop();
  console.log(`buah akhir adalah ${buahAkhir}`);
} else {
  console.log("saya tidak tahu posisi semangkanya");
}

//array SHALLOW COPY / DEEP COPY

const arraySaya2 = [
  "🍌",
  10,
  {
    tomato: function () {
      console.log("ini tomat");
    },
  },
  ["eat", "food"],
];

const newArraySaya = [...arraySaya2]; //array KW atau copyan
// newArraySaya = arraySaya2.slice(); //array KW atau copyan
// newArraySaya = Array.from(arraySaya2); //array KW atau copyan
// newArraySaya = JSON.parse(JSON.stringify(arraySaya2)); //array KW atau copyan
// newArraySaya[0] = "❌";

arraySaya2[2].tomato();

//------------------ array mapping ------------------
const datas = [
  {
    name: "anya",
    role: "vocalist",
    age: "17",
  },
  {
    name: "tengku",
    role: "lead guitar",
    age: "23",
  },
  {
    name: "azka",
    role: "rythm",
    age: "21",
  },
  {
    name: "adit",
    role: "bassist",
    age: "22",
  },
  {
    name: "samuel",
    role: "drummer",
    age: "21",
  },
];

datas.map((values, index) => {
  console.log(values.name, values.role);
});
