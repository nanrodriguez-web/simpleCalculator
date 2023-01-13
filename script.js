// Store number

let firstNumberStore = [],
    secondNumberStore = [],
    resultNumberStore = [];

document.querySelectorAll(".numbers").forEach(function (number) {
    number.addEventListener("click", function () {
        firstNumberStore.push(number.innerHTML);
        let collectedNumber = firstNumberStore.join("");
        document.getElementById("displayNumber").innerHTML = collectedNumber;
    });
});

document.querySelectorAll(".operatorsButtons").forEach(function (operator) {
    let storedNumber = firstNumberStore;
    operator.addEventListener("click", function () {
        if (operator === "+") {
        }
    });
});

let clearButton = document.getElementById("buttonAC");
clearButton.addEventListener("click", function () {
    firstNumberStore.length = 0;
    secondNumberStore.length = 0;
    resultNumberStore.length = 0;
    document.getElementById("displayNumber").innerHTML =
        firstNumberStore.length;
    document.getElementById("displayNumber").innerHTML =
        secondNumberStore.length;
    document.getElementById("displayNumber").innerHTML =
        resultNumberStore.length;
});

let addNumber = document.getElementById("buttonPlus");
addNumber.addEventListener("click", function () {
    let firstNumber = firstNumberStore.join(""),
        secondNumber = secondNumberStore.join("");
    resultNumberStore.push(firstNumber + secondNumber);
});
