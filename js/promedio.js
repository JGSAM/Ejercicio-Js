function notas(){
let nota1;
let nota2;
let nota3;
let resultado;
let num1=document.getElementById('num1').value;
let num2=document.getElementById('num2').value;
let num3=document.getElementById('num3').value;
let imprimir = document.getElementById('salida');
nota1=parseFloat(num1);
nota2=parseFloat(num2);
nota3=parseFloat(num3);
resultado=(nota1+nota2+nota3)/3;
imprimir.innerHTML=(`El promedio es: ${resultado}`);
}
if (resultado >= 7) 
            document.write('Promocionado');
    
    else (resultado <= 7) 
            document.write('Reprobado');
    
/* nota1 = parseInt(prompt('Ingrese primer nota'));
        nota2 = parseInt(prompt('Ingrese segunda nota'));
        nota3 = parseInt(prompt('Ingrese tercer nota'));
let suma;
        suma = nota1 + nota2 + nota3;
let promedio;
    promedio = suma / 3;
    if (promedio >= 7) 
            document.write('Promocionado');
    
    else (promedio <= 7) 
            document.write('Reprobado');*/

    

            