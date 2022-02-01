export function renderAnimal(animal) {
    const div = document.getCreateElement('div');
    div.classList.add('animal');
    const h2 = document.createElement('h2');
    h2.textContent = animal.type.toUpperCase();
    div.append(h2);
    const img = document.createElement('image');
    img.src = `./assets/${animal.image}`;
    

    const p = document.createElement('p');
    p.textContent = `${animal.class} with ${animal.numberOfLegs} legs ${animal.breed}.`; 
    div.append(h2, img, p);
    return div;

}
