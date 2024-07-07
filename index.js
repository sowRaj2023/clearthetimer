let mainContainerEl = document.getElementById("mainContainer");

let divContainer = document.createElement("div");
divContainer.classList.add("text-center", "d-flex", "flex-column", "justify-content-center","m-5");
mainContainerEl.appendChild(divContainer);

let headingEl = document.createElement("h1");
headingEl.textContent = "Clear the counter timer";
divContainer.appendChild(headingEl);

let paraEl = document.createElement("p");
paraEl.textContent = "0";
divContainer.appendChild(paraEl);

let divContainers = document.createElement("div");
divContainer.appendChild(divContainers);

let buttonEl = document.createElement("button");
buttonEl.textContent = "Clear";
buttonEl.classList.add("btn", "bg-primary")
divContainers.appendChild(buttonEl);

let c = 0

let clearId = setInterval(function(){
    c = c + 1
    paraEl.textContent = c

},1000)

buttonEl.onclick = function(){
    clearInterval(clearId);
}
