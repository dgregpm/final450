// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

// Trivial solution is to have a counter for each number then create or edit array


// Pointer solution O(N)
function sortInP(arr) {
    let ptr1 = arr[0];
    let ptr2 = arr.length - 1;
    let i = 0;
    while(i <= ptr2) {
        if(arr[i] === 2) {
            [arr[i],arr[ptr2]] = [arr[ptr2],arr[i]];
            ptr2--;
        } else if(arr[i] === 0) {
            [arr[i],arr[ptr1]] = [arr[ptr1],arr[i]];
            i++;
            ptr1++;
        } else {
            i++;
        }
    }
    return arr;
}

console.log(sortInP([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));