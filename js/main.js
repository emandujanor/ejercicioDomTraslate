var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var escribe = document.getElementsByClassName("btn")[0]
//Esta funcion cambia los valoresde texto del ingles al español
function traslate(){
  var title = document.getElementById("form-signin-heading");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];
  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML ="Recordar datos";
  button.innerHTML = "Iniciar Sesión";
}
traslate();
//Esta función muestra los datosingresados, dentro de un div nuevo llamado datos
function escribir(){
  var divDatos= document.getElementById("datos");
 divDatos.innerHTML= "<h2>Datos del Formulario</h2></br>El correo electrónico ingresado es:</br>"+ email.value +"</br>La clave ingresada es:</br>"+ password.value;
}
