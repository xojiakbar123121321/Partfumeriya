let sonInput=document.getElementById('sonInput');
let rubl=document.getElementById('rubl');
let euro=document.getElementById('euro');
let funt=document.getElementById('funt');
let dollor=document.getElementById('dollor');
let btn=document.getElementById('convert');


btn.addEventListener('click',()=>{
    let somVal=sonInput.value;
    console.log(somVal);
    rubl.value=(somVal/142.94).toFixed(0);
    euro.value=(somVal/12240.62).toFixed(2);
    funt.value=(somVal/13500).toFixed(2);
    dollor.value=(somVal/10840).toFixed(2);
})






