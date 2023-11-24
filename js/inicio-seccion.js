// function iniciarSesion() {
//     let inicioSesion = prompt ("¿Desea iniciar sesión? Indique SI para iniciar o NO para continuar sin iniciar");
//         if (inicioSesion === "SI") {
//             let nombre = prompt ("Ingrese su nombre");
//             let password = prompt ("Ingrese su clave");
//             alert ("Bienvenido/a " + nombre + " a bella beauty");
//     console.log("El usuario " + nombre + " inició sesión");
//         } else if (inicioSesion === "NO") {
//             alert("Muchas gracias! Puede continuar navegando sin iniciar sesión");
//         } else {
//             alert("Ha ingresado una opción inválida. Indique SI para iniciar sesión o NO para continuar sin iniciar ");
//         }

// }

// iniciarSesion ()





window.onload = () => {
    let formulario = document.querySelector("form-login");
    let inputpass = document.getElementById("pass");
    let inputname = document.getElementById("name");
    let boton = document.getElementById("button");
 
    inputpass.addEventListener("keyup", () => {
      let mensaje;
      if (inputpass.value.length < 8) {
        mensaje = "La contraseña debe contener minimo 8 caracteres";
        document.getElementById("mensajePass").innerText = mensaje;
      } else {
        document.getElementById("mensajePass").innerText = " ";
      }
    });
  };
  
  
  // if(inputpass.match(/[A-Z]/) && usuario_clave.match(/[0-9]/)){
  //   document.getElementById("mensajePass").innerText = " ";
  
  //   // $('#mensajePass').html('La clave debe contener al menos una letra mayúscula y un número').slideDown(500);
  // }else{
  //   mensaje = "La contraseña debe contener minimo 8 caracteres";
  //   document.getElementById("mensajePass").innerText = mensaje;
  // // $('#mensajePass').html('').slideUp(300);
  
  
  // }
  
  // let espacios = false;
  // let cont = 0;
  
  // while (!espacios && (cont < p1.length)) {
  //   if (inputpass.charAt(cont) == " ")
  //     espacios = true;
  //   cont++;
  // }
     
  // if (espacios) {
  //   alert ("La contraseña no puede contener espacios en blanco");
  //   return false;
  // }
  
  
  // let re = /[0-9]/;
   
  //             if(!re.test(inputpass)) {
  //                 mensajePass.innerText = 'El Password debe contener al menos un numero';
  //                 return false;
  //             }
  
  
  
  // if (!inputpass.match(alf)) {
  //   msg.innerText = 'El Password debe contener algún número';
  //   return false;
  // } else {
  //   return true;
  // };
  
  let boton = document.querySelector("button");
  
  localStorage.setItem("usuarioRegistrado", "Miriam");
  
  boton.onclick = (event) => {
    event.preventDefault();
    let inputUsuario = document.getElementById("username").value;
    if (inputUsuario == localStorage.getItem("usuarioRegistrado")) {
      let mensajeIngreso = document.createElement("p");
      document.querySelector("p").innerText = "Ingreso con éxito";
      sessionStorage.setItem("sesionIniciada", true);
      sessionStorage.setItem("username", inputUsuario);
    } else {
      let p = document.createElement("p");
      mensajePass.innerText = "El usuario no coincide. Intente nuevamente";
      document.querySelector("form-login").appendChild(mensajePass);
    }
  };
  
  // let validaPassword = document.getElementById('pass').value;
  
  // if (!validaPassword.match(/\d/)) {
  //   mensajePass.innerText = 'El Password debe contener algún número';
  //   return false;
  // }
  