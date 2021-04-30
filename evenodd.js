function evenodd(limit)
 {
    for (let i=0;i<=limit;i++) {
    //    if(i%2==0)
    //      console.log(i,'EVEN');
    //     else console.log(i,'O   DD');
    // }


const message=(i%2===0)? 'EVEN' : 'ODD';
console.log(message,i);}}
evenodd(10);