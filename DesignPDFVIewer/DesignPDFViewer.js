function designerPdfViewer(h, word) {
    // // Write your code here
    // //create an array of the abc
    // let abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // //match the position of each letter of the word in the abc array
    // let positionArray=[];
    // let wordArray= [];
    // wordArray=word.split("");
    // for(let i=0; i<abc.length;i++){
    //    for(let j=0; j<wordArray.length; j++){
    //        if(abc[i]==wordArray[j]){
    //            positionArray.push(i);
    //            for(let k=0; k<h.length; k++){
    //                if(k=positionArray[k]){
                       
    //                }
    //            }
    //        }
    //    }
       word = word.toUpperCase();
       let maxHeight = -1;
       for (var i=0; i< word.length; i+=1) {
           let letter_ =word[i];
           let indexToKnow = letter_.charCodeAt(0) - 65;
           let height = h[indexToKnow];
           if(height > maxHeight){
               maxHeight = height
           }
       }
       return maxHeight*word.length;
    }
    console.log(positionArray);
    //I will match the position of the word in the h array
    //I will push in a new wordArray
    //I will looop this word and find the Max
    //I will return the multiplication of max and wordArray.length
}
