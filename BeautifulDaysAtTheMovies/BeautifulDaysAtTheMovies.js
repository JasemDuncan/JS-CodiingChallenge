function beautifulDays(i, j, k) {
    // Write your code here
    let reverseNumber;
    let counter=0;
    for(i; i<= j ;i++){
       reverseNumber=parseInt(i.toString().split('').reverse().join(''));
       if(((i-reverseNumber)%k)!=0){
           counter++;
       }
    }
    return counter;
}