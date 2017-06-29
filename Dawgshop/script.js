document.getElementById('go').onclick = function() {
var inputText = $('#text-input').val();
var dawgifiedText = inputText + ", burned";
document.getElementById('output').innerHTML = dawgifiedText;
};
