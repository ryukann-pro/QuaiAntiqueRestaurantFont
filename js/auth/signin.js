const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
  //Ici, il faudra appeler l'API pour vérifier les crédentials en BDD

  if (emailInput.value == "test@mail.com" && passwordInput.value == "123") {
    alert("Vous etes connecté");

    //il faudra récuperer le vrai token
    const token = "azazazazazazazazazazazazaazazazazazazazaz";
    //placer ce token en cookie

    window.location.replace("/");
  } else {
    emailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
}