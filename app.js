// Markaziy Bank Tekin API
let api='https://nbu.uz/en/exchange-rates/json/';
let cur=document.querySelector('.cur');
let date=document.querySelector('.date')
window.addEventListener('DOMContentLoaded',()=>{
    getData()
})
async function getData(){
    let url=await fetch(api)
    let res=await url.json()
    console.log(res);
    res.forEach(item=>{
        showCurrency(item);
    })
}
function showCurrency(data){
    let currDate=new Date(data.date)
    let h4=currDate.toLocaleDateString();
    date.innerHTML=`${h4} Markaziy bank`
    // console.log(h4);
    // console.log(currDate);
    let tr=document.createElement('tr');
    tr.innerHTML=`
        <td><img src="icons/${data.code}.png"
        alt="code" width="50">
        <strong> 1 ${data.title}</strong>
        </td>
        <td>${data.code}</td>5

        
        <td>${data.cb_price}</td>
        `
        cur.appendChild(tr);
    // console.log(data);
}