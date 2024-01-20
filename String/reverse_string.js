// Write a function that reverses a string. The input string is given as 
// an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function(str) {
    let start = 0;
    let end = str.length - 1;
    while(start<end){
        [str[start],str[end]] = [str[end],str[start]];
    }
    return str;
};
