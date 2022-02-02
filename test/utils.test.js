import { renderAnimal, renderSoda } from '../utils.js';

const test = QUnit.test;

test('renderAnimal should return a <div> with dog info', (expect) => {

    const expected = `<div class="animals" id="animal-list"><div class="animal"><h2>DOG</h2><img src="./assets/mastiff.jpeg"><p>Mammal with 4 legs Mastiff.</p></div><div class="animal"><h2>CAT</h2><img src="./assets/siamese.jpeg"><p>Mammal with 4 legs Siamese.</p></div><div class="animal"><h2>DOG</h2><img src="./assets/retriever.jpeg"><p>Mammal with 4 legs Retriever.</p></div></div>`;

    const actual = renderAnimal({
        // type: 'dog',
        // numberOfLegs: 4,
        // class: 'Mammal',
        // breed: 'Mastiff',
        // image: 'mastiff.jpeg',
    });

    expect.equal(actual.outerHTML, expected);
});


test('renderSoda should return a <div> with Pepsi info', (expect) => {

    const expected = `<div class="soda" id="soda-list"><div class="soda"><h2>PEPSI</h2><p>Pepsi with 175 calories and 60g of sugar.</p></div></div>`;

    const actual = renderSoda({
    //     name:'Pepsi',
    //     nutrition: {
    //         calories: 175,
    //         sugar: '60g',
    //     }
    });
    expect.equal(actual.outerHTML, expected);
});