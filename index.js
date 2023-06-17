// Code your solutions in this file
/*for (let age=30;age < 40;age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}

const gifts = ["teddy bear","drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0; i<gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    }
    return gifts;
}

wrapGifts(gifts);*/

function writeCards(arr,event) {
    let newArray = [];
    for(let i=0;i<arr.length; i++) {
       const message = (`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
        //debugger;
        newArray.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
        //console.log(newArray);
        debugger;

    }
    console.log(newArray);
    return newArray;
    
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(num){
    
    while (num >= 0) {
        console.log(num);
        num--;
    }

}

countDown(10);

//function writeCardsForLoop(arr,event){

//}