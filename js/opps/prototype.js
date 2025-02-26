let computer ={
    cpu: 12
}
let lenovo={
    screen:"HD",
    __proto__: computer,
}
//console.log(`lenovo:`,lenovo.__proto__)

let gencar={
    tyre:4
}

let tesla={
    driver:"ai",
  //  __proto__:gencar
}

Object.setPrototypeOf(tesla,gencar)

//console.log(`tesla`,tesla); //but what about generic class ??
console.log(`tesla tire`, Object.getPrototypeOf(tesla));

