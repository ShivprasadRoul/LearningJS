console.log("hi");
setTimeout(()=>console.log("hi 1 settimeout task"),0);
setTimeout(()=>console.log("hi 2 settimeout task"),0);

Promise.resolve().then(()=>{
    console.log("promise wala chal raha 1")
    Promise.resolve().then(()=>{
        console.log("promise wala chal raha 2")
        Promise.resolve().then(()=>{
            console.log("promise wala chal raha 3")
        })
    })
})

setTimeout(()=>console.log("hi 3 settimeout task"),0);
//write pollyfil for it 