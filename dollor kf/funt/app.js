let sonInput=document.getElementById('sonInput');
let funt=document.getElementById('funt');
let btn=document.getElementById('convert');
btn.addEventListener('click',()=>{
    let somVal=sonInput.value;
    funt.value=(somVal/13500).toFixed(2);
})