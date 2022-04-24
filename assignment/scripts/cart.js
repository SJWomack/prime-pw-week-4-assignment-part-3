console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    if (isFull(basket) === 'false') {
        return 'false'
    }
    else {
        basket.push(item);
        return 'true';
    }
}

console.log(addItem('blueberries')) //checking if true
console.log(basket) //checking if item added

function listItems() {
    for (let items of basket) {
        console.log(`The items in your basket currently: ${basket}`);
    }
}

listItems()  //checking if correct listing of items

function empty() {
    while (basket.length > 0) {
        basket.pop();
    }
}

empty(); //emptied basket
console.log(basket);  //checking if items are gone

//doing some more tests
addItem('blueberries');
addItem('milk');
addItem('eggs');
addItem('bread');
addItem('butter')
console.log(basket);
console.log(addItem('cheese'));
console.log(basket);


function isFull() {
    if (basket.length >= maxItems) {
        return 'false'
    }
    else {
        return 'true'
    }
}