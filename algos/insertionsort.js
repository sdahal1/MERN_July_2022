//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/


//Create a function that will accept an array as an input, and it will return the sorted version of that array using the Insertion Sort approach


function insertionSort(array){
    // we will loop through our array starting at index[1] all the way to the end of the array.
    for(var i=1; i<array.length;i++){
        var currentElement= array[i]
        // as long as the value at the current index is less then the value on the left,we will swap with the value on the left.
        // var j = i;
        while(array[i]< array[i-1]){
            // var temp = array[i];
            // array[i] = array[i-1]
            // array[i-1] = temp;

            [array[i],array[i-1]] = [array[i-1],array[i]];
            // [array[i],array[i-1]]=[array[i-1],array[i]];
            i--
        }
    }
    console.log(array)
}
insertionSort([10, 4, 5, 71, 50, 40, 2, 1 ])