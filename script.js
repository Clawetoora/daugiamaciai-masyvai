console.log(`----Pirma uzduotis----`);

let masyvas = [];

for (let i = 0; i < 10; i++) {
  masyvas[i] = [];
  for (let j = 0; j < 5; j++) {
    element = Math.round(Math.random() * (25 - 5) + 5);
    masyvas[i][j] = element;
  }
}

console.log(masyvas);

console.log(`----Antra uzduotis----`);

console.log(`--------A-------`);
let counter = 0;
for (let i = 0; i < masyvas.length; i++) {
  for (let j = 0; j < masyvas[i].length; j++) {
    if (masyvas[i][j] > 10) {
      counter++;
    }
  }
}

console.log(counter);
console.log(`--------B-------`);
let biggest = 0;

for (let i = 0; i < masyvas.length; i++) {
  for (let j = 0; j < masyvas[i].length; j++) {
    if (masyvas[i][j] > biggest) {
      biggest = masyvas[i][j];
    }
  }
}
console.log(biggest);

console.log(`--------C-------`);

let sumos = [];
for (let j = 0; j < masyvas.length; j++) {
  sumos.push(0);
}

for (let i = 0; i < masyvas[0].length; i++) {
  // 5x
  for (let j = 0; j < masyvas.length; j++) {
    // 10x
    sumos[j] += masyvas[j][i];
  }
}

console.log(sumos);

console.log(`--------D--------`);
for (let i = 0; i < masyvas.length; i++) {
  for (let j = 0; j < 2; j++) {
    element = Math.round(Math.random() * (25 - 5) + 5);

    masyvas[i].push(element);
  }
}
console.log(masyvas);

console.log(`--------E--------`);

let naujasMasyvas = [];
let sum = [];
for (let i = 0; i < masyvas.length; i++) {
  sum.push(masyvas[i].reduce((a, b) => a + b, 0));
}
console.log(sum);

let naujasMasyvas2 = [];
let sum2 = [];
for (let i = 0; i < masyvas.length; i++) {
  skaicius = 0;
  for (let j = 0; j < masyvas[i].length; j++) {
    skaicius = skaicius + masyvas[i][j];
  }
  sum2.push(skaicius);
  skaicius = 0;
}
console.log(sum2);
