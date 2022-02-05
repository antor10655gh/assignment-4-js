// problem-1: anaTovori
function anaToVori (ana){
    if(ana < 0 || typeof ana == "string"){
        return `Please enter a valid value`;
    }
    else{
        let vori = ana / 16;
        return vori;
    }
}

let anaAmount = 32;
let recieve = anaToVori(anaAmount);
console.log(recieve);

// problem-2: pandaCost
function pandaCost(shingara, shomocha, jilapi){
    if(shingara < 0 || typeof shingara == 'string' || shomocha < 0 || typeof shomocha == 'string' || jilapi < 0 || typeof jilapi == 'string'){
        return 'Please enter a valid value';
    }

    let shingaraCost = shingara * 7;
    let shomochaCost = shomocha * 10;
    let jilapiCost   = jilapi   * 15;

    let totalCost    = shingaraCost + shomochaCost + jilapiCost;
    return totalCost;
}

let shingaraQuantity = 2;
let shomochaQuantity = 5;
let jilapiQuantity   = 10;

let recieveCost = pandaCost(shingaraQuantity, shomochaQuantity, jilapiQuantity);
console.log(recieveCost); 

// problem-3: picnicBudget
function picnicBudget(personQuantity){
    if(personQuantity < 0 || typeof personQuantity == 'string'){
        return `Please enter a valid value`;
    }
    let picnicCost;
    if(personQuantity > 200){
        picnicCost1 = 100 * 5000;
        picnicCost2 = 100 * 4000;
        picnicCost = picnicCost1 + picnicCost2 + ((personQuantity-200) * 3000);
    }

    else if(personQuantity > 100 && personQuantity <=200){
        picnicCost1 = 100 * 5000;
        picnicCost  =  picnicCost1 + ((personQuantity-100) * 4000);
    }

    else{
        picnicCost = personQuantity * 5000;
    }
  return picnicCost;
}

let person = 201;
let recievePicnicCost = picnicBudget(person);
console.log(recievePicnicCost);

// // problem-4: oddFriend
function oddFriend(friends){
    for(let element of friends){
        if(typeof element == 'number'){
            return 'Please enter a valid value';
        }
    }
    let oddName = '';
    for(let nameCheck of friends){

        if(nameCheck.length % 2 == 1){
            oddName = nameCheck;
            break;
        }
    }
    return oddName;
}

let friendsName = ['Rana', 'Sourov', 'Tonmoya', 'Piyash', 'Shojib'];
let recieveName = oddFriend(friendsName);
console.log(recieveName);