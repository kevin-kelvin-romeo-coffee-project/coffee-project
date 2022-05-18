"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee row col-6">';
    html += '<div class="coffee-id">' + coffee.id + '</div>';
    html += '<div class="coffee-name col-7">' + coffee.name + '</div>';
    html += '<div class="coffee-roast col-5">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === 'all'){
            filteredCoffees = coffees;
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let tbody = document.querySelector('#coffees');
// let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', updateCoffees)
let coffeeSelection = document.querySelector('#coffeeNames')
coffeeSelection.addEventListener('keyup',nameOfCoffee )

tbody.innerHTML = renderCoffees(coffees);
//-----------------------------------------//

let addingCoffee = document.querySelector('#addedCoffee');
let submitButton = document.querySelector('#submitButton');
let addingRoast = document.querySelector('#addedRoast')

let addCoffee = function() {
    let obj = {};
    obj.name = addingCoffee.value;
    obj.roast = addingRoast.value;
    coffees.push(obj);
    tbody.innerHTML = renderCoffees(coffees);
}

console.log(coffees);
submitButton.addEventListener('click', addCoffee);


function nameOfCoffee(){
    let drinks = [];
    let selectedRoast = roastSelection.value;
    let selectedCoffee= coffeeSelection.value.toLowerCase();
    for(let coffee of coffees){
        if (coffee.name.toLowerCase().includes(selectedCoffee) && coffee.roast === selectedRoast){
            drinks.push(coffee)
        } else if (coffee.name.toLowerCase().includes(selectedCoffee) && roastSelection.value === 'all'){
            drinks.push(coffee);
        }
    }
    tbody.innerHTML = renderCoffees(drinks);

}






// document.getElementById("coffeeNames").addEventListener("change", nameOfCoffee)

// submitButton.addEventListener('click', updateCoffees);
// console.log(coffees);


// console.log(window.localStorage);

//Light City
// let test = window.localStorage.getItem('lightCity');
// let lightC = JSON.parse(test);
// let testBody = document.querySelector('.lightC')
// testBody.innerHTML = lightC.name;