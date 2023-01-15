// Store number

let initialNumberStore = [],
    joinedNumbers = [],
    firstNumberStore = [0],
    finalNumberStore = [0],
    operatorStore = [],
    resultNumberStore = [0];
joinedNumbers.length = 1;

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
        initialNumberStore.push(storeHere);

        let collectedNumber = initialNumberStore.join("");
        document.getElementById("displayNumbers").innerHTML = collectedNumber;

        joinedNumbers.push(parseFloat(collectedNumber));

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
        console.log("This is joinedNumbers");
        console.log(joinedNumbers);
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
    resultNumberStore.push(0);
    operatorStore.length = 0;
    joinedNumbers.length = 0;
    document.getElementById("displayNumbers").innerHTML = 0;
    console.clear();
});

document.querySelectorAll(".operators").forEach(function (operators) {
    operators.addEventListener("click", function () {
        if (initialNumberStore.length < 0) {
            initialNumberStore.push(parseFloat(joinedNumbers.join("")));
        }
        let firstNumber = parseFloat(joinedNumbers[joinedNumbers.length - 1]);

        finalNumberStore.push(parseFloat(firstNumber));
        operatorStore.push(operators.value);

        let a = firstNumber,
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
        // finalNumberStore.splice(0, 1);
        resultNumberStore.splice(0, 1);
        joinedNumbers.splice(0, 1);

        console.log("This is finalNumberStore");
        console.log(finalNumberStore);
        console.log("This is firstNumberStore");
        console.log(firstNumberStore);
        console.log("This is resultNumberStore");
        console.log(resultNumberStore);
        console.log("This is initialNumberStore");
        console.log(initialNumberStore);
        console.log("This is joinedNumbers");
        console.log(joinedNumbers);
        console.log("This is currentoperator");
        console.log(operators.value);
        console.log("-------------------");
    });
});

let computeResult = document.getElementById("buttonEqual");
computeResult.addEventListener("click", function () {
    if (operatorStore.length > 0) {
        let firstNumber = parseFloat(joinedNumbers[joinedNumbers.length - 1]);

        let b = firstNumber,
            a = parseFloat(finalNumberStore[finalNumberStore.length - 1]),
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

        // initialNumberStore.push(
        //     resultNumberStore[resultNumberStore.length - 1]
        // );
        // initialNumberStore.splice(0, 1);

        // finalNumberStore.push(resultNumberStore[resultNumberStore.length - 1]);

        joinedNumbers.push(resultNumberStore[resultNumberStore.length - 1]);

        document.getElementById("displayNumbers").innerHTML =
            "=" + resultNumberStore[resultNumberStore.length - 1];

        finalNumberStore.push(
            parseFloat(joinedNumbers[joinedNumbers.length - 1])
        );
        initialNumberStore.slice(-1);
        resultNumberStore.length = 1;
        finalNumberStore.length = 1;

        console.log("This is finalNumberStore");
        console.log(finalNumberStore);
        console.log("This is firstNumberStore");
        console.log(firstNumberStore);
        console.log("This is resultNumberStore");
        console.log(resultNumberStore);
        console.log("This is initialNumberStore");
        console.log(initialNumberStore);
        console.log("This is joinedNumbers");
        console.log(joinedNumbers);
        console.log("This is currentoperator");
        console.log(operators.value);
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
