import fs from 'fs';

function Order(ob) {
  return Object.keys(ob)
    .sort() // Ordena alfabéticamente
    .reduce((accumulator, key) => {
      accumulator[key] = ob[key];
      return accumulator;
    }, {});
}

export default function comparar(ob1, ob2) {
  const res = {};
  const Allob = {};
  for (let i in ob1) {
    Allob[i] = 1;
  }
  for (let j in ob2) {
    Allob[j] = 1;
  }
  const Orob = Order(Allob)
  for (let x in Orob) {
    if (x in ob1) {
      if (x in ob2) {
        if (ob1[x] === ob2[x]) {
          res[x] = ob1[x];
        } else {
          res["- " + x] = ob1[x];
          res["+ " + x] = ob2[x];
        }
      } else {
        res["- " + x] = ob1[x];
      }
    } else {
      if (x in ob2) {
        res["+ " + x] = ob2[x];
      }
    }
  }
  return res
}