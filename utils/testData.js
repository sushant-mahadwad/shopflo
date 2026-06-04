// data/testData.js

const loginScenarios = [];
for (let i = 1; i <= 30; i++) {
    if (i === 1) loginScenarios.push({ id: `TC_${String(i).padStart(3, '0')}`, user: 'standard_user', pass: 'secret_sauce', type: 'positive' });
    else if (i === 2) loginScenarios.push({ id: `TC_${String(i).padStart(3, '0')}`, user: 'locked_out_user', pass: 'secret_sauce', type: 'negative', error: 'locked out' });
    else if (i <= 15) loginScenarios.push({ id: `TC_${String(i).padStart(3, '0')}`, user: `invalid_user_${i}`, pass: 'secret_sauce', type: 'negative', error: 'match' });
    else loginScenarios.push({ id: `TC_${String(i).padStart(3, '0')}`, user: '', pass: '', type: 'negative', error: 'required' });
}

const inventoryScenarios = [];
const sortOptions = ['az', 'za', 'lohi', 'hilo'];
for (let i = 31; i <= 60; i++) {
    inventoryScenarios.push({ id: `TC_${String(i).padStart(3, '0')}`, sort: sortOptions[i % 4] });
}

const productDetailsScenarios = [];
for (let i = 61; i <= 80; i++) {
    productDetailsScenarios.push({ id: `TC_${String(i).padStart(3, '0')}`, itemIndex: i % 6 });
}

const cartScenarios = [];
for (let i = 81; i <= 110; i++) {
    cartScenarios.push({ id: `TC_${String(i).padStart(3, '0')}`, action: i % 2 === 0 ? 'add' : 'remove' });
}

const checkoutScenarios = [];
for (let i = 111; i <= 140; i++) {
    checkoutScenarios.push({ 
        id: `TC_${String(i).padStart(3, '0')}`, 
        fName: i % 5 === 0 ? '' : 'John', 
        lName: i % 3 === 0 ? '' : 'Doe', 
        zip: i % 2 === 0 ? '' : '12345' 
    });
}

const e2eScenarios = [];
for (let i = 141; i <= 150; i++) {
    e2eScenarios.push({ id: `TC_${String(i).padStart(3, '0')}`, flow: 'full_purchase' });
}

module.exports = { 
    loginScenarios, 
    inventoryScenarios, 
    productDetailsScenarios, 
    cartScenarios, 
    checkoutScenarios, 
    e2eScenarios 
};