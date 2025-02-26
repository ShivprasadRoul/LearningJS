//alert("connected") //will give popup which says connected 

//dom manipulation
//get element 
//event listining 
//this is eg 1 which i will grab a element 
document.getElementById('changebuttontext').addEventListener('click',function (){
    let para=document.getElementById("mypara")
    //console.log(para.textContent);
    para.textContent="hello world the para is changed due to you"
})

//eg 2
document.getElementById('highlightfirst').addEventListener('click',function (){
    let hold=document.getElementById('citieslist')
    //console.log(hold.firstElementChild);
    hold.firstElementChild.classList.add('highlight')
})

//eg 3
document.getElementById('changeorder').addEventListener('click',function (){
    let coffeetype=document.getElementById('coffeetype')
    coffeetype.textContent="espresso";
    coffeetype.style.backgroundColor="brown";
    coffeetype.style.padding="5px"
})

//eg4
document.getElementById('addnewitem').addEventListener('click',function (){
    let newitem=document.createElement('li')
    newitem.textContent="eggs"
    document.getElementById('shopinglist').appendChild(newitem)    
})
//eg5
document.getElementById('removelasttask').addEventListener('click',function (){
    let tl=document.getElementById('tasklist')
    //console.log(tl.childElementCount());
    tl.lastElementChild.remove()
})

//eg7
document.getElementById('teaList').addEventListener('click',function(event){
    if(event.target && event.target.matches('.teaItem')){
        alert(`you selected ${event.target.textContent}`)
    }    
})

//form handling
document.getElementById("feedbackForm").addEventListener('submit',function(event){
    
})