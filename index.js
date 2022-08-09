// var name = prompt("Enter your name")

// console.log(name)
// alert("Your name is "+name)

const btn = document.querySelector(".btn-primary")
const tarea = document.querySelector("#input-text")

const input1 = document.querySelector("input[name=translator]")
const allinput = document.querySelectorAll("input")

btn.addEventListener('click',_=>{
    let inputtxt = tarea.value
    console.log(inputtxt)
    console.log(input1.value)
    allinput.forEach(e=>{
        console.log(e.value)
    })
})