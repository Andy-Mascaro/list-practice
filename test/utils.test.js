import { renderAnimal, renderCar, renderSoda, renderSport } from '../utils.js';

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





test('renderSoda should return a <div> with soda info', (expect) => {

    const expected = `<div class="soda"><h2>ROYAL COLA</h2><p>Royal Cola has a 175 calories and 45g of sugar.</p></div>`;

    const actual = renderSoda({
        name:'Royal Cola',
        nutrition: {
            calories: 175,
            sugar: '45g',
        }
    });

    expect.equal(actual.outerHTML, expected);
});





test('renderSport should return a <div> with sport info', (expect) => {

    const expected = `<div class="sport"><p>Baseball .</p></div>`;

    const actual = renderSport('Baseball');    
    

    expect.equal(actual.outerHTML, expected);
});




test('renderCars should return a <div> with toyota info', (expect) => {

    const expected = `<div class="car"><h2>TOYOTA</h2><p>Corolla,Tundra,Camry .</p></div>`;

    const actual = renderCar({
        brand:'toyota',
        model:['Corolla', 'Tundra', 'Camry']
        
    });

    expect.equal(actual.outerHTML, expected);
});
