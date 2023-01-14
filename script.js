// Store number

let initialNumberStore = [],
    firstNumberStore = [0],
    finalNumberStore = [0],
    operatorStore = [],
    resultNumberStore = [0];

document.querySelectorAll(".modifier").forEach(function (modifier) {
    modifier.addEventListener("click", function () {
        let a = modifier.value;
        if (initialNumberStore.indexOf(a) === -1) {
            initialNumberStore.push(a);
        }
        let collectedNumber = initialNumberStore.join("");
        document.getElementById("displayNumbers").innerHTML = collectedNumber;
    });
});
document.querySelectorAll(".numbers").forEach(function (number) {
    number.addEventListener("click", function () {
        let storeHere = number.value;
        initialNumberStore.push(parseInt(storeHere));
        let collectedNumber = initialNumberStore.join("");
        document.getElementById("displayNumbers").innerHTML = collectedNumber;

        if (collectedNumber <= 0) {
            initialNumberStore.slice(0, collectedNumber.length);
        }
        console.log("This is finalNumberStore");
        console.log(finalNumberStore);
        console.log("This is firstNumberStore");
        console.log(firstNumberStore);
        console.log("This is resultNumberStore");
        console.log(resultNumberStore);
        console.log("This is initialNumberStore");
        console.log(initialNumberStore);
        console.log("-----------------");

        let myH1 = document.getElementById("displayNumbers");
        if (initialNumberStore.length > 10) {
            myH1.style.fontSize = "2.5rem";
        }
        if (initialNumberStore.length < 10) {
            myH1.style.fontSize = "3.5rem";
        }
    });
});

let clearButton = document.getElementById("buttonAC");
clearButton.addEventListener("click", function () {
    initialNumberStore.length = 0;
    initialNumberStore.push();
    firstNumberStore.length = 1;
    firstNumberStore.push();
    finalNumberStore.length = 0;
    finalNumberStore.push(0);
    resultNumberStore.length = 0;
    resultNumberStore.push();
    operatorStore.length = 0;
    document.getElementById("displayNumbers").innerHTML = 0;
});

document.querySelectorAll(".operators").forEach(function (operators) {
    operators.addEventListener("click", function () {
        let firstNumber = initialNumberStore.join("");
        firstNumberStore.push(parseInt(firstNumber));
        operatorStore.push(operators.value);
        firstNumberStore.splice(0, 1);

        let a = parseFloat(firstNumberStore[0]),
            b = parseFloat(finalNumberStore[finalNumberStore.length - 1]),
            result;

        if (operators.value === "+") {
            result = a + b;
            resultNumberStore.push(result);
        } else if (operators.value === "-") {
            result = a - b;
            resultNumberStore.push(result);
        } else if (operators.value === "x") {
            result = a * b;
            resultNumberStore.push(result);
        } else if (operators.value === "/") {
            result = a / b;
            resultNumberStore.push(result);
        }

        initialNumberStore.length = 0;
        finalNumberStore.push(resultNumberStore[resultNumberStore.length - 1]);

        console.log("This is finalNumberStore");
        console.log(finalNumberStore);
        console.log("This is firstNumberStore");
        console.log(firstNumberStore);
        console.log("This is resultNumberStore");
        console.log(resultNumberStore);
        console.log("This is initialNumberStore");
        console.log(initialNumberStore);
        console.log("This is currentoperator");
        console.log(operators.value);
        console.log("-------------------");
    });
});

let computeResult = document.getElementById("buttonEqual");
computeResult.addEventListener("click", function () {
    if (operatorStore.length > 0) {
        let a = parseFloat(finalNumberStore[finalNumberStore.length - 1]),
            b = parseFloat(initialNumberStore[initialNumberStore.length - 1]),
            result;

        let operators = operatorStore[operatorStore.length - 1];
        if (operators === "+") {
            result = a + b;
            resultNumberStore.push(parseFloat(result));
        } else if (operators === "-") {
            result = a - b;
            resultNumberStore.push(parseFloat(result));
        } else if (operators === "x") {
            result = Math.imul(a, b);
            resultNumberStore.push(parseFloat(result));
        } else if (operators === "/") {
            result = a / b;
            resultNumberStore.push(parseFloat(result));
        }

        let collectedNumberStore = parseInt(initialNumberStore.join(""));
        finalNumberStore.push(collectedNumberStore);
        if (initialNumberStore.length > 0) {
            initialNumberStore.length = 0;
            initialNumberStore.push(0);
        }
        let presentResult = parseFloat(
            resultNumberStore[resultNumberStore.length - 1]
        );

        finalNumberStore.push(resultNumberStore[resultNumberStore.length - 1]);

        document.getElementById(
            "displayNumbers"
        ).innerHTML = `= ${presentResult}`;

        console.log("this is when pressed equal");
        console.log("This is finalNumberStore");
        console.log(finalNumberStore);
        console.log("This is firstNumberStore");
        console.log(firstNumberStore);
        console.log("This is resultNumberStore");
        console.log(resultNumberStore);
        console.log("This is initialNumberStore");
        console.log(initialNumberStore);
        console.log("-------------------");
    }
});

// Need deBug
let removeNumber = document.querySelector("h1");
removeNumber.addEventListener("click", function () {
    if (initialNumberStore.length >= 0) {
        initialNumberStore.pop();
        document.getElementById("displayNumbers").innerHTML =
            initialNumberStore.join("");
    }

    // if (resultNumberStore.length > 1) {
    //     initialNumberStore.length = 0;
    //     initialNumberStore.push();
    //     firstNumberStore.length = 1;
    //     firstNumberStore.push();
    //     finalNumberStore.length = 0;
    //     finalNumberStore.push(0);
    //     resultNumberStore.length = 0;
    //     resultNumberStore.push();
    //     operatorStore.length = 0;
    //     document.getElementById("displayNumbers").innerHTML = 0;
    // } else {

    // }
});
