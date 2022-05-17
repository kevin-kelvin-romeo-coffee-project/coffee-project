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

let myCoffeeUpdate = function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
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
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

// tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);
// console.log(coffees);


console.log(window.localStorage);

//Card Start
//
//Name
let selector1Name = document.querySelector('.lightC');
let lightCity = window.localStorage.getItem('lightCity');
let lightC = JSON.parse(lightCity);
selector1Name.innerHTML = lightC.name;
//Roast
let selector1Roast = document.querySelector('.light1');
selector1Roast.innerHTML = lightC.roast;
//Card End
//
//Card Start
//
//Name
let selector2Name = document.querySelector('.halfC');
let halfCity = window.localStorage.getItem('halfCity');
let halfC = JSON.parse(halfCity);
selector2Name.innerHTML = halfC.name;
//Roast
let selector2Roast = document.querySelector('.light2');
selector2Roast.innerHTML = halfC.roast;
//Card End
//
//Card Start
//
//Name
let selector3Name = document.querySelector('.cinnamon');
let cinnamon = window.localStorage.getItem('cinnamon');
let cinn = JSON.parse(cinnamon);
selector3Name.innerHTML = cinn.name;
//Roast
let selector3Roast = document.querySelector('.light3');
selector3Roast.innerHTML = cinn.roast;
//Card End
//
//Card Start
//
//Name
let selector4Name = document.querySelector('.city');
let city = window.localStorage.getItem('city');
let ci = JSON.parse(city);
selector4Name.innerHTML = ci.name;
//Roast
let selector4Roast = document.querySelector('.medium1');
selector4Roast.innerHTML = ci.roast;
//Card End
//
//Card Start
//
//Name
let selector5Name = document.querySelector('.american');
let american = window.localStorage.getItem('american');
let america = JSON.parse(american);
selector5Name.innerHTML = america.name;
//Roast
let selector5Roast = document.querySelector('.medium2');
selector5Roast.innerHTML = america.roast;
//Card End
//
//Card Start
//
//Name
let selector6Name = document.querySelector('.breakfast');
let breakfast = window.localStorage.getItem('breakfast');
let breakF = JSON.parse(breakfast);
selector6Name.innerHTML = breakF.name;
//Roast
let selector6Roast = document.querySelector('.medium3');
selector6Roast.innerHTML = breakF.roast;
//Card End
//
//Card Start
//
//Name
let selector7Name = document.querySelector('.high');
let high = window.localStorage.getItem('high');
let hi = JSON.parse(high);
selector7Name.innerHTML = hi.name;
// Roast
let selector7Roast = document.querySelector('.dark1');
selector7Roast.innerHTML = hi.roast;
// Card End
//
// Card Start
//
// Name
let selector8Name = document.querySelector('.continental');
let  continental = window.localStorage.getItem('continental');
let cont = JSON.parse(continental);
selector8Name.innerHTML = cont.name;
// Roast
let selector8Roast = document.querySelector('.dark2');
selector8Roast.innerHTML = cont.roast;
// Card End
//
// Card Start
//
// Name
let selector9Name = document.querySelector('.orleans');
let newOrleans = window.localStorage.getItem('newOrleans');
let orleans = JSON.parse(newOrleans);
selector9Name.innerHTML = orleans.name;
// Roast
let selector9Roast = document.querySelector('.dark3');
selector9Roast.innerHTML = orleans.roast;
// Card End
//
// Card Start
//
// Name
let selector10Name = document.querySelector('.european');
let european = window.localStorage.getItem('european');
let europe = JSON.parse(european);
selector10Name.innerHTML = europe.name;
// Roast
let selector10Roast = document.querySelector('.dark4');
selector10Roast.innerHTML = europe.roast;
// Card End
//
// Card Start
//
// Name
let selector11Name = document.querySelector('.espresso');
let espresso = window.localStorage.getItem('espresso');
let esp = JSON.parse(espresso);
selector11Name.innerHTML = esp.name;
// Roast
let selector11Roast = document.querySelector('.dark5');
selector11Roast.innerHTML = esp.roast;
// Card End
//
// Card Start
//
// Name
let selector12Name = document.querySelector('.viennese');
let viennese = window.localStorage.getItem('viennese');
let vie = JSON.parse(viennese);
selector12Name.innerHTML = vie.name;
// Roast
let selector12Roast = document.querySelector('.dark6');
selector12Roast.innerHTML = vie.roast;
// Card End
//
// Card Start
//
// Name
let selector13Name = document.querySelector('.italian');
let italian = window.localStorage.getItem('italian');
let ital = JSON.parse(italian);
selector13Name.innerHTML = ital.name;
// Roast
let selector13Roast = document.querySelector('.dark7');
selector13Roast.innerHTML = ital.roast;
// Card End
//
// Card Start
//
// Name
let selector14Name = document.querySelector('.french');
let french = window.localStorage.getItem('french');
let fre = JSON.parse(french);
selector14Name.innerHTML = fre.name;
// Roast
let selector14Roast = document.querySelector('.dark8');
selector14Roast.innerHTML = fre.roast;
// Card End
