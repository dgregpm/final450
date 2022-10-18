// Move all negative numbers to beginning and positive to end with constant extra space

function moveNeg(arr) {
    let ptr1 = 0;
    let ptr2 = arr.length - 1;
    let i = 0;
    while(i < ptr2) {
        if(arr[i] < 0){
            ptr1++;
            i++;            
        } else if(arr[i] >= 0) {
            [arr[i],arr[ptr2]] = [arr[ptr2], arr[i]];
            ptr2--;
        }
    }
    return arr;
}

console.log(moveNeg([-1, 2, -3, 4, 5, 6, -7, 8, 9]));