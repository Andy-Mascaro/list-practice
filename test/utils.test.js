import { renderAnimal } from '../utils.js';

const test = QUnit.test;

test('renderAnimal should return a <div> with dog info', (expect) => {

    const expected = '<div class="animals" id="animal-list"><div class="animal"><h2>DOG</h2><img src="./assets/mastiff.jpeg"><p>Mammal with 4 legs Mastiff.</p></div><div class="animal"><h2>CAT</h2><img src="./assets/siamese.jpeg"><p>Mammal with 4 legs Siamese.</p></div><div class="animal"><h2>DOG</h2><img src="./assets/retriever.jpeg"><p>Mammal with 4 legs Retriever.</p></div></div>';

    const actual = renderAnimal({
        type: 'dog',
        numberOfLegs: '4',
        class: 'Mammal',
        breed: 'mastiff',
        image: 'mastiff.jpeg',
    });

    expect.equal(actual.outerHTML, expected);
});
