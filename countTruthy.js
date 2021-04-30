const array1 = [0,undefined,7,4,6];
console.log(countTruthy(array1));

function countTruthy()
{   
    let count=0;
    for(let value of array1)
        if(value)
            count++;
            return count;
}