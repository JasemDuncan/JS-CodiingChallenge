function utopianTree(n) {
    // Write your code here
    //create a formula
    //return 10%3; //rest
    for(let i=0; i< 60; i++){
        if(n==0){
            return 1;
        }
        if(i%2==1){
            return i*2;
        }
        else{
            return i+1;
        }
    }
    
    
}