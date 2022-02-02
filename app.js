// import functions and grab DOM elements

import { animals } from './animals.js';
import { renderAnimal } from './utils.js';


const animalList = document.getElementById('animal-list');

for (let animal of animals) {
    const div = renderAnimal(animal);
    animalList.append(div);
}




import { sodas } from './soda.js';
import { renderSoda } from './utils.js';


const sodaList = document.getElementById('soda-list');

for (let soda of sodas) {
    const div = renderSoda(soda);
    sodaList.append(div);
}




import { cars } from './cars.js';
import { renderCar } from './utils.js';


const carList = document.getElementById('cars-list');

for (let car of cars) {
    const div = renderCar(car);
    carList.append(div);
}


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
