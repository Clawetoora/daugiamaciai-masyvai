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

console.log(`------3 uzduotis--------`);

let masyvas2 = [];
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < 10; i++) {
  masyvas2[i] = [];
  let innerLength = 2 + Math.round(Math.random() * 18);
  for (let y = 0; y < innerLength; y++) {
    element = abc[Math.floor(Math.random() * 26)];
    masyvas2[i][y] = element;
  }
}

for (let i = 0; i < masyvas2.length; i++) {
  masyvas2[i].sort();
}
console.log(masyvas2);

// let xxx = ["H", "P", "X", "B"];
// xxx.sort();
// console.log(xxx);

// for (let i = 0; i < masyvas2.length; i++) {
//   for (let y = 0; y < masyvas2[i].length; y++) {
//     for (let z = y + 1; z < masyvas2[i].length; z++) {
//       if (masyvas2[i][y] > masyvas2[i][z]) {
//         temp = masyvas[i][y];
//         masyvas2[i][y] = masyvas2[i][z];
//         masyvas2[i][z] = temp;
//       }
//     }
//   }
// }
// console.log(masyvas2);

console.log(`--------4 uzduotis------`);

for (let i = 0; i < masyvas2.length; i++) {
  for (let j = i + 1; j < masyvas2.length; j++) {
    if (masyvas2[i].length > masyvas2[j].length) {
      temp = masyvas2[i];
      masyvas2[i] = masyvas2[j];
      masyvas2[j] = temp;
    }
    if (masyvas2[j].indexOf("K") !== -1 && masyvas2[i].indexOf("K") == -1) {
      temp = masyvas2[i];
      masyvas2[i] = masyvas2[j];
      masyvas2[j] = temp;
    }
  }
}

console.log(masyvas2);

console.log(`------5 uzduotis ------`);

let kazkoks = [];

for (let i = 0; i < 30; i++) {
  kazkoks[i] = {
    user_id: Math.round(Math.random() * (1000000 - 1) + 1),
    place_in_row: Math.round(Math.random() * 100),
  };
}
console.log(kazkoks);

console.log(`------6 uzduotis ------`);
console.log(`------A------`);

console.log(kazkoks.sort((a, b) => a.user_id - b.user_id));

console.log(`------B------`);

console.log(kazkoks.sort((a, b) => b.place_in_row - a.place_in_row));

console.log(`--------7 uzduotis--------`);

let lotyniskos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiijklmnopqrstuvwxyz";

for (let i = 0; i < kazkoks.length; i++) {
  namelength = Math.round(Math.random() * (15 - 5) + 5);
  lastnamelength = Math.round(Math.random() * (15 - 5) + 5);

  namestring = "";
  lastnamestring = "";

  for (let y = 0; y < namelength; y++) {
    namestring += lotyniskos[Math.round(Math.random() * 52)];
  }
  for (let x = 0; x < lastnamelength; x++) {
    lastnamestring += lotyniskos[Math.round(Math.random() * 52)];
  }

  names = { name: namestring, surname: lastnamestring };
  Object.assign(kazkoks[i], names);
}

console.log(kazkoks);
