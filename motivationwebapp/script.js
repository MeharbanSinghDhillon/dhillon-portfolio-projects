let form =document.querySelector("form.inner")
let result=document.querySelector(".result")
let userInput=document.querySelector(".userinput")
form.addEventListener("submit",function(event){
    event.preventDefault()

    let userName=userInput.value;
   // console.log(userName)
    validateUserName(userName)

})
 function validateUserName(userName){//here valid user input
    if(userName==""){
        result.innerHTML=`Please add a Valid Input`
    }
else{
    cleanUserInput(userName)
    generaterAnswer(userName)
}
function generaterAnswer(userName){// here i generate a random massage
let firstChar=(userName.substring(0,1)).toLowerCase();// first char of name subsrting and lowercase
console.log(firstChar)

let randomNumber=Math.ceil(Math.random()*10)
console.log(randomNumber);
let userNameUpperCase=userName.toUpperCase()

// switch case here for generate ramdom message
if(firstChar==="a"){

switch(true){
case randomNumber===1 :displayMessage(`${userNameUpperCase} : Aspire for Greatness: Set ambitious goals and strive for greatness. Your aspirations fuel the journey toward success.`) 
break;
case randomNumber===2 :displayMessage(`${userNameUpperCase} : Adaptability is Key: Embrace change and be adaptable. The ability to adjust to new circumstances is a hallmark of resilience.`) 
break;
case randomNumber===3 :displayMessage(`${userNameUpperCase} : Action Overcomes Fear: Take decisive actions to conquer fear. Action is the antidote to hesitation and doubt.`) 
break;
case randomNumber===4 :displayMessage(`${userNameUpperCase} : Attitude Shapes Destiny: Cultivate a positive attitude. Your mindset shapes your experiences and influences your outcomes.`) 
break;
case randomNumber===5 :displayMessage(`${userNameUpperCase} : Accountability Empowers: Take responsibility for your actions. Accountability empowers you to control your own narrative.`) 
break;
case randomNumber===6 :displayMessage(`${userNameUpperCase} : Ambition Fuels Achievement: Let ambition be the driving force behind your endeavors. Ambition propels you toward your goals.`) 
break;
case randomNumber===7 :displayMessage(`${userNameUpperCase} : Appreciate Progress: Celebrate small victories. Recognizing progress, no matter how minor, keeps motivation high.`) 
break;
case randomNumber===8 :displayMessage(`${userNameUpperCase} :  Authenticity Matters: Be true to yourself. Authenticity creates a solid foundation for lasting success and fulfillment.`) 
break;
case randomNumber===9 :displayMessage(`${userNameUpperCase} : Ally with Determination: Form an alliance with determination. A resolute spirit can overcome any obstacle.`) 
break;
case randomNumber===10 :displayMessage(`${userNameUpperCase} : Abundance Mindset: Adopt an abundance mindset. See possibilities and opportunities, even in challenging situations.`) 
break;


}
}
if(firstChar==="b"){

    switch(true){
    case randomNumber===1 :displayMessage(`${userNameUpperCase} : Believe in Yourself: Cultivate unwavering self-belief. Trust in your abilities and potential to achieve greatness.`) 
    break;
    case randomNumber===2 :displayMessage(`${userNameUpperCase} : Bold Actions: Take bold and decisive actions. The path to success often requires courageous steps.`) 
    break;
    case randomNumber===3 :displayMessage(`${userNameUpperCase} : Be Resilient: Bounce back from setbacks with resilience. Every challenge is an opportunity for growth and learning.`) 
    break;
    case randomNumber===4 :displayMessage(`${userNameUpperCase} : Build Bridges: Foster connections and relationships. Collaboration and support can amplify your achievements.`) 
    break;
    case randomNumber===5 :displayMessage(`${userNameUpperCase} : Balance Priorities: Maintain a balance in your life. Prioritize what matters most and allocate time and energy accordingly.`) 
    break;
    case randomNumber===6 :displayMessage(`${userNameUpperCase} : Break Barriers: Challenge limitations and break through barriers. Your determination can pave the way for unprecedented success.`) 
    break;
    case randomNumber===7 :displayMessage(`${userNameUpperCase} : Be Proactive: Take initiative in shaping your destiny. Proactivity is the driving force behind meaningful progress.`) 
    break;
    case randomNumber===8 :displayMessage(`${userNameUpperCase} :  Brave Mindset: Develop a mindset of bravery. Embrace challenges as stepping stones to success.`) 
    break;
    case randomNumber===9 :displayMessage(`${userNameUpperCase} : Better Every Day: Strive for continuous improvement. Small, consistent efforts lead to significant advancements over time.`) 
    break;
    case randomNumber===10 :displayMessage(`${userNameUpperCase} : Breathe Positivity: Infuse positivity into every aspect of your life. A positive mindset attracts opportunities and fosters resilience.`) 
    break;
    
    }
    }
    if(firstChar==="c"){

        switch(true){
        case randomNumber===1 :displayMessage(`${userNameUpperCase} : Cultivate Confidence: Believe in your abilities and have confidence in your potential. Confidence is the key that unlocks doors to success.`) 
        break;
        case randomNumber===2 :displayMessage(`${userNameUpperCase} : Courageous Choices: Embrace courage in decision-making. Bold choices often lead to transformative outcomes.`) 
        break;
        case randomNumber===3 :displayMessage(`${userNameUpperCase} : Consistent Commitment: Success is a result of consistent commitment. Stay dedicated to your goals even in the face of challenges.`) 
        break;
        case randomNumber===4 :displayMessage(`${userNameUpperCase} : Create a Vision: Craft a clear vision for your future. A compelling vision serves as a guiding light on your journey.`) 
        break;
        case randomNumber===5 :displayMessage(`${userNameUpperCase} : Challenge Comfort Zones: Growth happens outside of comfort zones. Embrace challenges as opportunities for personal and professional development.`) 
        break;
        case randomNumber===6 :displayMessage(`${userNameUpperCase} : Cultivate Positivity: Maintain a positive mindset in all circumstances. Positivity fuels resilience and attracts favorable outcomes.`) 
        break;
        case randomNumber===7 :displayMessage(`${userNameUpperCase} : Celebrate Small Wins: Acknowledge and celebrate your achievements, no matter how small. Each victory is a stepping stone toward larger successes.`) 
        break;
        case randomNumber===8 :displayMessage(`${userNameUpperCase} : Collaborate for Success: Foster collaboration and teamwork. Together, you can achieve more and create a supportive environment for growth.`) 
        break;
        case randomNumber===9 :displayMessage(`${userNameUpperCase} : Continuous Learning: Commit to a lifelong pursuit of knowledge. Continuous learning empowers you to adapt and excel in a rapidly changing world.`) 
        break;
        case randomNumber===10 :displayMessage(`${userNameUpperCase} : Conquer Fears: Face your fears head-on. Overcoming fears is the gateway to unlocking your true potential.`) 
        break;
        
        }
        }
        if(firstChar==="d"){

            switch(true){
            case randomNumber===1 :displayMessage(`${userNameUpperCase} : Dare to Dream: Envision a future filled with success and fulfillment. Your dreams are the blueprints for a remarkable journey.`) 
            break;
            case randomNumber===2 :displayMessage(`${userNameUpperCase} : Determination Drives Success: Embrace challenges with unwavering determination. Every obstacle is an opportunity to showcase your resilience.`) 
            break;
            case randomNumber===3 :displayMessage(`${userNameUpperCase} : Discipline for Excellence: Develop a disciplined approach to your goals. Consistent effort and focus pave the way to excellence.`) 
            break;
            case randomNumber===4 :displayMessage(`${userNameUpperCase} : Defy Doubts: Silence the inner doubts and external skeptics. Your belief in yourself is the foundation of your success.`) 
            break;
            case randomNumber===5 :displayMessage(`${userNameUpperCase} : Dazzle with Dedication: Stand out by dedicating yourself wholeheartedly to your passions. Dedication is the spark that ignites extraordinary achievements.`) 
            break;
            case randomNumber===6 :displayMessage(`${userNameUpperCase} : Delight in Progress: Celebrate every small step forward. Progress, no matter how modest, is a testament to your journey of growth.`) 
            break;
            case randomNumber===7 :displayMessage(`${userNameUpperCase} : Discover Your Strengths: Understand your unique strengths and leverage them. Your strengths are the tools that will carve your path to success.`) 
            break;
            case randomNumber===8 :displayMessage(`${userNameUpperCase} : Drive Change: Don't fear change; drive it. Embrace new opportunities and challenges with an open mind and a proactive spirit.`) 
            break;
            case randomNumber===9 :displayMessage(`${userNameUpperCase} : Drown out Negativity: Surround yourself with positivity and drown out negativity. A positive mindset is your armor against life's challenges.`) 
            break;
            case randomNumber===10 :displayMessage(`${userNameUpperCase} : Define Your Legacy: Consider the impact you want to leave behind. Your actions today shape the legacy you'll create for tomorrow.`) 
            break;
            
            }
            }
    
}

}// clean user input
 function cleanUserInput(userName){
    userInput.value="";
 }

function displayMessage(message){
 result.innerHTML=`${message}`
}
