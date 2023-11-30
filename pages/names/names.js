let vornamee = document.querySelector(".vorname");
let nachname = document.querySelector(".nachname");


function submit(){
    if(vornamee.value ==="" || nachname.value===""){
        alert("veillez commpleter les champs");
    }else{
        window.location.href = "../../pages/birthday/birthday.html";
    }

}