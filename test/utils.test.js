import { renderAnimal } from '../utils.js';

const test = QUnit.test;

test('renderAnimal should return a <div> with dog info', (expect) => {

    const expected = '<div class="animals" id="animal-list"></div>';

    const actual = renderAnimal({
        type: 'dog',
        numberOfLegs: '4',
        class: 'Mammal',
        breed: 'mastiff',
        image: 'mastiff.jpeg',
    });

    expect.equal(actual.outerHTML, expected);
});
