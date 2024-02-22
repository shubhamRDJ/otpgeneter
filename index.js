function generateOTP(){
    let generateOTP = Math.floor(10000 + Math.random()*90000);
    alert(generateOTP);
    window.localStorage.setItem("otp",generateOTP);
}
function validateOTP(){
    let validate = document.querySelector("#validOTP").value;
    let otp = window.localStorage.getItem("otp");

    if(validate == otp){
       let vari =  document.write("OTP Varifed");
       
    }
    else{
        alert("Invalid OTP");
    }
       
}
 