import data from './data.json'

var users = []
var campaigns = []

function fetchUsers () {
  for (let i = 0; i < data.length; i++) {
    users[i] = data[i].email;
  }
}

function fetchCampaigns () {
  let keys = Object.keys(data[0])
  console.log(keys)
  for (let i = 0; i < keys.length - 1; i++) {
    campaigns[i] = keys[i + 1]
  }
}

fetchUsers()
fetchCampaigns()
console.log(users)
console.log(campaigns)
console.log(data);

let matrix = [];

for (let i = 0; i < data.length; i++) {
  let mPerson = [];
  for (let j = 0; j < data[i]; j++) {

    mPerson.push()
  }
  console.log(data[i]);
}

console.log(matrix);