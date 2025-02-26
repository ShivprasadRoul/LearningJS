// You are given an array of Integers in which each subsequent value is not less
// than the previous value. Write a function that takes this array as an input and
// returns a new array with the squares of each number sorted in ascending
// order.

//clarifing question 
//are all the num positive? no it can have =.- and 0
//are the intiger distinct? no 
// can an emepty array be given ? yes 

//possible test case 
//[-3,-1,0,1,2,4] =[9,1,0,1,4,16] swap [4,1,0,1,9,16] swap [1,1,0,4,9,16] swap [1,1,0,4,9,16] swap [0,1,1,4,9,16] final result [0,1,1,4,9,16]
// []= null 
//[-3,-1,-1] = [1,1,9]
// [1,2,3]= 1,4,9

/*
function sq_array(arr) {
    if (!arr||arr.length === 0) return []; 
    let arr2 = arr.map(x => x**2); 
    return arr2.sort((a, ) => a-b);
}
    */
/*
function sqarr2(arr){
    if(!arr || arr.length === 0) return null;
    else{
        let arr2=[]
        for(let i=0;i<arr.length;i++){
            arr2.push(arr[i]**2)
        }
        arr2.sort();
        return arr2;
    }
}   
*/
//better approach 
function sqarr3(arr) {
    if (!arr||arr.length===0) 
        return null;
    else {
        let len=arr.length-1;
        let arr2=new Array(len+1); 
        for (let i=0;i<len;i++) { 
            arr2[i]=arr[i]**2;     
        }
        for(let i=0;i<=Math.floor(len/2);i++){
            if (arr2[i]>arr2[len-i]) { 
                let temp = arr2[i];
                arr2[i]=arr2[len-i];
                arr2[len-i]=temp;
            }
        }
        return arr2;
    }
}

let arr=[-3,-1,5,1,2,4]
console.log(arr.length);

let arr3=sqarr3(arr)
console.log(arr3);
