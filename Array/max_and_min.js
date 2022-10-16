// Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

function minmax(arr) {
    let min = arr[0];
    let max = arr[0];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        } else if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(`Minimum element is: ${min}`);
    console.log(`Maximum element is: ${max}`);
}

minmax([22,14,8,17,35,3]);