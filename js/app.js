'use strict';

// ********** GLOBALS **********

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let saleTable = document.getElementById('sale-table');

let storeObjects = [];

// ********** CONSTRUCTOR FUNCTION **********

function Store(name, minCust, maxCust, avgCookiesBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesBought = avgCookiesBought;
  this.cookiesBought = [];
  this.randomCustomer = [];
  this.dailyTotal = 0;
}

// ********** PROTOTYPE METHODS **********

Store.prototype.getCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    let customer = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    this.randomCustomer.push(customer);
    console.log('customers per hour ' + customer);
  }
};

Store.prototype.calcTotalCookiePerHour = function () {
  this.getCookies(this.minCust, this.maxCust);

  // Create a variable to store daily total

  for (let i = 0; i < hours.length; i++) {
    let totalCookie = Math.round(this.randomCustomer[i] * this.avgCookiesBought);
    console.log(typeof (this.randomCustomer[i]));
    console.log(typeof (this.avgCookieBought));
    this.cookiesBought.push(totalCookie);
    console.log('cookies bought per hour ' + this.cookiesBought);
    this.dailyTotal += totalCookie;
  }
};

Store.prototype.render = function () {

  this.calcTotalCookiePerHour();

  // header row

  let headerRow = document.createElement('tr');
  saleTable.appendChild(headerRow);

  //header cell

  let headerCell = document.createElement('th');
  headerCell.textContent = this.name;
  headerRow.appendChild(headerCell);

  // filling in table with data

  for (let i = 0; i < hours.length; i++) {
    let cookieData = document.createElement('td');
    cookieData.textContent = this.cookiesBought[i];
    headerRow.appendChild(cookieData);

  }
  let dailyTotal = document.createElement('td');
  dailyTotal.textContent = this.dailyTotal;
  headerRow.appendChild(dailyTotal);

};

function header() {
  let headerRow = document.createElement('tr');
  headerRow.textContent = 'Locations';
  saleTable.appendChild(headerRow);
  for (let i = 0; i < hours.length; i++) {
    let headerTime = document.createElement('th');
    headerTime.textContent = hours[i];
    headerRow.appendChild(headerTime);

  }

  let headerDailyTotal = document.createElement('th');
  headerDailyTotal.textContent = 'Daily Total';
  headerRow.appendChild(headerDailyTotal);

}

function footer() {
  let footer = document.createElement('th');
  footer.textContent = 'Totals';
  saleTable.appendChild(footer);

  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let totals = 0;
    for (let j = 0; j < storeObjects.length; j++) {
      totals += storeObjects[j].cookiesBought[i];
      console.log(storeObjects);

    }
    let hourlyTotals = document.createElement('td');
    hourlyTotals.textContent = totals;
    saleTable.appendChild(hourlyTotals);
    grandTotal += totals;

  }

  let dailyTotals = document.createElement('td');
  dailyTotals.textContent = grandTotal;
  saleTable.appendChild(dailyTotals);

}

// ********** EXECUTABLE CODE **********

let seattle = new Store('Seattle', '23', '65', '6.3');
let tokyo = new Store('Tokyo', '3', '24', '1.2');
let dubai = new Store('Dubai', '11', '28', '3.7');
let paris = new Store('Paris', '20', '38', '2.3');
let lima = new Store('Lima', '2', '16', '4.6');

storeObjects.push(seattle, tokyo, dubai, paris, lima);
console.log(storeObjects);

header();

function renderAll() {
  for (let i = 0; i < storeObjects.length; i++) {
    storeObjects[i].getCookies();
    storeObjects[i].render();
    console.log('End');
  }
}

renderAll();
footer();

// 'use strict';

// // ********** GLOBAL **************

// let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

// let storeSection = document.getElementById('store-profiles');

// console.dir(storeSection);

// // ********** HELPER FUNCTIONS *********

// function randomCustomerCalc(min,max){ // random number of customers per hour
// //   // got this from MDN docs
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // ********** OBJECT LITERALS **********

// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   cookiesBought: [],
//   randomCustomer: [],
//   dailyTotal: 0,
//   getCookies: function(min,max){
//     this.cookieNum = `${randomCustomerCalc(23-65)} cookies`;
//     for(let i = 0; i < hours.length; i++){
//       let customer = Math.floor(Math.random() * (max - min + 1) + min);
//       this.randomCustomer.push(customer);
//       console.log(customer);
//     }
//   },

