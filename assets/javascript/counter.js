console.log("hello world");

let incrementButton = document.querySelector("#increment");
let decrementButton = document.querySelector("#decrement"); 
let counter = document.querySelector("#counter");

incrementButton.addEventListener("click", function() {
    let newCounterValue = parseInt(counter.innerHTML) + 1;

    if (newCounterValue >= 10) {
        counter.style.color = "red";
    }

    counter.innerHTML = newCounterValue;
});

decrementButton.addEventListener("click", function() {
    let newCounterValue = parseInt(counter.innerHTML) - 1;

    if (newCounterValue < 10) {
        counter.style.color = "black";
    }

    if (counter.innerHTML > 0) {
        counter.innerHTML = newCounterValue;
    }
});