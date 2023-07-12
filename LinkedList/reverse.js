/**
 * @param {Node} head
 * @returns {Node}
*/


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class Solution {
    //Function to reverse a linked list. Iterative Solution.
    reverseList(head)
    {
        let h = head;
        let n = 1;

        while(h.next !== null){
            h = h.next;
            n++;
        }
        result = h;
        while(n>0){
            h = head;
            for(let i = 0;i<n;i++){
                h = h.next;
            }
            n--;
            result.next = h
        }
        return result;
    }
    
}