//   calcTotalCookiePerHour: function(){
//     this.getCookies(this.minCust, this.maxCust);
//     randomCustomerCalc();
//     for(let i = 0; i < hours.length; i++){
//       let totalCookie = Math.round(this.randomCustomer[i] * this.avgCookieBought);
//       this.cookiesBought.push(totalCookie);
//       console.log(this.cookiesBought);
//       this.dailyTotal += totalCookie;
//     }
//     console.log(this.dailyTotal, 'total');
//   },

//   render: function(){
//     this.calcTotalCookiePerHour();

//     // ***** DOM MANIPULATION *****

//     // create element
//     let articleElem = document.createElement('article');

//     // add it to the dom
//     storeSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     console.log(h2Elem);
//     articleElem.appendChild(h2Elem);

//     // USEFUL FOR LAB
//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++){
//       let liElem = document.createElement('li');
//       console.log(this.cookieNum);
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let totalItem = document.createElement('li');
//     console.log();
//     totalItem.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulElem.appendChild(totalItem);

//     let pElem = document.createElement('p');
//     pElem.alt = `${this.name} has an average of ${this.customerNum} per hour.`;
//     articleElem.appendChild(pElem);
//   }
// };

// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   cookiesBought: [],
//   randomCustomer: [],
//   dailyTotal: 0,
//   getCookies: function(min,max){
//     this.cookieNum = `${randomCustomerCalc(23-65)} cookies`;
//     for(let i = 0; i < hours.length; i++){
//       let customer = Math.floor(Math.random() * (max - min + 1) + min);
//       this.randomCustomer.push(customer);
//       console.log(customer);
//     }
//   },

//   calcTotalCookiePerHour: function(){
//     this.getCookies(this.minCust, this.maxCust);
//     randomCustomerCalc();
//     for(let i = 0; i < hours.length; i++){
//       let totalCookie = Math.round(this.randomCustomer[i] * this.avgCookieBought);
//       this.cookiesBought.push(totalCookie);
//       console.log(this.cookiesBought);
//       this.dailyTotal += totalCookie;
//     }
//     console.log(this.dailyTotal, 'total');
//   },

//   render: function(){
//     this.calcTotalCookiePerHour();

//     // ***** DOM MANIPULATION *****

//     // create element
//     let articleElem = document.createElement('article');

//     // add it to the dom
//     storeSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     console.log(h2Elem);
//     articleElem.appendChild(h2Elem);

//     // USEFUL FOR LAB
//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++){
//       let liElem = document.createElement('li');
//       console.log(this.cookieNum);
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let totalItem = document.createElement('li');
//     console.log();
//     totalItem.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulElem.appendChild(totalItem);

//     let pElem = document.createElement('p');
//     pElem.alt = `${this.name} has an average of ${this.customerNum} per hour.`;
//     articleElem.appendChild(pElem);
//   }
// };

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
//   cookiesBought: [],
//   randomCustomer: [],
//   dailyTotal: 0,
//   getCookies: function(min,max){
//     this.cookieNum = `${randomCustomerCalc(23-65)} cookies`;
//     for(let i = 0; i < hours.length; i++){
//       let customer = Math.floor(Math.random() * (max - min + 1) + min);
//       this.randomCustomer.push(customer);
//       console.log(customer);
//     }
//   },

//   calcTotalCookiePerHour: function(){
//     this.getCookies(this.minCust, this.maxCust);
//     randomCustomerCalc();
//     for(let i = 0; i < hours.length; i++){
//       let totalCookie = Math.round(this.randomCustomer[i] * this.avgCookieBought);
//       this.cookiesBought.push(totalCookie);
//       console.log(this.cookiesBought);
//       this.dailyTotal += totalCookie;
//     }
//     console.log(this.dailyTotal, 'total');
//   },

//   render: function(){
//     this.calcTotalCookiePerHour();

//     // ***** DOM MANIPULATION *****

//     // create element
//     let articleElem = document.createElement('article');

//     // add it to the dom
//     storeSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     console.log(h2Elem);
//     articleElem.appendChild(h2Elem);

