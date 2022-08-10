const btn = document.querySelector(".btn-primary")
const tarea = document.querySelector("#input-text")
const oarea = document.querySelector(".output")

const btnyoda = document.querySelector(".yoda")
const btnshakes = document.querySelector(".shakespeare")

const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
const yoda = "https://api.funtranslations.com/translate/yoda.json"
const shakespeare = "https://api.funtranslations.com/translate/shakespeare.json"
const dogo = "https://api.funtranslations.com/translate/doge.json"
const boston = "https://api.funtranslations.com/translate/boston.json"
const minion = "https://api.funtranslations.com/translate/minion.json"

const translateMappings = {
    "yoda":yoda,
    "shakespeare":shakespeare,
    "dogo":dogo,
    "boston":boston,
    "minion":minion
}

let defaulttranslate = yoda

const containerchildren = document.querySelectorAll(".btn")

containerchildren.forEach(c=>{
    c.addEventListener("click",_=>{
        if(!c.classList.contains("active")){
            containerchildren.forEach(btn=>{
                if(btn.classList.contains("active")){
                    btn.classList.remove("active")
                }
            })
            c.classList.add("active")
            defaulttranslate = translateMappings[c.classList[0]]

            console.log(defaulttranslate)

        }
    })
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
})