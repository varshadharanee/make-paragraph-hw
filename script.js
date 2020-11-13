function show_para1() {
    var inputs = [];
    for (var i = 1 ; i <=6 ; i++){
        inputs.push(document.getElementById("para1_input"+i).value);
    }
    document.getElementById("paragraph_1").innerHTML = inputs.join("  "); 
}

function show_para2() {
    var inputs = [];
    for (var i = 1 ; i <=6 ; i++){
        inputs.push(document.getElementById("para2_input"+i).value);
    }
    document.getElementById("paragraph_2").innerHTML = inputs.join("  "); 
}