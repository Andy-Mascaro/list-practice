export function renderAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    
    const h2 = document.createElement('h2');
    h2.textContent = animal.type.toUpperCase();
  

    const img = document.createElement('img');
    img.src = `./assets/${animal.image}`;
    

    const p = document.createElement('p');
    p.textContent = `${animal.class} with ${animal.numberOfLegs} legs, Breed ${animal.breed}.`; 
    div.append(h2, img, p);
    return div;

}



export function renderSoda(soda) {
    const div = document.createElement('div');
    div.classList.add('soda');
    
    const h2 = document.createElement('h2');
    h2.textContent = soda.name.toUpperCase();
  

    // const img = document.createElement('img');
    // img.src = `./assets/${soda.image}`;
    

    const p = document.createElement('p');
    p.textContent = `${soda.name} has a ${soda.nutrition.calories} calories and ${soda.nutrition.sugar} of sugar.`; 
    div.append(h2, p);
    return div;

}






export function renderCar(car) {
    const div = document.createElement('div');
    div.classList.add('car');
    
    const h2 = document.createElement('h2');
    h2.textContent = car.brand.toUpperCase();
  

    // const img = document.createElement('img');
    // img.src = `./assets/${soda.image}`;
    

    const p = document.createElement('p');
    p.textContent = `${car.model} .`; 
    div.append(h2, p);
    return div;

}




