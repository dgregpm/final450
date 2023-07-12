// Complete the function spirallyTraverse() that takes matrix, r and c as 
// input parameters and returns a list of integers denoting the spiral 
// traversal of matrix. 


/**
 * @param {number[][]} matrix
 * @param {number} r
 * @param {number} c
 * @returns {number[]}
*/
class Solution 
{
    //Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(matrix, r, c)
    {
        let cnt = 0;
        let arr = [];
        let rs = 0;
        let re = r-1;
        let cs = 0;
        let ce = c-1;
        while(cnt < r*c){
            
                for(let i = cs ; i<=ce ; i++){
                    console.log(matrix[rs][i]);
                    arr[cnt] = matrix[rs][i];
                    cnt++;
                }
                rs++;
                if(cnt === r*c){break;}
                for(let i=rs ; i<=re ; i++){
                    arr[cnt] = matrix[i][ce];
                    cnt++;
                }
                ce--;
                if(cnt === r*c){break;}
                for(let i=ce ; i>=cs ; i--){
                    arr[cnt] = matrix[re][i];
                    cnt++;
                }
                re--;
                if(cnt === r*c){break;}
                for(let i=re ; i>=rs ; i--){
                    arr[cnt] = matrix[i][cs];
                    cnt++;
                }
                cs++;
                if(cnt === r*c){break;}
        }
        return arr;
    }
}

let mat = [];
mat[0] = [1,2,3,4];
mat[1] = [5,6,7,8];
mat[2] = [9,8,7,6];
mat[3] = [5,4,3,2];

let spir = new Solution();
console.log(spir.spirallyTraverse(mat,4,4));