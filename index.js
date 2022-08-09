// var name = prompt("Enter your name")

// console.log(name)
// alert("Your name is "+name)

const btn = document.querySelector(".btn-primary")
const tarea = document.querySelector("#input-text")
const oarea = document.querySelector(".output")

// const input1 = document.querySelector("input[name=translator]")
// const allinput = document.querySelectorAll("input")

// btn.addEventListener('click',_=>{
//     let inputtxt = tarea.value
//     console.log(inputtxt)
//     console.log(input1.value)
//     allinput.forEach(e=>{
//         console.log(e.value)
//     })
// })

btn.addEventListener("click",_=>{
    let ip = tarea.value
    console.log(ip)
    //oarea.innerHTML = ip
    oarea.innerHTML = ip
    const op2 = document.createTextNode(ip+" This is using create Text Node")
    document.querySelector("body").appendChild(op2)

    const op3 = document.createTextNode(oarea.innerText+" This is using insert before")
    document.body.insertBefore(op3,oarea)
})