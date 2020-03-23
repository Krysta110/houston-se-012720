class Image{

    constructor(title,url){
        this.title = title
        this.url = url
    }

    render(){
        let p = document.createElement("p")
        p.innerText = this.title

        let img = document.createElement("img")
        img.src = this.url

        document.body.append(p,img)
    }
}

// debugger

let imgForm = document.querySelector(".new-form")

imgForm.addEventListener("submit", () => {
    // e.preventDefault()
    event.preventDefault()


    let title = event.target[0].value
    let url = event.target[1].value

    let i = new Image(title,url)
    i.render()

})


class Person{
    constructor(name){
        this.name = name
    }
}

class Student extends Person{
    render(){
        let li = document.createElement('li')
        li.innerText = this.name+" I am a student!! "

        document.body.append(li)
    }
}

class Teacher extends Person{
    render(){
        let li = document.createElement('li')
        li.innerText = this.name+" I am a teacher!! "

        document.body.append(li)
    }
}

// debugger

let taskForm = document.querySelector('.task-form')

taskForm.addEventListener("submit", () => {
    event.preventDefault()


    // let  test =  new event.target[1].value(event.target[0].value)
    // test.render()

    switch(event.target[1].value){
        case "teacher":
            console.log("teacher")
            let t = new Teacher(event.target[0].value)
            t.render()
            break
        case "student":
            console.log("student")
            let s = new Student(event.target[0].value)
            s.render()
            break
        default:
            console.log("Not a good choice!!")    
    }
})