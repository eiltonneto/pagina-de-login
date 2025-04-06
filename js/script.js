document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("login-form").addEventListener("submit", function (event){
        event.preventDefault();
        console.log("O fomulário foi enviado!")

    // captura os valores dos campos
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorMessage = document.getElementById("error-message");

    // simulando um usuário correto
        const validUser = "admin";
        const validPass = "1234";

        if(username === validUser && password === validPass){
            alert("Login bem-sucedido! Redirecionando");
            window.location.href = "dashboard.html";
        } else{
           console.log("Usuário ou senha incorretos!");
           errorMessage.classList.remove("hidden");
        }

    });    
});