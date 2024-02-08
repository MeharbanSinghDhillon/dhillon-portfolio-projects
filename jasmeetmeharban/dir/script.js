function loadImg(){
    let randomNumber= Math.ceil(Math.random()*15);
let randomImages="jasmeet"+randomNumber+".jpeg";
let images="../photos/"+randomImages;

(document.getElementById("center").src=`${images}`)
}
setInterval(loadImg,3000)