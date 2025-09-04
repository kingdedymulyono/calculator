const display = document.getElementById("display")
const btn = document.getElementById("btn")
const btnClear = document.getElementById("btnClear")
const history = document.getElementById("history")
const deleteBtn = document.getElementById("deleteBtn")

let numpad = document.querySelectorAll(".numpad")
let arrResult = []
let arrEval = []
let result
let i = 0

const addDisplay = (e) => {
    if (i == 0) {
        display.value = e
        i = 1;
        return
    }
    display.value += e
}
const addEval = () => {
    try {
        arrEval.push(display.value)
        let strEval=JSON.stringify(arrEval)
        localStorage.setItem("eval",strEval)
        if (display.value == '888-666') {
            display.value = 'matraman'
            return
        }
        display.value = eval(display.value)
        arrResult.push(display.value)
        let strResult=JSON.stringify(arrResult)
        localStorage.setItem("res",strResult)
        addHistory()
        i = 0
    } catch (err) {
        console.log('err', err)
        display.value = err
    }
}
btn.addEventListener("click", () => {
    addEval()
})
btnClear.addEventListener("click", () => {
    display.value = ''
})

// arrEval.push("2*2")
// arrResult.push("4")
const addHistory = () => {
    let parseEval=JSON.parse(localStorage.getItem("eval"))
    let parseRes=JSON.parse(localStorage.getItem("res"))
    for (let i = 0; i <= parseEval.length; i++) {
        if (parseEval[i] && parseRes[i]) {
            if (i == 0) {
                history.innerHTML = ''
            }
            if (parseEval[i] === parseRes[i]) {
                parseEval[i] = parseEval[i] + '*1'
            }
            history.innerHTML += `
        <li class="list-group-item">
                <span class=" text-secondary smalltext fw-light">${parseEval[i]}</span><br>
                <span>${parseRes[i]}</span>
        <i class="float-end  bi-clock-history"></i></li>
        `
        }
    }
}
addHistory()
deleteBtn.addEventListener("click", () => {
    arrEval = []
    arrResult = []
    let strEval=JSON.stringify(arrEval)
    let strRes=JSON.stringify(arrResult)

    localStorage.setItem("eval",strEval)
    localStorage.setItem("res",strRes)

    addHistory()

    location.reload()
})

window.addEventListener("keyup", (e) => {
    let lowerKey = e.key.toLowerCase()
    // if(lowerKey=='backspace'){
    //     console.log("Hapus woi")
    // }else if(lowerKey=='control' || lowerKey=='shift'){
    //     return
    // }else if(lowerKey=='enter'){
    //     addEval()
    // }else{
    //     addDisplay(e.key)
    // }
    if (
        lowerKey == '0' ||
        lowerKey == '1' ||
        lowerKey == '2' ||
        lowerKey == '3' ||
        lowerKey == '4' ||
        lowerKey == '5' ||
        lowerKey == '6' ||
        lowerKey == '7' ||
        lowerKey == '8' ||
        lowerKey == '9' ||
        lowerKey == '+' ||
        lowerKey == '+' ||
        lowerKey == '*' ||
        lowerKey == '-' ||
        lowerKey == '/'
    ) {
        addDisplay(e.key)
    }else if(lowerKey=='enter'){
        addEval()
    }else if(lowerKey=='delete'){
        display.value=''
    }else{
        console.log('apacoba')
    }
    console.log(e.key)
})