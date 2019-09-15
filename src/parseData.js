import data from './data.json'

<<<<<<< HEAD
export function fetchUsers () {
  var users = [];
=======
var users = []
var campaigns = []
export let matrix = [];
>>>>>>> master

  for (let i = 0; i < data.length; i++) {
    users[i] = data[i].email;
  }
  return users
}

export function fetchCampaigns () {
  var campaigns = [];

  let keys = Object.keys(data[0])
  for (let i = 0; i < keys.length - 1; i++) {
    campaigns[i] = keys[i + 1]
  }
  return campaigns
}

export function fetchMatrix () {
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
    console.log("creating person");
    matrix.push(person);
  }
  return matrix
}