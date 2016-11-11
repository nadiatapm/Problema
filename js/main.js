function contconversacion(){
	//llamar elementos
	var chat = document.getElementById('conversacion');
	var text = document.getElementById('mensajes').value;
	//crear nodo texto
	var context =document.createTextNode('div');
	var contMensaje = document.createElement('div');
	var contparrafo = document.createElement('p');
	//poner atributos
	context.setAttribute("class", "w-message w-message-out");
	contMensaje.setAttribute("class" ,"w-message-text");

	contenedor.appendChild(contMensaje);
	contenedor.appendChild(contparrafo);

	conversacion.appendChild(contenedor);
}

