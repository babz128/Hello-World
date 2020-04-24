let myName = 'Bradley';
let arr = [];

for(var i =0; i<10; i++){
    console.log("what is your name?")
    console.log(i + ". Your name is " + myName + i);
    arr[i] = i;
}
arr[4] = 85;

sortNumbers = (x,y) => {
    return x-y;
}

// console.log(arr.sort())
//console.log(arr.sort(sortNumbers(x,y){return x-y}))
// bArr = arr.sort();
// console.log(bArr)