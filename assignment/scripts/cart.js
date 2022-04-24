console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    if (isFull(basket)) {
        return false;
    }
    else {
        basket.push(item);
        return true;
    }
}

console.log(addItem('blueberries')); //checking if true
console.log(basket); //checking if item added

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
addItem('butter');
console.log(basket);
console.log(addItem('cheese')); //expect false
console.log(basket);            //expect cheese not to be added

function isFull() {
    if (basket.length >= maxItems) {
        return true;
    }
    return false;
}

function removeItem(item) {
    for (let items of basket) {
        if (basket.indexOf(item) >= 0) {
            basket.splice(basket.indexOf(item), 1);
            return item;
        }
    }
    return null;
}

// //test runs
console.log(`removing milk, expect return milk: ${removeItem('milk')}`);
console.log(basket);
console.log(`removing bananas, expect return null: ${removeItem('bananas')}`)
console.log(`removing eggs, expect return eggs: ${removeItem('eggs')}`);
console.log(basket);
console.log(`removing batteries, expect return null: ${removeItem('batteries')}`)


