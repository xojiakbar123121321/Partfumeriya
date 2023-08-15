let sonInput=document.getElementById('sonInput');
let rubl=document.getElementById('rubl');
let btn=document.getElementById('convert');
btn.addEventListener('click',()=>{
    let somVal=sonInput.value;
    rubl.value=(somVal/142.94).toFixed(0);
    })