let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output");

function doAdd(){
    let calc= Number(one.value) + Number(two.value);

    if (calc < 0){
        calc.style.color = "red";
    }

    output.innerHTML = String(calc);
}

function doSubtract(){
    let calc= Number(one.value) - Number(two.value);

    if (calc< 0){
        calc.style.color = "red";
    }

    output.innerHTML = String(calc);
}

function doMultiply(){
    let calc = Number(one.value) * Number(two.value)

    if (calc < 0){
        calc.style.color = "red";
    }

    output.innerHTML = String(calc);
}

function doDivide(){
    let calc = Number(one.value) / Number(two.value)

    if (calc < 0){
        calc.style.color = "red";
    }

    output.innerHTML = String(calc);
}

function doPower(){
    let total = Number(one.value);

    for (let i = 1; i <= (Number(two.value)-1); i++){
        total *= Number(one.value);
    }

    if (total < 0){
        total.style.color = "red";
    }

    output.innerHTML = String(total);
}

function doClear(){
    one.value = "";
    two.value = "";
    output.innerHTML = "";
}