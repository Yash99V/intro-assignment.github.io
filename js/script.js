function validatefirstname () {
    var f1=document.getElementById("firstname").value;
    

    if(f1.length>="2"&&f1.length<="10")   {
        document.getElementById("firstNamePrompt").style.color="green";
        document.getElementById("firstNamePrompt").innerHTML="Valid";
        return true;
    }
    else {
        document.getElementById("firstNamePrompt").style.color="red";
        document.getElementById("firstNamePrompt").innerHTML="invalid";
        return false;
    }

}


function validatelastname () {
    var f2=document.getElementById("lastname").value;
    

    if(f2.length>="2"&&f2.length<="10")   {
        document.getElementById("lastNamePrompt").style.color="green";
        document.getElementById("lastNamePrompt").innerHTML="Valid";
        return true;
    }
    else {
        document.getElementById("lastNamePrompt").style.color="red";
        document.getElementById("lastNamePrompt").innerHTML="invalid";
        return false;
    }

}
function phone() {
    var f3=document.getElementById("phone1").value;
    

    if(f3.length=="10")   {
        document.getElementById("phone").style.color="green";
        document.getElementById("phone").innerHTML="Valid";
        return true;
    }
    else {
        document.getElementById("phone").style.color="red";
        document.getElementById("phone").innerHTML="Please Enter 10 digit phone no.";
        return false;
    }

}
function emailx () {
    var f4=document.getElementById("email1").value;
    

    if(f4.length>="7")   {
        document.getElementById("email").style.color="green";
        document.getElementById("email").innerHTML="Valid";
        return true;
    }
    else {
        document.getElementById("email").style.color="red";
        document.getElementById("email").innerHTML="Please put a valid email-id";
        return false;
    }

}