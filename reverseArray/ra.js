"use strict"

let array = [];
let inverseArray = [];

for ( let i = 0; i < 24; i++ )
{
    array.push(i+1);
}

inverseArray = reverseArray(array);
console.log('source array:', array);
console.log('reverse array:', inverseArray);


function reverseArray ( inputArray )
{
    let newReversedArray = [];

    console.log(`input array length is ${inputArray.length}`)

    for (let i = 0; i < inputArray.length; i++ ) 
    {
        newReversedArray[i] = inputArray[inputArray.length-i-1];
    }

    console.log(`output array length is ${newReversedArray.length}`)

    return newReversedArray;
}

function reverseArrayInPlace ( array )
{
    let length = array.length;
    let temp, i = 0;
    while ( i < length-i )
    {
        temp = array[i];
        array[i] = array[length - 1 - i];
        array[length - 1 - i] = temp;
        i++;
    }
}


reverseArrayInPlace ( array );
console.log('source array:', array);

