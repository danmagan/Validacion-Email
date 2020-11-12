const mensaje = document.getElementById("mensaje");
const asunto = document.getElementById("asunto");
const email = document.getElementById("email");
const boton = document.getElementById("enviar");
const reset = document.getElementById("resetBtn");
const formularioEnviar = document.getElementById("enviar-mail");

//Activar la funcion
eventListeners();


//Iniciar Aplicacion y Deshabilitar Submit
function eventListeners(){
	document.addEventListener("DOMContentLoaded", App);

//Campo formulario

	email.addEventListener("blur", validarCampo);
	asunto.addEventListener("blur", validarCampo);
	mensaje.addEventListener("blur", validarCampo);
    formularioEnviar.addEventListener("submit", enviarEmail);
    reset.addEventListener("click", resetForm);
}

function App(){
	boton.disabled = true;
}

function validarCampo(){
	//Funcion para validar la longitud del texto              
	validarLong(this);

	if(this.type === "email"){
		validarEmail(this);
	}

	//Validar que no este vacio
   
   if(mensaje.value !== "" && asunto.value !== "" && email.value !== ""){
   	boton.disabled = false;
   }

}

function validarLong(campo){
	if(campo.value.length >0){
		campo.style.borderBottomColor = "green";
		campo.classList.remove = ("error");
	}
	else{
		campo.style.borderBottomColor = "red";
		campo.classList.add = ("error");
	}
}

function validarEmail (campo){
	const mensaje= campo.value;
	if(mensaje.indexOf("@") !== -1){
		campo.style.borderBottomColor = "green";
		campo.classList.remove = ("error");

	}
	else{
campo.style.borderBottomColor = "red";
		campo.classList.add = ("error");
		 
	}
}
function resetForm(e){
	formularioEnviar.reset();
	e.preventDefault();
}
// Se activa cuando pulsamos ENVIAR
function enviarEmail(e){
	//spinner al presionar ENVIAR
	const spinnerGif = document.querySelector("#spinner.gif");
	spinner.style.display = "block";
	e.preventDefault();
	const enviado = document.createElement("img");
	enviado.style.display = "block";
	enviado.src = "img/mail.gif";

// Duracion del spinner en pantalla

setTimeout(function(){
	spinner.style.display="none";
	document.querySelector("#loaders").appendChild(enviado);

setTimeout(function(){
	enviado.remove();
	formularioEnviar.reset();
},4000)
}, 3000)
e.preventDefault();
}

//**campo.value.lenght : devuelve los caracteres introducidos en el campo**

//console. log(this.type) : envia a la consola el tipo de campo (email, texto, input, etc)