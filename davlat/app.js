let countries=document.querySelector('.countries');
let dropDownCon=document.querySelector('.dropDownCon');
let dropDown=document.querySelector('.dropDown');
let drop=document.querySelector('.drop');
let region=document.querySelectorAll('.region');
let toggleBtn=document.querySelector('.toggle');
let moon=document.querySelector('.moon');
toggleBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    moon.classList.toggle('fas');
})
window.addEventListener('DOMContentLoaded',()=>{
    getCountry();
})
async function getCountry(){
    let url=await fetch('https://restcountries.com/v2/all');
    let res=await url.json();
    res.forEach(item=>{
        showCountry(item)
    })
}
function showCountry(data){
    let country=document.createElement('div');
    country.classList.add('country');
    // console.log(country);
    country.innerHTML=`
    <div class="country-img">
                <img src="${data.flags["png"]}" alt="">
            </div>
            <div class="country-info">
                <h5 class="countryName">${data.name}</h5>
                <p class="regionName"><strong>Region: </strong>${data.region}</p>
                <p><strong>Population: </strong>${data.population}</p>
                <p><strong>Capital: </strong>${data.capital}</p>
                <p><strong>Borders: </strong>${data.borders}</p>
                </div>`

            countries.appendChild(country);
}
dropDown.addEventListener('click',()=>{
    drop.classList.toggle('showDropDown');
});
let saralash=document.getElementById('saralash');
let regionName=document.getElementsByClassName('regionName');
region.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        let elementData=e.target.innerHTML;
        saralash.innerHTML=elementData;
        drop.classList.add('showDropDown');
        Array.from(regionName).forEach((item)=>{
            // console.log(item);
            if(item.innerHTML.includes(elementData) || elementData.innerHTML=='All'){
                item.parentElement.parentElement.style.display='grid';
            }else{
                item.parentElement.parentElement.style.display='none';
            }
        })
    })
})

let search=document.getElementById('search');
let countryName=document.getElementsByClassName('countryName');
search.addEventListener('input',()=>{
    let searchValue=search.value;
    Array.from(countryName).forEach((element)=>{
        // console.log(element.innerText);
        if((element.innerHTML).toLowerCase().includes(searchValue.toLowerCase())){
            element.parentElement.parentElement.style.display='grid'
        }else{
            element.parentElement.parentElement.style.display='none'
        }
    })
})
