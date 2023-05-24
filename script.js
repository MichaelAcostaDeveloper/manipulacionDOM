const h1 = document.querySelector('h1');
const ingreso1 = document.querySelector('#calculo1');
const ingreso2 = document.querySelector('#calculo2');
const btn1 = document.querySelector('#btnCalcular');
const btn2 = document.querySelector('#btnOtroCalculo');
const pResultado = document.querySelector('#result');
const formulario_form = document.querySelector('#formulario');

//btn1.addEventListener('click', concatenarValores);//-> para un boton
btn2.addEventListener('click',concatenarOtrosValores);
formulario_form.addEventListener('submit',concatenarValores);

function concatenarValores(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = ingreso1.value + ingreso2.value;
    pResultado.innerHTML = "Resultado " + sumaInputs;
}

function concatenarOtrosValores() {
    const sumaInputs = ingreso1.value + ingreso2.value;
    pResultado.innerHTML = "Resultado " + sumaInputs;
}