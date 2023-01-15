let initialNumberStore = [],
    joinedNumbers = [],
    finalNumberStore = [],
    resultNumberStore = [],
    operatorStore = [];

document.querySelectorAll(".numbers").forEach(function (number) {
    number.addEventListener("click", function () {
        initialNumberStore.push(number.value);
        joinedNumbers.push(parseFloat(initialNumberStore.join("")));
        document.getElementById("displayNumbers").innerHTML =
            initialNumberStore.join("");
    });
});

document.querySelectorAll(".operators").forEach(function (operators) {
    operators.addEventListener("click", function () {
        if (joinedNumbers.length > 0) {
            operatorStore.push(operators.value);
            finalNumberStore.push(joinedNumbers[joinedNumbers.length - 1]);
            initialNumberStore.length = 0;
            resultNumberStore.push(joinedNumbers[joinedNumbers.length - 1]);
            resultNumberStore.push(operators.value);
            console.log(resultNumberStore);
        }
    });
});

let computeResult = document.getElementById("buttonEqual");
computeResult.addEventListener("click", function () {
    resultNumberStore.push(joinedNumbers[joinedNumbers.length - 1]);
    let result = eval(resultNumberStore.join(""));

    document.getElementById("displayNumbers").innerHTML = `= ${result}`;
    resultNumberStore.length = 0;
    resultNumberStore.push(parseFloat(result));
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
