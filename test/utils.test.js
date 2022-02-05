import { renderAnimal, renderSoda, renderCar, renderSport, } from '../utils.js';

const test = QUnit.test;

test('renderAnimal should return a <div> with animal info', (expect) => {

    const expected = `<div class="animals" id="animal-list"><div class="animal"><h2>DOG</h2><img src="./assets/mastiff.jpeg"><p>Mammal with 4 legs, Breed Mastiff.</p></div><div class="animal"><h2>CAT</h2><img src="./assets/siamese.jpeg"><p>Mammal with 4 legs, Breed Siamese.</p></div><div class="animal"><h2>DOG</h2><img src="./assets/retriever.jpeg"><p>Mammal with 4 legs, Breed Retriever.</p></div><div class="animal"><h2>SHARK</h2><img src="./assets/hammerhead.jpeg"><p>Fish with 0 legs, Breed Hammerhead.</p></div></div>`;

    const actual = renderAnimal({
        type: 'SHARK',
        numberOfLegs: 0,
        class: 'Fish',
        breed: 'Hammerhead',
        image: 'hammerhead.jpeg',
    });

    expect.equal(actual.outerHTML, expected);
});


stop('renderSoda should return a <div> with Mt Dew info', (expect) => {

    const expected = `<div class="soda" id="soda-list"><div class="soda"><h2>ROYAL COLA</h2><p>Royal Cola has a 175 calories and 45g of sugar.</p></div><div class="soda"><h2>MT DEW</h2><p>Mt Dew has a 400 calories and 70g of sugar.</p></div><div class="soda"><h2>PEPSI</h2><p>Pepsi has a 175 calories and 60g of sugar.</p></div><div class="soda"><h2>SQUIRT</h2><p>Squirt has a 120 calories and 40g of sugar.</p></div></div>`;

    const actual = renderSoda({

    //     { name:'MT DEW',
    //     nutrition: {
    //         calories: 400,
    //         sugar: '70g',
    //     },
    // },
    
        
    });

    expect.equal(actual.outerHTML, expected);
});






stop('renderCar should return a <div> with honda info', (expect) => {

    const expected = `<<div class="cars" id="cars-list"><div class="car"><h2>TOYOTA</h2><p>Corolla,Tundra,Camry .</p></div><div class="car"><h2>SUBARU</h2><p>Impreza,Wrx,Outback .</p></div><div class="car"><h2>FORD</h2><p>Mustang,Bronco,Focus .</p></div><div class="car"><h2>HONDA</h2><p>Accord,Pilot,Civic .</p></div></div>`;

    const actual = renderCar({
        // brand: 'honda',
        // model:['Accord', 'Pilot', 'Civic']
    });
    expect.equal(actual.outerHTML, expected);
});




stop('renderSport should return a <div> with baseball info', (expect) => {

    const expected = `<div class="sport" id="sport-list"><h2>Sports</h2><div class="sport"><p>Baseball .</p></div><div class="sport"><p>Hockey .</p></div><div class="sport"><p>Soccer .</p></div><div class="sport"><p>Tennis .</p></div></div>`; 

    const actual = renderSport({
        // 'Baseball'
    
    });
    
    expect.equal(actual.outerHTML, expected);
});