console.log("Front-end js")

fetch("http://localhost:3000/api/v1/instructors")
.then(res => res.json())
.then(data => console.log(data))