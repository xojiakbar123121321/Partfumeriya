let sonInput=document.getElementById('sonInput');
let dollor=document.getElementById('dollor');
let btn=document.getElementById('convert');

btn.addEventListener('click',()=>{
    let somVal=sonInput.value;
   dollor.value=(somVal/10840).toFixed(2);
})