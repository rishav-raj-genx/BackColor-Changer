let buttons = document.querySelectorAll(".button")
let body = document.querySelector("body")
let white = document.querySelector("#white");
let black = document.querySelector("#black");
let orange = document.querySelector("#orange");
let grey = document.querySelector("#grey");

buttons.forEach((byt)=>{
    byt.style.borderRadius = "50%";
    byt.style.height = "100px";
    byt.style.margin = "20px"
    byt.style.width = "100px";
 if(byt.id == "black") {
    byt.style.backgroundColor = "black";
    byt.style.color = "white";
} else  if(byt.id == "orange") {
    byt.style.backgroundColor = "orange";
    byt.style.color = "lavender";
} else  if(byt.id == "grey") {
    byt.style.backgroundColor = "grey";
    byt.style.color = "white";
} else  if(byt.id == "blue") {
    byt.style.backgroundColor = "blue";
    byt.style.color = "white";
}
})

body.style.height = "100vh"
body.style.width = "100vw"
body.style.display = "flex";
body.style.justifyContent = "center"
body.style.alignItems = "center"


buttons.forEach((but)=>{
    console.log(but);
    but.addEventListener('click',(color)=>{
        console.log(color);
        if(color.target.id === "blue"){
            body.style.backgroundColor = "blue";
        }
        else if(color.target.id === 'black'){
             body.style.backgroundColor = "black";
        }
        else if(color.target.id === 'orange'){
             body.style.backgroundColor = "orange";
        }
        else if(color.target.id === 'grey') {
            body.style.backgroundColor = "grey";
        }
    })
})