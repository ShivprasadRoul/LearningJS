function changebackground(color){
    document.body.style.backgroundColor=color
    document.body.style.color=(color === "black") ? "white" : "black";          
}

const darkbt=document.getElementById("darklight")

//or we can do

const whathappen=document.getElementById("darklight")
whathappen.addEventListener('click',function(){
    if(whathappen.innerText==='Dark'){
        whathappen.innerText='Light'
        changebackground('black')
    }
    else{
        whathappen.innerText='Dark'
        changebackground('white')
    }

})