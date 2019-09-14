import data from './data.json'

let matrix = [];

for (let i = 0; i < data.length; i++) {
  let person = [];
  for (let campaign in data[i]) {
    if (campaign != "email") {
      if (data[i][campaign]) {
        person.push(1);
      }
      else {
        person.push(0);
      }
    }
  }
  matrix.push(person);
}

console.log(matrix);