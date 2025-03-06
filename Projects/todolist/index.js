let inputdield=document.getElementById("taskentry")
let submitbutton=document.getElementById("submitbutton")
let todoitemcontainer=document.getElementById("todoitems")
submitbutton.addEventListener("click",()=>{
    let content=inputdield.value
    // console.log("user input is:", content)
    const li=document.createElement("li")
    const del=document.createElement("button")
    del.innerText="X"
    li.innerText=content
    li.appendChild(del)
    todoitemcontainer.append(li)
    inputdield.value=""

    del.addEventListener("click",()=>{
        li.remove()
    })
    
})