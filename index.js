function verifyInputs() {
   
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    document.addEventListener("click",()=>{
        if (email === "" || password === "") {
            let erreur = document.getElementById("message");
            erreur.innerHTML = "Veuillez remplir tous les champs.";
            erreur.style.color = "red";
            erreur.style.marginLeft ="90px";

            
        } else {
            // Vérifier si l'email est valide
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById("message").innerHTML = "L'email saisi n'est pas valide.";
            } else {
                window.location.href ="./pages/signin/signin.html";
            }
        }
    })
}