
// 8eabca
const badan = document.getElementById("badan");
const menuIcon = document.getElementById("imglist");
const menuList = document.getElementById("ulnav");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

const jbenarcuy = document.getElementById("jbenarcuy");
const jbox_benar = document.getElementById("jboxbenar");
// const benar_jbox = document.getElementById("benar-jbox");

const jsalahcuy = document.getElementById("jsalahcuy");
const jbox_salah = document.getElementById("jboxsalah");
// const salah_jbox = document.getElementById("salah-jbox");

jbenarcuy.addEventListener("click", () => {
  jbox_benar.classList.toggle("benar-jbox");
});
jsalahcuy.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});

// const rumah = document.getElementById("rumah");
// const isi = document.getElementById("isi");
// const hitung = document.getElementById("hitung");
// const us = document.getElementById("us");

// rumah.addEventListener("click", () => {
//   menuList.classList.toggle("hidden");
// });

// isi.addEventListener("click", () => {
//   menuList.classList.toggle("hidden");
// });

// hitung.addEventListener("click", () => {
//   menuList.classList.toggle("hidden");
// });

// us.addEventListener("click", () => {
//   menuList.classList.toggle("hidden");
// });

const j11 = document.getElementById("j11");
const j12 = document.getElementById("j12");
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
j11.addEventListener("click", () => {
  jbox_benar.classList.toggle("benar-jbox");
});
j12.addEventListener("click", () => {
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
  jbox_salah.classList.toggle("salah-jbox");
});
j22.addEventListener("click", () => {
  jbox_benar.classList.toggle("benar-jbox");
});
j23.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
j24.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
// Soal3
j31.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
j32.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
j33.addEventListener("click", () => {
  jbox_salah.classList.toggle("salah-jbox");
});
j34.addEventListener("click", () => {
  jbox_benar.classList.toggle("benar-jbox");
});


function calculateDefiniteIntegral() {
  try {
    const func = document.getElementById('function').value;
    const a = parseFloat(document.getElementById('lowerBound').value);
    const b = parseFloat(document.getElementById('upperBound').value);

    if (!func || isNaN(a) || isNaN(b)) {
      throw new Error('Mohon isi semua field dengan benar');
    }

    const n = 1000; // Jumlah subinterval
    const h = (b - a) / n;
    let sum = 0;

    const f = math.compile(func);

    for (let i = 1; i < n; i++) {
      const x = a + i * h;
      sum += f.evaluate({ x });
    }

    const result = (h / 2) * (f.evaluate({ x: a }) + 2 * sum + f.evaluate({ x: b }));
    document.getElementById('definiteResult').innerHTML = `
      <h3>Hasil:</h3>
      <p>∫<sub>${a}</sub><sup>${b}</sup> ${func} dx = ${result.toFixed(6)}</p>
    `;
  } catch (error) {
    document.getElementById('definiteResult').innerHTML = `
      <p style="color: red;">Error: ${error.message}</p>
    `;
  }
}

