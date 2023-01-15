let initialNumberStore = [],
    joinedNumbers = [],
    finalNumberStore = [],
    resultNumberStore = [],
    operatorStore = [];

document.querySelectorAll(".numbers").forEach(function (number) {
    number.addEventListener("click", function () {
        console.log(number.value);
        initialNumberStore.push(number.value);
        joinedNumbers.push(parseFloat(initialNumberStore.join("")));
        document.getElementById("displayNumbers").innerHTML =
            initialNumberStore.join("");

        console.log("this is result");
        console.log(resultNumberStore);
        console.log("this is JoinNumbers");
        console.log(joinedNumbers);
        console.log("end of number query");
        console.log("----------------------------");
    });
});

function compute() {
    document.querySelectorAll(".operators").forEach(function (operators) {
        operators.addEventListener("click", function () {
            if (initialNumberStore.length > 0) {
                operatorStore.push(operators.value);
                console.log(operatorStore);

                let operator = operatorStore[operatorStore.length - 1],
                    a = parseFloat(joinedNumbers[joinedNumbers.length - 2]),
                    b = parseFloat(joinedNumbers[joinedNumbers.length - 1]),
                    result;

                switch (operator) {
                    case "+":
                        result = a + b;
                        resultNumberStore.push(result);
                        console.log(result);
                        break;
                    case "-":
                        result = a - b;
                        resultNumberStore.push(result);
                        console.log(result);
                        break;
                    case "x":
                        result = a * b;
                        resultNumberStore.push(result);
                        console.log(result);
                        break;
                    case "/":
                        result = a / b;
                        resultNumberStore.push(result);
                        console.log(result);
                        break;
                    default:
                        console.log("error: unknown operator");
                }

                console.log("this is first number");
                console.log(a);
                console.log("this is second number");
                console.log(b);

                initialNumberStore.length = 0;
            }
        });
    });
}
compute();

let computeResult = document.getElementById("buttonEqual");
computeResult.addEventListener("click", function () {
    if (joinedNumbers.length > 1) {
        let operator = operatorStore[operatorStore.length - 1],
            a = parseFloat(joinedNumbers[joinedNumbers.length - 2]),
            b = parseFloat(joinedNumbers[joinedNumbers.length - 1]),
            result;

        switch (operator) {
            case "+":
                result = a + b;
                resultNumberStore.push(result);
                console.log(result);
                break;
            case "-":
                result = a - b;
                resultNumberStore.push(result);
                console.log(result);
                break;
            case "x":
                result = a * b;
                resultNumberStore.push(result);
                console.log(result);
                break;
            case "/":
                result = a / b;
                resultNumberStore.push(result);
                console.log(result);
                break;
            default:
                console.log("error: unknown operator");
        }

        console.log("this is first number");
        console.log(a);
        console.log("this is second number");
        console.log(b);
        initialNumberStore.length = 0;
    }

    document.getElementById("displayNumbers").innerHTML =
        resultNumberStore[resultNumberStore.length - 1];
});
