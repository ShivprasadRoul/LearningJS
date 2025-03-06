const obs1={
    name:"shiv",
    lname:"r",
    getfullname:function(){
        return `${this.name}${this.lname}`
    }
}

const obs2={
    name:"prasad",
    lname:"l",
    getfullname:function(){
        return `${this.name}${this.lname}`
    }
}

console.log(obs1.getfullname());
//console.log(obs2.getfullname()); which can be solved by adding this function in obs2 also 
// but it will violate this coding principle.... DRY: do not repeat your self

//to solve this we can make a class 

class person{
    constructor(fname="Shiv",lname="prasad"){
        this.fname=fname
        this.lname=lname
        }
        getfullname(){
            return `${this.fname}${this.lname}`
        }
}

const p1=new person()
const p2=new person("prasad","roul")

console.log(p1.getfullname());
console.log(p2.getfullname());
