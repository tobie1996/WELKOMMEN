// Fonction pour vérifier la validité de l'e-mail
function verifyInputs() {
   // Récupérer la valeur de l'input e-mail
   let email = document.getElementById("email").value;
 
   // Expression régulière pour vérifier le format de l'e-mail
   let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
   // Vérifier si l'e-mail correspond au format attendu
   if (emailPattern.test(email)) {
      let modal = document.querySelector(".loadModal")
      modal.style.display ="block"
      localStorage.setItem("email", email);

      setTimeout(() => {
         modal.style.display = 'none'; // Masquage du modal
         window.location.href = '../../pages/sendCode/send.html'; 
       }, 5000);
   } else {
      alert("L'e-mail est invalide !");
   }
 }




 
 
 