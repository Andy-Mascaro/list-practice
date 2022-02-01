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
