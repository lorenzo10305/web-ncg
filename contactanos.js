function enviarMensaje(){

    let acudiente = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("phone").value;
    let mensaje = document.getElementById("message").value;
    
  if (acudiente == "" || email == "" || telefono == "" || mensaje == "")  
    {alert("formulario incompleto, por favor diligenciarlo en su totalidad")}
  else {}
    let capturaDato = document.getElementById("capturDato");
    const fila = document.createElement('tr');
    fila.innerHTML = 
    `
    <td scope="row">${acudiente}</td>
    <td scope="row">${email}</td>
    <td scope="row">${telefono}</td>
    <td scope="row">${mensaje}</td>;`;

    capturaDato.appendChild(fila);
}