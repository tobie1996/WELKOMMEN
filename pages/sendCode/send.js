
const inputs = document.querySelectorAll('.textInput');
const totalInputs = inputs.length;
const values = [];

inputs.forEach((input, index) => {

  input.addEventListener('input', () => {
    if (input.value !== '') {
      values[index] = input.value;
      if (index === totalInputs - 1) {
        // Comparaison avec la valeur stockée dans le localStorage
        let randomNumber = localStorage.getItem('randomNumber');
        if (values.join('') === randomNumber) {
          window.location.href = 'https://google.com';
        } else {
         alert("veillez enter le bon code!!")
        }
      } else {
        inputs[index + 1].focus();
      }
    }
  });

});

function valider(){
  window.location.href = "../newpassword/password.html"
}



/// au chargement de la page le lancement du chronometre 60 s

let numberElement = document.getElementById("seconde");
let seconde = 59 ;

function decrementNumber() {
    seconde--;
    numberElement.innerText = seconde + "s";
  
    if (seconde === 0) {
        alert("le code est erroné");
        clearInterval(intervalId);
    }
}
let intervalId = setInterval(decrementNumber, 1000);

