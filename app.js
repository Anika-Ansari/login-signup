var inputName = document.getElementById("inputName");
var inputPassword = document.getElementById("inputPassword")

function signup() {
    if (inputName.value.trim() === "" || inputPassword.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "empty field...",
            text: "Please fill out before logging in!",
        });
        return
    }
    localStorage.setItem("inputName", inputName.value)
    localStorage.setItem("inputPassword", inputPassword.value)
    inputName = ""
    inputPassword = ""
    {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sign up successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }
}


function login(){
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;
    var inputValue =localStorage.getItem("inputName")
    var inputValuePassword =localStorage.getItem("inputPassword")

    if (inputValue.trim() === "" || inputValuePassword.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "empty field...",
            text: "Please fill out before logging in!",
        });
        return
    }

    if(userName ===inputValue && userPassword === inputValuePassword){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Invalid Email or password...",
            text: "login Failed!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
}