// Given a sorted array arr containing n elements with possibly duplicate elements, 
// the task is to find indexes of first and last occurrences of an element x in the given array.

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @return {number[]}
*/

class Solution {
    find(arr,n,x){
        let start = 0;
        let end = 0;
      
       for(let i=0;i<n;i++){
            if(x === arr[i]){
                start = i;
                let j = i;
                while(x === arr[j]){
                    end = j;
                    j++;
                }
                return [start,end];
            }
       }

       return [-1,-1]
        
    }
    
}

let test = [1,2,3,5,5,5,23,34];
let first = new Solution();
console.log(first.find(test,8,5));