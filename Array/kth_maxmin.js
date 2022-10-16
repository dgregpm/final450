// Given an array arr[] and an integer K where K is smaller than size of array, 
// the task is to find the Kth smallest element in the given array. It is given 
// that all array elements are distinct.


function kthMin(arr,k) {
    let min = arr[0];
    for(let i=0;i<arr.length;i++) {

    }
    arr = arr.sort((a,b)=>a-b);
    return(arr[k-1]);
}

console.log(kthMin([7, 10, 4, 3, 20, 15],3));