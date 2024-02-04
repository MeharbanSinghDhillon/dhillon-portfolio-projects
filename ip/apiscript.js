fetch('https://get.geojs.io/v1/ip/geo.json')
.then((response) => {
    return response.json()
})
.then((data) => {
   document.querySelector(".inner:nth-child(1)").innerHTML=`Country : ${data.country.capitized()}`; 
   document.querySelector("p:nth-child(2)").innerHTML=`Country_code3 : ${data.country_code3.toUpperCase()}`; 
   document.querySelector("p:nth-child(3)").innerHTML=`Longitude : ${data.longitude.capitized()}`; 
   document.querySelector("p:nth-child(4)").innerHTML=`Latitude : ${data.latitude}`;  
   document.querySelector("p:nth-child(5)").innerHTML=`Accuracy : ${data.accuracy}`; 
   document.querySelector("p:nth-child(6)").innerHTML=`Timezone : ${data.timezone}`;  
   document.querySelector("p:nth-child(7)").innerHTML=`Organization : ${data.organization}`; 
   document.querySelector("p:nth-child(8)").innerHTML=`Area_Code : ${data.area_code}`;  
   document.querySelector("p:nth-child(9)").innerHTML=`ASN : ${data.asn}`;  
   document.querySelector("p:nth-child(10)").innerHTML=`Organization_Name : ${data.accuracy}`;  
   document.querySelector("p:nth-child(11)").innerHTML=`IP : ${data.ip}`;  
   document.querySelector("p:nth-child(12)").innerHTML=`City : ${data.city}`; 
   document.querySelector("p:nth-child(13)").innerHTML=`Continent_Code : ${data.continent_code}`;  
   document.querySelector("p:nth-child(14)").innerHTML=`Country_Code : ${data.accuracy}`;  
   
})
.catch((error) => console.log(error))

Object.prototype.capitized= function (){
    return (this.substring(0,1)).toUpperCase()+(this.substring(1,this.length)).toLowerCase();
}

