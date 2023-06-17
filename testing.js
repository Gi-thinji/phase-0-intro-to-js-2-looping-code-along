function writeCards(arr, event) {
    const newArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      const message = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
      console.log(message);
      newArray.push(message);
    }
  
    console.log(newArray);
    return newArray;
  }
  
  writeCards(["Ada", "Brendan", "Ali"], "birthday");
  