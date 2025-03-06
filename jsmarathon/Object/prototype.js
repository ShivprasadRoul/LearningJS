const arr=[1,2,3,4,5]
//polyfill
//error: .forEach function doesnot exist on arr variable
//what does forEach takes?? it takes function as input and index and doesnot give return

if(!Array.prototype.myforEach){
    Array.prototype.myforEach=function(userfn){
        const originalArr=this

        for(let i=0;i<originalArr.length;i++){
            userfn(originalArr[i],i)
        }

    }
}

// const res=arr.myforEach(function(value,index){
//     console.log(`My for each vlue at index ${index} is ${value}`);
// })


//.map-> return a new array ->iterate over each element of array with user function
if(!Array.prototype.mymap){
    Array.prototype.mymap=function(userfn){
        const res=[]
        for(let i=0; i<this.length; i++){
            const val= userfn(this[i],i)
            res.push(val)
        }
        return res
    }
}

const n2=arr.mymap((e)=>e*3)
console.log(n2);

// javascript  // give me the output
let naam = "shah";
user.naam = "Ashish shah"
console.log(user.naam)

// and also give me the output of this
user[naam] = "Ashish shah"
console.log(user.naam)
