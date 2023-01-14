// Store number

let initialNumberStore = [0],
    firstNumberStore = [],
    finalNumberStore = [0],
    operatorStore = [],
    resultNumberStore = [0];

document.querySelectorAll(".numbers").forEach(function (number) {
    number.addEventListener("click", function () {
        initialNumberStore.push(number.value);
        let collectedNumber = parseInt(initialNumberStore.join(""));
        document.getElementById("displayNumbers").innerHTML = collectedNumber;
        if (collectedNumber <= 0) {
            initialNumberStore.slice(0, collectedNumber.length);
        }
        firstNumberStore.push(collectedNumber);

        console.log(finalNumberStore);
        console.log(firstNumberStore);
        console.log(resultNumberStore);
    });
});

let clearButton = document.getElementById("buttonAC");
clearButton.addEventListener("click", function () {
    initialNumberStore.length = 0;
    initialNumberStore.push(0);
    firstNumberStore.length = 0;
    firstNumberStore.push(0);
    finalNumberStore.length = 0;
    finalNumberStore.push(0);
    resultNumberStore.length = 0;
    resultNumberStore.push(0);
    operatorStore.length = 0;
    document.getElementById("displayNumbers").innerHTML = 0;
});

document.querySelectorAll(".operators").forEach(function (operators) {
    operators.addEventListener("click", function () {
        let a = parseInt(resultNumberStore[resultNumberStore.length - 1]),
            b = parseInt(initialNumberStore[initialNumberStore.length - 1]);

        if (operators.value === "+") {
            result = a + b;
            resultNumberStore.push(result);
        } else if (operators.value === "-") {
            result = a - b;
            resultNumberStore.push(result);
        } else if (operators.value === "*") {
            result = a * b;
            resultNumberStore.push(result);
        } else if (operators.value === "/") {
            result = a / b;
            resultNumberStore.push(result);
        }

        let collectedNumberStore = parseInt(initialNumberStore.join(""));
        finalNumberStore.push(collectedNumberStore);
        if (initialNumberStore.length > 0) {
            initialNumberStore.length = 0;
            initialNumberStore.push(0);
        }

        operatorStore.push(operators.value);

        console.log(finalNumberStore);
        console.log(initialNumberStore);
        console.log(operatorStore);
        console.log(resultNumberStore);
        console.log(operators.value);
    });
});

let computeResult = document.getElementById("buttonEqual");
computeResult.addEventListener("click", function () {
    let a = parseInt(resultNumberStore[resultNumberStore.length - 1]),
        b = firstNumberStore[firstNumberStore.length - 1];

    let operators = operatorStore[operatorStore.length - 1];
    if (operators === "+") {
        result = a + b;
        resultNumberStore.push(result);
    } else if (operators === "-") {
        result = a - b;
        resultNumberStore.push(result);
    } else if (operators === "*") {
        result = a * b;
        resultNumberStore.push(result);
    } else if (operators === "/") {
        result = a / b;
        resultNumberStore.push(result);
    }

    let collectedNumberStore = parseInt(initialNumberStore.join(""));
    finalNumberStore.push(collectedNumberStore);
    if (initialNumberStore.length > 0) {
        initialNumberStore.length = 0;
        initialNumberStore.push(0);
    }
    document.getElementById("displayNumbers").innerHTML =
        resultNumberStore[resultNumberStore.length - 1];
    console.log("this is when pressed equal");
    console.log(finalNumberStore);
    console.log(initialNumberStore);
    console.log(operatorStore);
    console.log(resultNumberStore);
});

// Need deBug
let removeNumber = document.querySelector("h1");
removeNumber.addEventListener("click", function () {
    if (initialNumberStore.length >= 0) {
        initialNumberStore.pop();
        let collectedNumber = parseInt(initialNumberStore.join(""));
        document.getElementById("displayNumbers").innerHTML = collectedNumber;
    } else {
        return false;
    }
});
