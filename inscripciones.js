function enviarSolicitud(){

    let acudiente = document.getElementById("attendant").value;
    let direccion = document.getElementById("direcction").value;
    let telefono = document.getElementById("phone").value;
    let mail = document.getElementById("email").value;
    let edadE = document.getElementById("age").value;
    let ultimoCursado = document.getElementById("lastCourse").value;
    let ultimoColegio = document.getElementById("lastSchool").value;
    let gradoIngreso = document.getElementById("gradeToEnter").value;
    let nombreDelEstudiante = document.getElementById("nameStudent").value;
    alert(edadE);
  if (acudiente == "" || direccion == "" || telefono == "" || mail == "" || nombreDelEstudiante == "" || edadE == "" || ultimoCursado == "" || ultimoColegio == "" || gradoIngreso == "")  
    {alert("formulario incompleto, por favor diligenciarlo en su totalidad")}
  else {}
    let capturaDato = document.getElementById("capturDato");
    const fila = document.createElement('tr');
    fila.innerHTML = 
    `
    <td scope="row">${acudiente}</td>
    <td scope="row">${direccion}</td>
    <td scope="row">${telefono}</td>
    <td scope="row">${mail}</td>
    <td scope="row">${edadE}</td>
    <td scope="row">${ultimoCursado}</td>
    <td scope="row">${ultimoColegio}</td>
    <td scope="row">${gradoIngreso}</td>
    <td scope="row">${nombreDelEstudiante}</td>`;

    capturaDato.appendChild(fila);
}