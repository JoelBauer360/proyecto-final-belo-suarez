const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

    // formulario de login a formulario de registro (cambio)
    login.addEventListener("click", ()=>{
        container.classList.remove("active");
    });
    signUp.addEventListener("click", ()=>{
        container.classList.add("active");
    });

    // Registro de usuario
    document.getElementById('registrar').addEventListener('click', function(){
        let registerAccount = document.getElementById('registroUsuario').value;
        let registerPassword = document.getElementById('registroContraseña').value;

        if ((registerAccount !== "") && (registerPassword !== "")){
            if(localStorage.getItem(registerAccount)){
                document.getElementById('mensaje').innerText = "El usuario ya existe";
            }else{
                localStorage.setItem(registerAccount,registerPassword);
                document.getElementById('mensaje').innerText = "Usted se registró correctamente";
                newUser();
            }

        }else{
            document.getElementById('mensaje').innerText = "Los campos usuario y contraseña no pueden estar vacios"
        }
    })

    // validacion de logueo
    document.getElementById('loguear').addEventListener('click', function(){
        let loginAccount = document.getElementById('loginUsuario').value;
        let loginPassword = document.getElementById('loginPassword').value;
        if ((loginAccount !== "") && (loginPassword !== "")){
            if (loginAccount in localStorage){
                (loginPassword == localStorage.getItem(loginAccount)) ? location.href = "/operar.html" : document.getElementById('mensaje1').innerText = "Contraseña incorrecta"
                }else{
                    document.getElementById('mensaje1').innerText = "Usuario no encontrado, por favor registrese";
        }
        }else{
            document.getElementById('mensaje1').innerText = "Los campos usuario y contraseña no pueden estar vacios";
        }
})


