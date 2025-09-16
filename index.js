let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output");

function doAdd(){
    let calc= Number(one.value) + Number(two.value);

    if (calc < 0){
        output.style.color = "red";
    }
    else{
        output.style.color = "black";
    }

    output.innerHTML = String(Number(calc));
}

function doSubtract(){
    let calc= Number(one.value) - Number(two.value);

    if (calc< 0){
        output.style.color = "red";
    }
    else{
        output.style.color = "black";
    }

    output.innerHTML = String(Number(calc));
}

function doMultiply(){
    let calc = Number(one.value) * Number(two.value)

    if (calc < 0){
        output.style.color = "red";
    }
    else{
        output.style.color = "black";
    }

    output.innerHTML = String(Number(calc));
}

function doDivide(){
    let calc = Number(one.value) / Number(two.value)

    if (calc < 0){
        output.style.color = "red";
    }
    else{
        output.style.color = "black";
    }

    output.innerHTML = String(Number(calc));
}

function doPower(){
    let total = 1;

    for (let i = 1; i <= Number(two.value); i++){
        total *= Number(one.value);
    }

    if (total < 0){
        output.style.color = "red";
    }
    else{
        output.style.color = "black";
    }

    output.innerHTML = String(Number(total));
}

function doClear(){
    one.value = "";
    two.value = "";
    output.innerHTML = "";
}