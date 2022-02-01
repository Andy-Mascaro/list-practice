// import functions and grab DOM elements

import { animals } from './animals.js';
import { renderAnimal } from './utils.js';


const animalList = document.getElementById('animal-list');

for (let animal of animals) {
    const div = renderAnimal(animal);
    animalList.append(div);
}


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
