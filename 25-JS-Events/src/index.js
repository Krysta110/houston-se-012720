// document.addEventListener("DOMContentLoaded", function(){

    let btn = document.querySelector("button#button1")

    btn.addEventListener("click", function(){
        console.log("Tuesday!!")
    })
    
    let form = document.querySelector("form")
    
    form.addEventListener("submit", function(e){
        // debugger
        // event.preventDefault()
        e.preventDefault()
        // console.log("I am inside form event listener")
        // debugger
    
        let div = document.getElementById("comments-container")
    
        let comment = document.getElementById("new-comment").value
        // let comment = e.target[0].value
        let li = document.createElement("li")
        li.innerText = comment
    
        div.append(li)
        e.target.reset() //to reset the form
    })

    let btnDiv = document.querySelector("div#helicopter-parent")

    btnDiv.addEventListener("click", () => {
        // debugger
        // if (event.target.dataset.name === "alert"){
        //     alert("Are you sure??")
        // }

        switch(event.target.dataset.name){
            case "alert":
                alert("Are you sure??")
                break
            case "log":
                console.log("Are you sure??")
                break
            case "error":
                console.error("Are you sure??")
            break
            default: 
                console.log("clicked somewhere else!!!!")
        }
    })
// })

// function abc() {

// }

// let abc = () => {

// }



