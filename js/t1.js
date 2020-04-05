
const xhr=new XMLHttpRequest();
const myapi='85a9290dac37771c709a50abe671f71f';
const xhr2=new XMLHttpRequest();
//const myapi2='9d5c6c556935afa554cef174e90914db';

document.getElementById('f1').addEventListener('submit',getWeather1);
function getWeather1(e)
{
    
    e.preventDefault();
    const lat=document.getElementById('lat').value;
    const long=document.getElementById('long').value;
    const url1=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${myapi}`;
    const url2=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${myapi}` ;
    const url3=`https://samples.openweathermap.org/data/2.5/forecast/h?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22`;
    

    setTimeout(function(){ 
        console.log("Second request");
        //Xhr2 request to another api
    xhr2.open('GET',url2,true);
    xhr2.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            console.log("Forcast Weather")
            console.log(this.responseText);
            let data=JSON.parse(this.responseText);
           forecastData(data);
           forecastHour(data);
        }
    }
   // xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Content-type", "application/json");
    xhr2.send();
    xhr2.onerror = () => console.log('There was an error!');



     }, 1);
    
    


     xhr.open('GET',url1,true);
    xhr.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            console.log(this.responseText);
            let data=JSON.parse(this.responseText);
            displayData(data)
        }
    }
   // xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
    xhr.onerror = () => console.log('There was an error!');

    
    
}
document.getElementById('f2').addEventListener('submit',getWeather2);
function getWeather2(e)
{
    e.preventDefault();
    const city=document.getElementById("city").value || "Islamabad"; 
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myapi}`;
    const url2=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${myapi}` ;

    xhr.open('GET',url,true);
    xhr.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            console.log(this.responseText);
            let data=JSON.parse(this.responseText);
            displayData(data)
        }
    }
   // xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
    xhr.onerror = () => console.log('There was an error!');
      

    setTimeout(function(){ 
        console.log("Second request");
        //Xhr2 request to another api
    xhr2.open('GET',url2,true);
    xhr2.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            console.log("Forcast Weather")
            console.log(this.responseText);
            let data=JSON.parse(this.responseText);
           forecastData(data);
           forecastHour(data);
        }
    }
   // xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Content-type", "application/json");
    xhr2.send();
    xhr2.onerror = () => console.log('There was an error!');



     }, 400);


    
}

document.getElementById('f3').addEventListener('submit',getWeather3);
function getWeather3(e)
{
    e.preventDefault();
    const city=document.getElementById('city1').value;
    const country=document.getElementById("country").value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${myapi}`;
    const url2=`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${myapi}` ;


    xhr.open('GET',url,true);
    xhr.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            console.log(this.responseText);
            let data=JSON.parse(this.responseText);
            console.log(data["coord"]);
            displayData(data)
        }
    }
   // xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
    xhr.onerror = () => console.log('There was an error!');

    setTimeout(function(){ 
        console.log("Second request");
        //Xhr2 request to another api
    xhr2.open('GET',url2,true);
    xhr2.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            console.log("Forcast Weather")
            console.log(this.responseText);
            let data=JSON.parse(this.responseText);
           forecastData(data);
           forecastHour(data);
        }
    }
   // xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Content-type", "application/json");
    xhr2.send();
    xhr2.onerror = () => console.log('There was an error!');



     }, 400);

   
}

var d;
function forecastData(data)
{
    d=(data["list"][1]["dt_txt"]);
    let x=8;
    for(let i=1; i<5; i++){
    document.querySelector(`#forecast${i}`).innerHTML="";
    let t=[(data["list"][x]["dt_txt"]).split(" ")];
    
    const dt=t[0][0];
    const tm=t[0][1];
    console.log(dt+tm);
    
    const markup=`${data["list"][x]["main"]["temp"]}°<span>${dt}<i><label class="fa fa-clock-o" aria-hidden="true"></label> ${tm}</i></span>`;
    document.querySelector(`#forecast${i}`).innerHTML=markup;
    x=x+8;


    }


}
function forecastHour(data)
{
    let x=8;
    for(let i=1;i<7; i++)
    {
    document.querySelector(`#t${i}`).innerHTML="";

    let t=[(data["list"][x]["dt_txt"]).split(" ")];
    const tm=t[0][1];
    tem=parseInt(data["list"][x]["main"]["temp"]);

    document.querySelector(`#t${i}`).innerHTML=`<h4>${tm}</h4>
    <h5>${tem}°</h5>`;
    x=x+1;
    }
}
function displayData(data)
{

    const temp=   (data["main"]["temp"]); //* (9/5) )+32 ;
    const deg= "°";
    const markup=`
    <ul>
    <text> Latitude : ${data["coord"]["lat"]}  Longitude : ${data["coord"]["lon"]}  </text>
    <text>  Weather Type :   ${data["weather"][0]["main"]} </text> <br>
    <text>  Temperature :  ${temp} ${deg}  </text> <br>
    <text>  Pressure :   ${data["main"]["pressure"]} </text> <br>
    <text>  Humidity :  ${data["main"]["humidity"]} </text>
    </ul>
    `;
const dt=new Date();
document.querySelector('#result').innerHTML="";
document.querySelector('#result').innerHTML=markup;
document.querySelector('#loc').innerHTML="";
document.querySelector('#loc').innerHTML=`<h2>${data["name"]} ,${data["sys"]["country"]} </h2>`;
document.querySelector('#time').innerHTML="";
document.querySelector('#time').innerHTML=`<p> <i class="fa fa-clock-o" aria-hidden="true"></i> TimeZone : ${data["timezone"]} </p> <br>` ;
console.log(d);

}
function setCurrent()
{
   

    let url=`https://api.openweathermap.org/data/2.5/weather?q=Rawalpindi&units=metric&appid=${myapi}`;
    //Xhr2 request to another api
    xhr2.open('GET',url,true);
    xhr2.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            console.log("Forcast Weather")
            console.log(this.responseText);
            let data=JSON.parse(this.responseText);
            if(data!=null)
            {
                //let t = [(data["list"][1]["dt_txt"]).split(" ")];
                //const dt = t[0][0];
                //const tm = t[0][1];
                const tem=   (data["main"]["temp"]);
                console.log(tem);
                document.querySelector('#st1').innerHTML="";
                document.querySelector('#st1').innerHTML=`<li><i>9:00 AM</i>Rawalpindi<span>${tem}°</span></li>`;
            }
        }
    }
   // xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Content-type", "application/json");
    xhr2.send();
    xhr2.onerror = () => console.log('There was an error!');



    url=`https://api.openweathermap.org/data/2.5/weather?q=Islamabad&units=metric&appid=${myapi}`;
    xhr3=new XMLHttpRequest();
    
    setTimeout(function(){ 
        console.log("Second request");
        //Xhr2 request to another api
    xhr3.open('GET',url,true);
    xhr3.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            console.log("Forcast Weather")
            console.log(this.responseText);
            let data=JSON.parse(this.responseText);
              //const tm = t[0][1];
              const tem=   (data["main"]["temp"]);
              console.log(tem);
              document.querySelector('#st2').innerHTML="";
              document.querySelector('#st2').innerHTML=`<li><i>9:00 AM</i>Islamabad<span>${tem}°</span></li>`;
          
        }
    }
   // xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    xhr3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Content-type", "application/json");
    xhr3.send();
    xhr3.onerror = () => console.log('There was an error!');



     }, 100);


     
          

}
