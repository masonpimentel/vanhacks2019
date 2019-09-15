import data from './data.json'

var users = []
var campaigns = []
export let matrix = [];

function fetchUsers () {
  for (let i = 0; i < data.length; i++) {
    users[i] = data[i].email;
  }
}

function fetchCampaigns () {
  let keys = Object.keys(data[0])
  for (let i = 0; i < keys.length - 1; i++) {
    campaigns[i] = keys[i + 1]
  }
}

function fetchMatrix () {
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
}

fetchUsers()
fetchCampaigns()
fetchMatrix()
console.log(users)
console.log(campaigns)
console.log(matrix)