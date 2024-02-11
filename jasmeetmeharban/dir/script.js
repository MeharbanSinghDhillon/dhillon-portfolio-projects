
// $(document).ready(function(){
//     $("#center").onload(function(){
//         $("#center").slideToggle(100,
//     function loadImg(){
//         let randomNumber= Math.ceil(Math.random()*15);
//     let randomImages="jasmeet"+randomNumber+".jpeg";
//     let images="../photos/"+randomImages;
    
//     (document.getElementById("center").src=`${images}`)}

    
//       )})
//      }
//     );
 

function loadImg(){
    let randomNumber= Math.ceil(Math.random()*15);
let randomImages="jasmeet"+randomNumber+".jpeg";
let images="../photos/"+randomImages;

(document.getElementById("center").src=`${images}`)
}
setInterval(loadImg,3000);


function loadImg1(){
    let randomNumber= Math.floor(Math.random()*31+1);
    console.log(randomNumber)
let randomImages="jasmeet"+randomNumber+".jpg";
let images="../photo/"+randomImages;

(document.getElementById("center1").src=`${images}`)
}
setInterval(loadImg1,3000)

$(document).ready(function(){
$("#navbar").hide();
$("#dropdown").click(function(){
    $("#navbar").toggle("slow")
})
  
  });