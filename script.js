const menuIcon = document.getElementById("imglist");
const menuList = document.getElementById("ulnav");
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

const rumah = document.getElementById("rumah");
const isi = document.getElementById("isi");
const hitung = document.getElementById("hitung");
const us = document.getElementById("us");

rumah.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

isi.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

hitung.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

us.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

const jawaban_benar = document.getElementById("jbenar");
const jawaban_salah = document.getElementById("jsalah");
const j13 = document.getElementById("j13");
const j14 = document.getElementById("j14");

const j21 = document.getElementById("j21");
const j22 = document.getElementById("j22");
const j23 = document.getElementById("j23");
const j24 = document.getElementById("j24");

const j31 = document.getElementById("j31");
const j32 = document.getElementById("j32");
const j33 = document.getElementById("j33");
const j34 = document.getElementById("j34");

// soal1
jawaban_benar.addEventListener("click", () => {
  alert("Jawaban anda BENAR!");
});
jawaban_salah.addEventListener("click", () => {
  alert("Jawaban anda SALAH!");
});
j13.addEventListener("click", () => {
  alert("Jawaban anda SALAH!");
});
j14.addEventListener("click", () => {
  alert("Jawaban anda SALAH!");
});
// soal2
j21.addEventListener("click", () => {
  alert("Jawaban anda BENAR!");
});
j22.addEventListener("click", () => {
  alert("Jawaban anda SALAH!");
});
j23.addEventListener("click", () => {
  alert("Jawaban anda SALAH!");
});
j24.addEventListener("click", () => {
  alert("Jawaban anda SALAH!");
});
// Soal3
j31.addEventListener("click", () => {
  alert("Jawaban anda BENAR!");
});
j32.addEventListener("click", () => {
  alert("Jawaban anda SALAH!");
});
j33.addEventListener("click", () => {
  alert("Jawaban anda SALAH!");
});
j34.addEventListener("click", () => {
  alert("Jawaban anda SALAH!");
});
