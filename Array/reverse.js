// Reverse an array or string

function revArr(arr) {
    let start = 0;
    let end = arr.length - 1;
    while(start<end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

console.log(revArr([1,2,3,4,5,6]));

// Kata 1
// Iterative solution
// complexity: O(n) space: O(1)

const revArr1 = (arr) => {
    let a = 0;
    let b = arr.length - 1;
    while(a<b){
        [arr[a],arr[b]] = [arr[b],arr[a]]
        a++;
        b--;
    }
    return arr;
}

console.log(revArr1([1,2,3,4,5,6]));

const revArr2 = (arr) => {
    let lo = 0;
    let hi = arr.length - 1;
    while(lo<hi){
        [arr[lo],arr[hi]] = [arr[hi],arr[lo]];
        lo++;
        hi--;
    }
}
