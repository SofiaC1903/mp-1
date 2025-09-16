let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output");

function doAdd(){
    output.innerHTML = String(Number(one.value) + Number(two.value));
}

function doSubtract(){
    output.innerHTML = String(Number(one.value) - Number(two.value));
}

function doMultiply(){
    output.innerHTML = String(Number(one.value) * Number(two.value));
}

function doDivide(){
    output.innerHTML = String(Number(one.value) / Number(two.value))
}

function doPower(){
    let total = Number(one.value);

    for (let i = 1; i <= (Number(two.value)-1); i++){
        total *= Number(one.value);
    }

    output.innerHTML = String(Number(total));
}

function doClear(){
    one.innerHTML = "";
    two.innerHTML = "";
    output.innerHTML = "";
}