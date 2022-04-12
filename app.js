'use strict';

//Seattle Info
let seattleArray = [];

let timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

const seattle = {
  name : 'Seattle',
  minCookie : 23,
  maxCookie : 65,
  avgCookie : 6.3,
}

//Gets avg cookie per hour
function seattleSales(){
  let span = seattle.maxCookie - seattle.minCookie;
  let range = Math.floor(Math.random()*span)+seattle.minCookie;
  let cookieSales = range*seattle.avgCookie;
  return Math.floor(cookieSales);
}

//puts the cookies per hour in the array
function seattleHourly(){
  for (let i = 0; i <= 13; i++){
    seattleArray.push(seattleSales());
    console.log(seattleArray);
    } 
}

seattleHourly();


//Lines 33-51 set up the Seattle Section as far as the li without text contained
const cityContainer = document.getElementById('cityEstimates');

const article = document.createElement('article');
cityContainer.appendChild(article);

const header = document.createElement('h2');
article.appendChild(header);

header.textContent = `${seattle.name}`;

const ul = document.createElement('ul');

article.appendChild(ul);

//builds list on page of time and seattleHourly
for (let i = 0; i < seattleArray.length; i++){
  if (i <= seattleArray.length){
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${timeArray[i]}: ${seattleArray[i]} cookies`
  }
}


// for (let i = 0 )
//   const li = document.createElement('li');
//   ul.appendChild(li);
//   li.textContent = `Total: `




// //Tokyo Info
// let tokyoArray = [];

// const tokyo = {
//   minCookie : 3,
//   maxCookie : 24,
//   avgCookie : 1.2
  
// }

// function tokyoSales(){
//   let span = tokyo.maxCookie - tokyo.minCookie;
//   let range = Math.floor(Math.random()*span)+tokyo.minCookie;
//   let cookieSales = range*tokyo.avgCookie;
//   return Math.floor(cookieSales);
// }

// function tokyoHourly(){
//   for (let i = 0; i <= 13; i++){
//     tokyoArray.push(tokyoSales());
//     console.log(tokyoArray);
//     } 
// }

// tokyoHourly();

// //Dubai Info
// let dubaiArray = [];

// const dubai = {
//   minCookie : 11,
//   maxCookie : 38,
//   avgCookie : 3.7
  
// }

// function dubaiSales(){
//   let span = dubai.maxCookie - dubai.minCookie;
//   let range = Math.floor(Math.random()*span)+dubai.minCookie;
//   let cookieSales = range*dubai.avgCookie;
//   return Math.floor(cookieSales);
// }

// function dubaiHourly(){
//   for (let i = 0; i <= 13; i++){
//     dubaiArray.push(dubaiSales());
//     console.log(dubaiArray);
//     } 
// }

// dubaiHourly();



// let parisArray = [];

// const paris = {
//   minCookie : 11,
//   maxCookie : 38,
//   avgCookie : 3.7
  
// }

// function parisSales(){
//   let span = paris.maxCookie - paris.minCookie;
//   let range = Math.floor(Math.random()*span)+paris.minCookie;
//   let cookieSales = range*paris.avgCookie;
//   return Math.floor(cookieSales);
// }

// function parisHourly(){
//   for (let i = 0; i <= 13; i++){
//     parisArray.push(parisSales());
//     console.log(parisArray);
//     } 
// }

// parisHourly();

