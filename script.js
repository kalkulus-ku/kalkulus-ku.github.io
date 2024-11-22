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

function calculateIntegral() {
  const functionType = document.getElementById('functionType').value;
  const functionInput = document.getElementById('functionInput').value.trim();
  const formulaDisplay = document.getElementById('formulaDisplay');
  const result = document.getElementById('result');
  const steps = document.getElementById('steps');

  try {
      formulaDisplay.innerHTML = `∫(${functionInput})dx`;
      let integralResult = '';
      let integrationSteps = [];

      switch(functionType) {
          case 'polynomial':
              const polyResult = integratePolynomial(functionInput);
              integralResult = polyResult.result;
              integrationSteps = polyResult.steps;
              break;
          case 'trigonometric':
              const trigResult = integrateTrigonometric(functionInput);
              integralResult = trigResult.result;
              integrationSteps = trigResult.steps;
              break;
          case 'exponential':
              const expResult = integrateExponential(functionInput);
              integralResult = expResult.result;
              integrationSteps = expResult.steps;
              break;
          case 'logarithmic':
              const logResult = integrateLogarithmic(functionInput);
              integralResult = logResult.result;
              integrationSteps = logResult.steps;
              break;
      }

      result.innerHTML = integralResult + ' + C';
      steps.innerHTML = integrationSteps.join('<br>');

  } catch (error) {
      result.innerHTML = `<div class="error">Error: ${error.message}</div>`;
      steps.innerHTML = '';
  }
}

function integratePolynomial(input) {
  const terms = input.split(/([+-])/g).filter(term => term.trim());
  let result = [];
  let steps = [];
  
  for (let i = 0; i < terms.length; i++) {
      let term = terms[i].trim();
      if (term === '+' || term === '-') continue;
      
      if (i > 0 && terms[i-1] === '-') {
          term = '-' + term;
      }

      if (term.includes('x^')) {
          const [coef, power] = term.split('x^');
          const newPower = parseInt(power) + 1;
          const newCoef = parseFloat(coef || 1) / newPower;
          result.push(`${newCoef}x^${newPower}`);
          steps.push(`∫${term}dx = ${newCoef}x^${newPower}`);
      } else if (term.includes('x')) {
          const coef = parseFloat(term.replace('x', '') || 1);
          const newCoef = coef / 2;
          result.push(`${newCoef}x^2`);
          steps.push(`∫${term}dx = ${newCoef}x^2`);
      } else {
          const newTerm = `${parseFloat(term)}x`;
          result.push(newTerm);
          steps.push(`∫${term}dx = ${newTerm}`);
      }
  }

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