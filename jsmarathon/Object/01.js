const person={
    x:10,
    firstname: "Shiv",
    lastname:"Roul",
    getfullname: function(){
        return "Shivprasad Roul"
    },
    address: {
        hno: 1,
        street:1,
        countryCode:"in",
        state:"Gj"
    } 
}

console.log(person.address.countryCode);

const fname="shiv"
console.log(typeof(fname));

let fname2=fname
console.log(typeof(fname2));

let p1='shiv'
let p2=p1
p2='prasad'
console.log(p1);

let o1={
    fname:"shiv",
    lname:"roul",
    address: {
        hno: 1,
        street:1,
        countryCode:"in",
        state:"Gj"
    } 
}
// let o2={
//     fname:o1.fname,
//     lname: o1.lname
// }

// or i can use spread opperator (...) and it do not work on inner object and make shallow copy

let o2={
    ...o1
}

// here o1 and o2 have different memory address in heap
//o2.fname="prasad"

// let o2=o1
// o2.fname="prasad"

console.log(o1);
console.log(o2);
//deep copy by converting the object to sting then copying the string and making it to a different object
const o1kastring=JSON.stringify(o1) //changes the object to string
console.log(o1kastring);
let p2new= JSON.parse(o1kastring) //changes string to object
p2new.address.hno= 3
console.log(p2new);


