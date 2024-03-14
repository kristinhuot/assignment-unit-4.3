console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket= []; 

function addItem (item){
    basket.unshift(item); 
    return true 
} 
console.log('Adding an item to the basket', addItem('Apples'));
console.log('The basket now has:', basket);

/////////////////////////////////

basket=['bread', 'milk', 'cheese']

function listItems () {
    for (let i = 0; i < basket.length; i++) {
        console.log('This is an item in the basket:', basket [i]); 
    }
}
listItems();

/////////////////////////////////

function empty (){
    while (basket.length > 0) {
        basket.pop();
    }
}

console.log('This is now my basket:', empty());

/////////////////////////////////



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
