let namep=['shiv','prasad','roul']
console.log(namep);
//pop() method: The .pop() method first removes the last element of an array and then returns it."
let q=namep.pop()
console.log(q);
console.log(namep);

//Array Indicies: the place of first element of array is 0, and it can go to 2^32-1 and why?? cause it use 32 bit unassigned intiger to represent array index or you can say it can olny store this much of value 
//let maxarr=[]
//maxarr[4294967295]="element"
//console.log(maxarr)
//maxarr[4294967300]="lement"//this will cause memory overflow
//console.log(maxarr[-1])

//Array.form():The Array.from() static method creates a new, shallow-copied(what is shallow copy?:A shallow copy creates a new object but only copies references for nested objects, rather than duplicating them. This means that changes to nested objects affect both the original and copied objects because they share the same reference in memory.) Array instance from an iterable or array-like object.
//.at() takes an intiger value and return the item at that index allowing positive and negative intiger, and negative intiger counts from bck from the last element of array 

const arr1 =[1,2,3,4,5]
console.log(arr1.at(-1)) //basically we can acess the element of array by using this or by directly giving the index value

//concat() this function joins two array for eg 
const arr2=["s","h","i"]
console.log(arr1.concat(arr2));
// or you can use + opperation 
//console.log(arr1+arr2);//so this first converts them to string and then add them

//push() add one or more element to the end of array 
arr2.push("v")
console.log(arr2);

//unshift(): add element to the start of array  but do the remove the original element it shift to right hand side
arr2.unshift("v")
console.log(arr2);

//slice(): return a shalow copy of a portion of the array 
//console.log(arr2.slice(2,4));

//splice():The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//splice() method takes three parameters: index, deleteCount, and item(s) to insert.
//If you omit the deleteCount parameter, splice() will remove all elements from the index to the end of the array.
//If you omit the item(s) to insert parameter, splice() will remove the elements from the index to the end of the array.
//splice() returns the removed elements.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// foreach(): The forEach() method of Array instances executes a provided function once for each array element.
// The function is called for each element in the array, in ascending order
// The function takes three arguments: the value of the element, the index of the element, and
// the array object being traversed.









    







