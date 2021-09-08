
///////////////////AVERAGE PRICE OF ALL ITEMS///////////////////

let average = (items.reduce((accum, element) => {
    return accum + element.price;
},0) / items.length).toFixed(2);

console.log(`$${average}`);

//////////////ARRAY OF ITEMS THAT COST BETWEEN $14-$18//////////

let specificItems = items.filter(element => {
    return element.price > 14 && element.price < 18;
});

console.log(specificItems);

///////////////////GBP currency code items////////////////
let itemsGBP = items.filter(element => {
    return element.currency_code === "GBP"
});

console.log(`${itemsGBP[0].title} costs ${itemsGBP[0].price}`)

////////////////Items made of wood///////////////////////

let woodenItems = items.filter(element => {
    return element.materials.includes('wood');
    //return element.title;
}).forEach(element => {
    console.log(`${element.title} is made of wood`)
});

//////////////////Items with 8 or more materials///////////////////

let eightOrMore = items.filter(element => {
    console.log
    return element.materials.length >= 8;
}).forEach(element => {
    console.log(`${element.title} has ${element.materials.length} materials`);
    element.materials.forEach(element => {
        console.log(`${element}`)
    });
});

//////////////// Items made by sellers ///////////////////////

let madeBySellers = items.reduce((accum, element) => {
    if (element['who_made'] === 'i_did') {
        return accum + 1;
    }
    return accum;
}, 0);

console.log(`${madeBySellers} were made by their sellers`);