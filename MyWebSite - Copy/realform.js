



// Create listener

document.getElementById("content_container").addEventListener("submit",submitForm)

//Function for submitting

function submitForm(e){
    e.preventDefault();
    //console.log(123);
    var nick=getInputVal("nickname");
    var email=getInputVal("email");
    var password= getInputVal("password");
    console.log(nick);
    
}

function getInputVal(id){
    return document.getElementById(id).value;
}

