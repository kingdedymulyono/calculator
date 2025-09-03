const display=document.getElementById("display")
const btn =document.getElementById("btn")
const btnClear =document.getElementById("btnClear")
let numpad = document.querySelectorAll(".numpad")
let i=0
// numpad.forEach((num)=>{
//     num.addEventListener("click",(e)=>{
//         console.log(e.target)
//         try{
//             addDisplay(e.target.querySelector("span").innerText.trim())
//         }catch{
//             addDisplay(e.target.querySelector("span").innerText)
//         }
//     })
// })
const addDisplay = (e) =>{
    if(i==0){
        display.value=e
        i=1;
        return
    }
    display.value+=e
}
btn.addEventListener("click",()=>{
    try{
        display.value=eval(display.value)
        i=0
    }catch(err){
        console.log('err', err)
        display.value=err
    }
})
btnClear.addEventListener("click",()=>{
    display.value=''
})

const addInteger = () =>{
    if(display.value.length>3){
        // console.log('first')
    }else{
        console.log('apacoba')
    }
}