function order(words) {
    let i = 0;
    let j = 0;
    if(words.length === 0) { return words; } else {
        let stringArray = words.split(" ");
        let tempStringArray = stringArray;
        for(i = 0 ; i <=words.length ; i++){
            for(j = 1 ; j <= 9 ; j++){
                if (stringArray[i].search(j) != -1){
                    tempStringArray.splice(j-1, 1, stringArray[i]);
                }
            }
        }
    }
    return tempStringArray.join();
}
