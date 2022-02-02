import { renderAnimal, renderSoda, renderCar } from '../utils.js';

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

    const expected = `<div class="soda" id="soda-list"><div class="soda"><h2>ROYAL COLA</h2><p>Royal Cola has a 175 calories and 45g of sugar.</p></div><div class="soda"><h2>MT DEW</h2><p>Mt Dew has a 400 calories and 70g of sugar.</p></div><div class="soda"><h2>PEPSI</h2><p>Pepsi has a 175 calories and 60g of sugar.</p></div></div>`;

    const actual = renderSoda({
    //     name:'Pepsi',
    //     nutrition: {
    //         calories: 175,
    //         sugar: '60g',
    //     }
    });
    expect.equal(actual.outerHTML, expected);
});






test('renderCar should return a <div> with cars info', (expect) => {

    const expected = `<div class="cars" id="cars-list"><div class="car"><h2>TOYOTA</h2><p>Corolla,Tundra,Camry .</p></div><div class="car"><h2>SUBARU</h2><p>Impreza,Wrx,Outback .</p></div><div class="car"><h2>FORD</h2><p>Mustang,Bronco,Focus .</p></div></div>`;

    const actual = renderCar({
    
    });
    expect.equal(actual.outerHTML, expected);
});