console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;
let basket= []; 

function addItem (item){
    if (isFull() === false){
        basket.push(item); 
        return true;
    }
    else {
        return false;
       }
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

///////////////////////////////

function empty (){
    while (basket.length > 0) {
        basket.pop();
    }
}
empty(basket);
console.log('This is now my basket:', basket);

///////////////////////////////

function isFull(){
     if (basket.length < maxItems){
        return false
    }
    else {
       return true  
    }
}
console.log('Is the basket full?', isFull());

/////////////////////////////////
basket= ['Spinach'];
function removeItem (item){
    let removedItemIndex = basket.indexOf(item);
    // Check if item is found
    if (removedItemIndex > -1) { 
        basket.splice(removedItemIndex,1);
        return item //item was found, returns the name of the item
    }
    else {
        return null //item was not found, nothing was removed, return is null 
    }
}


console.log('This is the removed item:', removeItem('Spinach')); // array is empty so null is result



// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found

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
