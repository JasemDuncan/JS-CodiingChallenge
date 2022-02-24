function hurdleRace(k, height) {
    // Write your code here
    let Mayor=0;
    for(let i=0; i<height.length;i++){
        if(k<height[i]){
            if(height[i]>Mayor){
                Mayor=height[i]
            }
        }       
    }
    if(Mayor>k){
        return Mayor-k;
    }
    else {
        return 0;
    }
}