function calculateIntegral() {
  const input = document.getElementById('function').value;
  let result = '';
  let error = '';

  try {
      // Menghapus spasi dan memisahkan terms
      const terms = input.replace(/\s+/g, '').split(/([+-])/g).filter(term => term !== '');
      
      let integralTerms = [];
      let currentSign = '+';
      
      for (let i = 0; i < terms.length; i++) {
          let term = terms[i];
          
          if (term === '+' || term === '-') {
              currentSign = term;
              continue;
          }

          // Menangani kasus khusus
          if (term === 'x') {
              integralTerms.push(`${currentSign === '+' ? '' : '-'}\\frac{x^2}{2}`);
              continue;
          }

          // Mencari koefisien dan pangkat
          const matchExp = term.match(/^(\d*)?x(\^(\d+))?$/);
          const matchConst = term.match(/^(\d+)$/);

          if (matchExp) {
              let coef = matchExp[1] || '1';
              let exp = matchExp[3] ? parseInt(matchExp[3]) : 1;
              
              coef = parseInt(coef);
              if (currentSign === '-') coef = -coef;
              
              const newExp = exp + 1;
              const newCoef = coef / newExp;
              
              integralTerms.push(`${newCoef === 1 ? '' : newCoef === -1 ? '-' : newCoef}x^${newExp}`);
          } else if (matchConst) {
              let coef = parseInt(matchConst[1]);
              if (currentSign === '-') coef = -coef;
              integralTerms.push(`${coef}x`);
          } else {
              throw new Error('Format input tidak valid');
          }
      }

      result = `\\int ${input} \\, dx = ${integralTerms.join(' + ')} + C`;
  } catch (e) {
      error = e.message;
      result = 'Error: ' + error;
  }

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
      <p>Input: \( ${input} \)</p>
      <p>Hasil: \( ${result} \)</p>
  `;
  
  // Render ekspresi matematika
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultDiv]);
}







//dsdsdsdsdsdsds
function updateInputFields() {
  const functionType = document.getElementById('functionType').value;
  const helpText = document.getElementById('helpText');
  const functionInput = document.getElementById('functionInput');

  switch(functionType) {
      case 'polynomial':
          helpText.textContent = 'Format: ax^n + bx^m + c (Contoh: 2x^2 + 3x + 1)';
          functionInput.placeholder = '2x^2 + 3x + 1';
          break;
      case 'trigonometric':
          helpText.textContent = 'Format: sin(x), cos(x), atau tan(x)';
          functionInput.placeholder = 'sin(x)';
          break;
      case 'exponential':
          helpText.textContent = 'Format: e^x atau a^x';
          functionInput.placeholder = 'e^x';
          break;
      case 'logarithmic':
          helpText.textContent = 'Format: ln(x) atau log(x)';
          functionInput.placeholder = 'ln(x)';
          break;
  }
}

function cekKonvergensi() {
  const a = parseFloat(document.getElementById('a').value);
  const r = parseFloat(document.getElementById('r').value);
  const output = document.getElementById('output');
  const penjelasan = document.getElementById('penyelesaian');

  let hasil = '';
  let langkah = '';

  if (Math.abs(r) < 1) {
    const jumlahTakHingga = a / (1 - r);
    hasil = `Deret <strong>konvergen</strong> karena |r| < 1. Jumlah tak hingga (S∞) = ${jumlahTakHingga};`;
    langkah = `Langkah penyelesaian:<br>
      1. Cek rasio: |r| = ${Math.abs(r)} < 1, maka deret konvergen.<br>
      2. Gunakan rumus deret tak hingga: <strong>S∞ = a / (1 - r)</strong><br>
      3. Substitusi nilai a = ${a}, r = ${r}<br>
      4. Hasil: S∞ = ${a} / (1 - ${r}) = ${jumlahTakHingga}`;
  } else {
    hasil = `Deret <strong>divergen</strong> karena |r| ≥ 1. Tidak memiliki jumlah hingga.`;
    langkah = `Langkah penyelesaian:<br>
      1. Cek rasio: |r| = ${Math.abs(r)} ≥ 1, maka deret divergen.<br>
      2. Karena tidak memenuhi syarat |r| < 1, maka jumlah tak hingga tidak dapat dihitung.`;
  }

  output.innerHTML = hasil;
  penjelasan.innerHTML = langkah;
  output.style.display = 'block';
  penjelasan.style.display = 'block';


  return {
      result: result.join(' + '),
      steps: steps
  };
}

function integrateTrigonometric(input) {
  let result = '';
  let steps = [];

  if (input.startsWith('sin')) {
      result = '-cos(x)';
      steps.push('∫sin(x)dx = -cos(x)');
  } else if (input.startsWith('cos')) {
      result = 'sin(x)';
      steps.push('∫cos(x)dx = sin(x)');
  } else if (input.startsWith('tan')) {
      result = '-ln|cos(x)|';
      steps.push('∫tan(x)dx = -ln|cos(x)|');
  } else {
      throw new Error('Fungsi trigonometri tidak valid');
  }

  return {
      result: result,
      steps: steps
  };
}

function integrateExponential(input) {
  let result = '';
  let steps = [];

  if (input === 'e^x') {
      result = 'e^x';
      steps.push('∫e^xdx = e^x');
  } else if (input.includes('^x')) {
      const base = parseFloat(input.split('^')[0]);
      if (isNaN(base)) throw new Error('Basis tidak valid');
      result = `${base}^x/ln(${base})`;
      steps.push(`∫${base}^xdx = ${base}^x/ln(${base})`);
  } else {
      throw new Error('Fungsi eksponensial tidak valid');
  }

  return {
      result: result,
      steps: steps
  };
}

function integrateLogarithmic(input) {
  let result = '';
  let steps = [];

  if (input === 'ln(x)') {
      result = 'x ln(x) - x';
      steps.push('∫ln(x)dx = x ln(x) - x');
  } else if (input.startsWith('log')) {
      result = 'x log(x) - x/ln(10)';
      steps.push('∫log(x)dx = x log(x) - x/ln(10)');
  } else {
      throw new Error('Fungsi logaritma tidak valid');
  }

  return {
      result: result,
      steps: steps
  };
}

// Initialize
updateInputFields();







































// Fungsi utama kalkulator anuitas
// Fungsi utama kalkulator anuitas dengan tabel simulasi angsuran
function hitungAnuitas() {
  const tipe = document.getElementById('inputType').value;
  const output = document.getElementById('anuitasOutput');
  const penjelasan = document.getElementById('anuitasPenyelesaian');
  const tableDiv = document.getElementById('anuitasTable');
  output.innerHTML = '';
  penjelasan.innerHTML = '';
  tableDiv.innerHTML = '';

  // Ambil input
  const monthlyInstallment = parseFloat(document.getElementById('monthlyInstallment')?.value);
  const monthlyInterestRate = parseFloat(document.getElementById('monthlyInterestRate')?.value);
  const loanTerm = parseInt(document.getElementById('loanTerm')?.value);
  const maxLoanAmount = parseFloat(document.getElementById('maxLoanAmount')?.value);

  // Validasi input
  if (isNaN(monthlyInterestRate) || isNaN(loanTerm) || loanTerm <= 0 || monthlyInterestRate < 0) {
    output.innerHTML = "Input tidak valid. Pastikan bunga dan lama cicilan diisi dengan benar.";
    return;
  }

  let P, A;
  if (tipe === "maxLoan") {
    if (isNaN(monthlyInstallment) || monthlyInstallment <= 0) {
      output.innerHTML = "Masukkan cicilan bulanan yang valid.";
      return;
    }
    // Rumus: P = A * [ (1 + r)^n - 1 ] / [ r * (1 + r)^n ]
    const r = monthlyInterestRate;
    const n = loanTerm;
    const A_ = monthlyInstallment;
    const pow = Math.pow(1 + r, n);
    P = A_ * (pow - 1) / (r * pow);
    A = A_;
    output.innerHTML = `
      <b>Jumlah Pinjaman Maksimal:</b> Rp${P.toLocaleString()}<br>
      <b>Total Cicilan:</b> Rp${(A * n).toLocaleString()}<br>
      <b>Total Bunga Dibayar:</b> Rp${(A * n - P).toLocaleString()}
    `;
    penjelasan.innerHTML = `
      <b>Langkah Perhitungan:</b><br>
      1. Rumus pinjaman: <i>P = A × [(1 + r)<sup>n</sup> - 1] / [r × (1 + r)<sup>n</sup>]</i><br>
      2. Substitusi: A = ${A}, r = ${r}, n = ${n}<br>
      3. Hasil: P = ${A} × (${pow.toFixed(4)} - 1) / (${r} × ${pow.toFixed(4)}) = Rp${P.toLocaleString()}
    `;
  } else if (tipe === "installment") {
    P = parseFloat(document.getElementById('maxLoanAmount')?.value);
    if (isNaN(P) || P <= 0) {
      output.innerHTML = "Masukkan jumlah pinjaman yang valid.";
      return;
    }
    const r = monthlyInterestRate;
    const n = loanTerm;
    const pow = Math.pow(1 + r, n);
    A = P * (r * pow) / (pow - 1);
    output.innerHTML = `
      <b>Cicilan Bulanan:</b> Rp${A.toLocaleString()}<br>
      <b>Total Cicilan:</b> Rp${(A * n).toLocaleString()}<br>
      <b>Total Bunga Dibayar:</b> Rp${(A * n - P).toLocaleString()}
    `;
    penjelasan.innerHTML = `
      <b>Langkah Perhitungan:</b><br>
      1. Rumus cicilan: <i>A = P × [r × (1 + r)<sup>n</sup>] / [(1 + r)<sup>n</sup> - 1]</i><br>
      2. Substitusi: P = ${P}, r = ${r}, n = ${n}<br>
      3. Hasil: A = ${P} × (${r} × ${pow.toFixed(4)}) / (${pow.toFixed(4)} - 1) = Rp${A.toLocaleString()}
    `;
  } else {
    return;
  }

  // Tabel simulasi angsuran
  let sisaAwal = P;
  let html = `
    <table border="1" cellpadding="5" cellspacing="0"
      style="font-size: 1.2vw; line-height: 1.5vw; font-family: 'Outfit', 'sans'; border-collapse: collapse; margin-top:1vw;">
      <thead>
        <tr>
          <th>Bulan</th>
          <th>Sisa Pinjaman Awal</th>
          <th>Bunga</th>
          <th>Pokok Dibayar</th>
          <th>Cicilan</th>
          <th>Sisa Pinjaman Akhir</th>
        </tr>
      </thead>
      <tbody>
  `;
  let r = monthlyInterestRate;
  let n = loanTerm;
  for (let i = 1; i <= n; i++) {
    let bunga = sisaAwal * r;
    let pokok = A - bunga;
    let sisaAkhir = sisaAwal - pokok;
    html += `
      <tr>
        <td>${i}</td>
        <td>Rp${Math.round(sisaAwal).toLocaleString()}</td>
        <td>Rp${Math.round(bunga).toLocaleString()}</td>
        <td>Rp${Math.round(pokok).toLocaleString()}</td>
        <td>Rp${Math.round(A).toLocaleString()}</td>
        <td>Rp${Math.max(0, Math.round(sisaAkhir)).toLocaleString()}</td>
      </tr>
    `;
    sisaAwal = sisaAkhir;
    if (sisaAwal < 1e-2) sisaAwal = 0; // biar tidak minus di akhir
  }
  html += `</tbody></table>`;
  tableDiv.innerHTML = html;
}