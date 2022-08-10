const btn = document.querySelector(".btn-primary")
const tarea = document.querySelector("#input-text")
const oarea = document.querySelector(".output")

const btnyoda = document.querySelector(".yoda")
const btnshakes = document.querySelector(".shakespeare")

const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
const yoda = "https://api.funtranslations.com/translate/yoda.json"
const shakespeare = "https://api.funtranslations.com/translate/shakespeare.json"
const dogo = "https://api.funtranslations.com/translate/dogo.json"
const boston = "https://api.funtranslations.com/translate/boston.json"
const minion = "https://api.funtranslations.com/translate/minion.json"

let defaulttranslate = yoda

btnyoda.addEventListener("click",_=>{
    if(btnyoda.classList.contains("active")){
        btnyoda.classList.remove("active")
        btnshakes.classList.add("active")
        defaulttranslate = shakespeare
    }
    else{
        btnyoda.classList.add("active")
        btnshakes.classList.remove("active")
        defaulttranslate = yoda
    }
})

btnshakes.addEventListener("click",_=>{
    if(btnshakes.classList.contains("active")){
        btnyoda.classList.add("active")
        btnshakes.classList.remove("active")
        defaulttranslate = yoda
    }
    else{
        btnyoda.classList.remove("active")
        btnshakes.classList.add("active")
        defaulttranslate = shakespeare
    }
})

const setUrl = (type,custom)=>{
    return type+"?"+custom
}

const errorEvent = err=>console.log(err)

btn.addEventListener("click",_=>{
    let searchUrl = setUrl(defaulttranslate,"text="+tarea.value)
    console.log(searchUrl)
    fetch(searchUrl)
    .then(response=>response.json())
    .then(output=>{
        oarea.innerText = output.contents.translated
    })
    .catch(errorEvent)
    // fetch("https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json")
})