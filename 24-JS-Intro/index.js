console.log("hello world!!")

var a = 5
let b = 10
const c = 15

b = 20
// c = 25 throw error since c is const

let h4 = document.querySelector("h4")
h4.innerText = "Blake"

let pTag = document.createElement("p")
pTag.innerText = "Something...."
pTag.setAttribute("style", "color: green; font-size: 10px")

// debugger

let div = document.querySelector("div")
div.append(pTag) //until element is not append you will not see it on the DOM

div.innerHTML = "<h3> Hi!!! </h3>"


let image = document.createElement("img")
image.src = "giphy.gif"
// image.setAttribute("src", "giphy.gif")
div.append(image)

//different way to grab a particular element:

// let pTags = document.querySelectorAll("p") //array of all the p tags
// let finalP = pTags[2]

// let finalP = document.getElementById("change")

// let finalP = document.getElementByClassName("name")[0] //getElementByClassName returns an array

// let finalP = document.querySelector(".name")
// let finalP = document.querySelector("p.name")

// let finalP = document.querySelector("p#change")
let finalP = document.querySelector("#change")

finalP.innerText = "We Love Food!"