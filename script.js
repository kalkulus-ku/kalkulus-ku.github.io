const badan = document.getElementById("badan");
const menuIcon = document.getElementById("imglist");
const menuList = document.getElementById("ulnav");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

const jbenarcuy = document.getElementById("jbenarcuy");
const jbox_benar = document.getElementById("jboxbenar");
const benar_jbox = document.getElementById("benar-jbox");

const jsalahcuy = document.getElementById("jsalahcuy");
const jbox_salah = document.getElementById("jboxsalah");
const salah_jbox = document.getElementById("salah-jbox");

jbenarcuy.addEventListener("click", () => {
  jbox_benar.classList.toggle("benar-jbox");
});
jsalahcuy.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
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
  jbox_benar.classList.toggle("benar-jbox");
});
jawaban_salah.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
j13.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
j14.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
// soal2
j21.addEventListener("click", () => {
  jbox_benar.classList.toggle("benar-jbox");
});
j22.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
j23.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
j24.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
// Soal3
j31.addEventListener("click", () => {
  jbox_benar.classList.toggle("benar-jbox");
});
j32.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
j33.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
j34.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
