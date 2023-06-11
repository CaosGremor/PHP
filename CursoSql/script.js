document.querySelector('form').addEventListener('submit', function(event) {

  let nombre = document.querySelector('input[name="nombre"]').value;
  let apellido = document.querySelector('input[name="apellido"]').value;
  let email = document.querySelector('input[name="email"]').value;

  if(nombre.trim() === '' || apellido.trim() === '' || email.trim() === '') {
      alert('Por favor, rellene todos los campos.');
      event.preventDefault();
  } else {
      alert('Formulario enviado con éxito.');
      // Aquí puedes agregar el código adicional para enviar el formulario o realizar otras acciones.
  }
});
