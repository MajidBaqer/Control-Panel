var sliderA = document.querySelector(".sliderA");
var sliderB = document.querySelector(".sliderB");
var sliderC = document.querySelector(".sliderC");
var valueA = document.querySelector("#valueA");
var valueB = document.querySelector("#valueB");
var valueC = document.querySelector("#valueC");

valueA.innerHTML = sliderA.value;
sliderA.oninput = function() {
    valueA.innerHTML = this.value;
}

valueB.innerHTML = sliderB.value;
sliderB.oninput = function() {
    valueB.innerHTML = this.value;
}

valueC.innerHTML = sliderC.value;
sliderC.oninput = function() {
    valueC.innerHTML = this.value;
}