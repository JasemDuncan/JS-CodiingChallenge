function pickingNumbers(a) {
    // Write your code here
    //Loop the array and make a rest of the next element
    // if the diference is <=1 push in another array
    
    var map = new Array(100);
    map.fill(0);
    
    for(var i=0; i < a.length; i++){
        map[a[i]]++;
    }
    
    var max=0;
    for(let i=1 ; i<map.length; i++){
        if(map[i]+map[i-1]>max){
            max=map[i] + map[i-1]
        }
    }
    return max;

}