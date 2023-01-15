let initialNumberStore = [],
    joinedNumbers = [],
    finalNumberStore = [],
    resultNumberStore = [],
    operatorStore = [];
console.log(operatorStore);
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
            if (joinedNumbers.length > 0) {
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
    let count = resultNumberStore.length;
    console.log(count);

    if (count > 1) {
        if (joinedNumbers.length > 1) {
            let operator = operatorStore[operatorStore.length - 1],
                b = parseFloat(joinedNumbers[joinedNumbers.length - 1]),
                a = parseFloat(resultNumberStore[resultNumberStore.length - 2]),
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
            document.getElementById("displayNumbers").innerHTML = result;
        }
    } else {
        let operator = operatorStore[operatorStore.length - 1],
            a = parseFloat(joinedNumbers[joinedNumbers.length - 3]),
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
        document.getElementById("displayNumbers").innerHTML =
            resultNumberStore[resultNumberStore.length - 1];
    }
});

let clearAll = document.getElementById("buttonAC");
clearAll.addEventListener("click", function (e) {
    initialNumberStore.length = 0;
    joinedNumbers.length = 0;
    finalNumberStore.length = 0;
    resultNumberStore.length = 0;
    operatorStore.length = 0;
    document.getElementById("displayNumbers").innerHTML = 0;
    console.clear();
});
