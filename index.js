// var name = prompt("Enter your name")

// console.log(name)
// alert("Your name is "+name)

const btn = document.querySelector(".btn-primary")

btn.addEventListener('click',_=>{
    console.log("btn clicked")
    setTimeout(() => {
        alert("button-clicked")
    }, 5000);
})