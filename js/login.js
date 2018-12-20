function login() {
    let username = document.getElementById('txtUser').value;
    let password = document.getElementById('txtPassword').value;
    
    if(!username || !password){
       return; 
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://ooffhft0n5.execute-api.us-east-2.amazonaws.com/CoderDojo/login', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

    

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        console.log(XMLHttpRequest.DONE);
        console.log(this.readyState);
        console.log(this.status);
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            if(xhr.responseText){
                let response = JSON.parse(xhr.responseText);
                if(response.token) {
                   window.location.href = "home.html";
                } else {
                    
                    document.getElementById("loginFail").style.display = '';
                    console.log("no login");
                }
            }
            // Request finished. Do processing here.
        }
    }    

    var data = {};
    data.username = username;
    data.password = password;

    xhr.send(JSON.stringify(data)); 
    // xhr.send(new Int8Array()); 
    // xhr.send(document);
}