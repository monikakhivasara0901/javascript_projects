const passwordBox=document.getElementById("password");

function generatePassword(){
    const chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength=16;
    let password="";
    for(let i=0;i<passwordLength;i++){
        let randomNumber=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNumber,randomNumber+1);
    }
    passwordBox.value=password;
}

function copyPassword(){
passwordBox.select();
document.execCommand("copy");
}