//     // USEFUL FOR LAB
//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++){
//       let liElem = document.createElement('li');
//       console.log(this.cookieNum);
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let totalItem = document.createElement('li');
//     console.log();
//     totalItem.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulElem.appendChild(totalItem);

//     let pElem = document.createElement('p');
//     pElem.alt = `${this.name} has an average of ${this.customerNum} per hour.`;
//     articleElem.appendChild(pElem);
//   }
// };

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
//   cookiesBought: [],
//   randomCustomer: [],
//   dailyTotal: 0,
//   getCookies: function(min,max){
//     this.cookieNum = `${randomCustomerCalc(23-65)} cookies`;
//     for(let i = 0; i < hours.length; i++){
//       let customer = Math.floor(Math.random() * (max - min + 1) + min);
//       this.randomCustomer.push(customer);
//       console.log(customer);
//     }
//   },

//   calcTotalCookiePerHour: function(){
//     this.getCookies(this.minCust, this.maxCust);
//     randomCustomerCalc();
//     for(let i = 0; i < hours.length; i++){
//       let totalCookie = Math.round(this.randomCustomer[i] * this.avgCookieBought);
//       this.cookiesBought.push(totalCookie);
//       console.log(this.cookiesBought);
//       this.dailyTotal += totalCookie;
//     }
//     console.log(this.dailyTotal, 'total');
//   },

//   render: function(){
//     this.calcTotalCookiePerHour();

//     // ***** DOM MANIPULATION *****

//     // create element
//     let articleElem = document.createElement('article');

//     // add it to the dom
//     storeSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     console.log(h2Elem);
//     articleElem.appendChild(h2Elem);

//     // USEFUL FOR LAB
//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++){
//       let liElem = document.createElement('li');
//       console.log(this.cookieNum);
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let totalItem = document.createElement('li');
//     console.log();
//     totalItem.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulElem.appendChild(totalItem);

//     let pElem = document.createElement('p');
//     pElem.alt = `${this.name} has an average of ${this.customerNum} per hour.`;
//     articleElem.appendChild(pElem);
//   }
// };

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   cookiesBought: [],
//   randomCustomer: [],
//   dailyTotal: 0,
//   getCookies: function(min,max){
//     this.cookieNum = `${randomCustomerCalc(23-65)} cookies`;
//     for(let i = 0; i < hours.length; i++){
//       let customer = Math.floor(Math.random() * (max - min + 1) + min);
//       this.randomCustomer.push(customer);
//       console.log(customer);
//     }
//   },

//   calcTotalCookiePerHour: function(){
//     this.getCookies(this.minCust, this.maxCust);
//     // randomCustomerCalc();
//     for(let i = 0; i < hours.length; i++){
//       let totalCookie = Math.round(this.randomCustomer[i] * this.avgCookieBought);
//       this.cookiesBought.push(totalCookie);
//       console.log(this.cookiesBought);
//       this.dailyTotal += totalCookie;
//     }
//     console.log(this.dailyTotal, 'total');
//   },

//   render: function(){
//     this.calcTotalCookiePerHour();

//     // ***** DOM MANIPULATION *****

//     // create element
//     let articleElem = document.createElement('article');

//     // add it to the dom
//     storeSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     console.log(h2Elem);
//     articleElem.appendChild(h2Elem);

//     // USEFUL FOR LAB
//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++){
//       let liElem = document.createElement('li');
//       console.log(this.cookieNum);
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let totalItem = document.createElement('li');
//     console.log();
//     totalItem.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulElem.appendChild(totalItem);

//     let pElem = document.createElement('p');
//     pElem.alt = `${this.name} has an average of ${this.customerNum} per hour.`;
//     articleElem.appendChild(pElem);
//   }
// };

// // ********** EXECUTABLE CODE **********

// seattle.calcTotalCookiePerHour();
// seattle.render();
// console.log(seattle);

// tokyo.calcTotalCookiePerHour();
// tokyo.render();
// console.log(tokyo);

// dubai.calcTotalCookiePerHour();
// dubai.render();
// console.log(dubai);

// paris.calcTotalCookiePerHour();
// paris.render();
// console.log(paris);

// lima.calcTotalCookiePerHour();
// lima.render();
// console.log(lima);
