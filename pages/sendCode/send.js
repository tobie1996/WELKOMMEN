
const inputs = document.querySelectorAll('.textInput');
const totalInputs = inputs.length;

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value !== '') {
      // Vérifier si c'est le dernier input, dans ce cas revenir au premier
      if (index === totalInputs - 1) {
        // Rediriger vers une autre page
        window.location.href = 'https://google.com'; // Remplacez 'https://example.com' par l'URL de la page souhaitée
      } else {
        inputs[index + 1].focus();
      }
    }
  });
});


