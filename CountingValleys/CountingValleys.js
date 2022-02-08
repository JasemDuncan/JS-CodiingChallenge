function countingValleys(steps, path) {
    // Write your code here
    
    let valley=0;
    let counter=0;
    
    for (let i=0; i<path.length ; i++ ){
         
        if(path[i]==='D'){
            counter= counter - 1;
        }else{
            counter = counter + 1;
        }
        if(counter===0 && path[i]==='U' ){
            valley = valley +1;
        }
    }
    return valley;      
}
