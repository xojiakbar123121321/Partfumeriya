let euro=document.getElementById('euro');
let btn=document.getElementById('convert');

btn.addEventListener('click',()=>{
    let somVal=sonInput.value;
 euro.value=(somVal/12240.62).toFixed(2);
})
