var maxSequence = function(arr){
    var ans = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {

        ans = Math.max(0, ans + arr[i]);
        sum = Math.max(sum, ans);
    }
   return sum;
}