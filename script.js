

let input = document.getElementById("input")


function appendToInput(value) {
    input.value += value;
}
function clean() {
    input.value = ''


}
function resultado() {
    let expressao = input.value; 
    input.value = eval(expressao); // Calcula a expressão

}




// const input = document.getElementById("input");

// const appendToInput = value => input.value += value;

// const clean = () => input.value = '';

// const resultado = () => input.value = eval(input.value);

















//buttonResult.addEventListener ('click', resultado)






//}