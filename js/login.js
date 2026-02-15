let nameinput=document.getElementById("full-name");
let passwordinput=document.getElementById("password");
let loginBtn=document.getElementById("log-in");
let message=document.getElementById("message");


// set demo password
let fullName="Osifowora Zara"
let password="111491018"

loginBtn.addEventListener("click",()=>{
    console.log(passwordinput.value)
    if(passwordinput.value==password){
        window.location="links.html"
    }else{
        message.textContent="Incorrect password try 2017"
        message.style.color="Red"
    }
})