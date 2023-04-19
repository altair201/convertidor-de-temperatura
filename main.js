const tempInicial=document.getElementById("valnum")
const opc=document.getElementsByTagName('input')
const vista=document.getElementById("vista")
const info=document.getElementById("info")
const mercurio=document.getElementById("mercuri")
if(isNaN(tempInicial.value)){
    alert("No hay numero")
}
else{
    function convertir(){
        let resultado;
        if(opc[1].checked){
            resultado=+(tempInicial.value-32)*5/9;
        }
        else if(opc[2].checked){
            resultado=+(tempInicial.value*9/5)+32;
        }
        else{
            alert('No seleccionado')
        }
        if(resultado>100){
            mercurio.style.height=`100%`
        }
        else if(resultado<0){
            mercurio.style.height=0
        }
        else{
            mercurio.style.height=`${resultado}%`
        }
        vista.textContent=`${resultado.toFixed(2)}°`
        info.textContent=`${resultado.toFixed(2)}°`
        tempInicial.value=""
    }
}
