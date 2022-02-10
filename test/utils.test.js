import { renderAnimal } from '../utils.js';

const test = QUnit.test;

test('renderAnimal should return a <div> with shark info', (expect) => {

    const expected = `<div class="animal"><h2>SHARK</h2><img src="./assets/hammerhead.jpeg"><p>Fish with 0 legs, Breed Hammerhead.</p></div>`;

    const actual = renderAnimal({
        type: 'SHARK',
        numberOfLegs: '0',
        class: 'Fish',
        breed: 'Hammerhead',
        image: 'hammerhead.jpeg',
    });

    expect.equal(actual.outerHTML, expected);
});
