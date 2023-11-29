
function verifyInputs() {
   let email = document.getElementById("email").value;
   let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
   if (emailPattern.test(email)) {
     let modal = document.querySelector(".loadModal");
     modal.style.display = "block";
     localStorage.setItem("email", email);
     setTimeout(() => {
       modal.style.display = "none";
       const randomNumber = Math.floor(Math.random() * 90000) + 10000;
       localStorage.setItem("randomNumber", randomNumber);
       const emailUrl = `mailto:${email}?subject=Votre code de confirmation est: ${randomNumber}`;
       window.open(emailUrl, "_blank");
       window.location.href = "../sendCode/send.html";
     }, 5000);
   } else {
     alert("L'e-mail est invalide !");
   }
 }
 
 