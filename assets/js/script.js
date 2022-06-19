const laptop = 400000;

function calcular() {
    
    const input1 = document.querySelector('#form-control-cantidad'); // Se almacena en const input1 el valor ingresado por el usuario en el input form-control-cantidad
    const cantidad = Number(input1.value); //input.value se define como NUMERO
    
    const total = document.querySelector('#total');
    const quantity = document.querySelector('#cantidad');
    
    const input2 = document.querySelector('#form-control-color');
    const circle = document.getElementById('circle');
    

    total.innerHTML =  'Total: $' + cantidad * Number(laptop);
    quantity.innerHTML = 'Cantidad: ' + cantidad;
    circle.style.backgroundColor = input2.value;

}