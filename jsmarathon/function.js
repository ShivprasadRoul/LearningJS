//here we will try to understand functions 
//function declaration
function greet(name){
    console.log(`${name}`);     
}

greet("Shiv")
greet("prasad")

let globalVar="i am global"
function modifyGlobal(){
    globalVar="I am Modified"
    let blockScoped="I am block scoped"
    console.log(blockScoped);
}
console.log(globalVar);
modifyGlobal()
console.log(globalVar);

//function expression
let config=function(){}
config()

//or we can do if the function is needed once  so we can do this and called "IIFE iMMEDIATIATELY iNVOKED fUNCTION eXPRESSION" AND IT RUN AS SOON AS IT IS DEFINED. 
//let config1=function(){}()
//or this way
//(()=>{})


let per1={
    name:"ravi",
    greet1: function(){
        console.log(`Hello ${this.name}`); //`this` gives us the context to this function
    }
}

let per2={
    name:"shiv"
}
//let person1 have greet so can we something in which i use greet method of per1 but the method are used of person 2 and this will modify context and pass context
per1.greet1.call(per2)//op Hello shiv
//why not use bind?? cause brind return a different function while call return the val 
//let say i have to use bind
let newGreet=per1.greet1.bind(per2)
newGreet()

const obj={
    perName:"shiv",
    greet:function(){
        console.log(`hello ${this.perName}`);
        
    }
}

//setTimeout(obj1.greet,2*1000) //but it shows undefined but why??//cause of call stack
//setTimeout(function(){console.log("hoiiiii");},1000*2)
//lol settimeout is not part of js but parrt of browser  
// and how to solve?? by using bind obj1.greet.bind(obj1)
//setTimeout(()=>{console.log("I am delayed");},0)

