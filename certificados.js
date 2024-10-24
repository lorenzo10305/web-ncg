const formulario = document.getElementById('solicitud-certificados');
const enviarSolicitud = document.getElementById('enviar-solicitud');

enviarSolicitud.addEventListener('click', (e) => {
  e.preventDefault();
  const campos = formulario.elements;

  for (let i = 0; i < campos.length - 1; i++) { 
    if (campos[i].value === '') {
      alert(`El campo ${campos[i].name} está vacío`);
      return;
    }
  }

  // Código para enviar el formulario
  console.log('Formulario enviado');
});
