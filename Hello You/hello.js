document.getElementById("go").onclick = function() {
    var input = $("#input-box").val();
    var output = "Hello " + input;
    document.getElementById("output").innerHTML = output;
};
