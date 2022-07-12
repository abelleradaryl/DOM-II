import './less/index.less'

// Your code goes here!

const heading = document.querySelector(".logo-heading");
window.addEventListener("load", evt => {
    console.log(`Event ${evt.type} is activated`);
    heading.textContent = "SUPER FUN BUS"
    // console.log(heading)
  });

document.addEventListener("copy", () => {
    navigator.clipboard.readText()
        .then(text => {
            console.log(text)
            heading.textContent = text;
        })
})

document.addEventListener("keydown", evt => {
    if (evt.key === "Escape") {
        document.body.innerHTML = "<h1>NOT SO FUN BUS</h1>"
    }
})

const signButton = document.querySelector(".btn");
function launch() {
    heading.textContent = "Welcome To Fun Bus"
  }
  signButton.addEventListener("click", launch);



const destinations = document.querySelectorAll(".destination")
for (let destination of destinations) {
    destination.addEventListener("mouseover", evt => {
        destination.style.fontWeight = "bold"
    })
    destination.addEventListener("mouseleave", evt => {
        destination.style.fontWeight = "initial"
    })
}

document.body.addEventListener("dblclick", evt => {
    evt.target.innerHTML = "MAGIC BUS"
})



