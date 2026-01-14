const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
  //Ici, il faudra appeler l'API pour vérifier les crédentials en BDD

  if (emailInput.value == "test@mail.com" && passwordInput.value == "123") {

    //il faudra récuperer le vrai token
    const token = "azazazazazazazazazazazazaazazazazazazazaz";
    setToken(token);
    //placer ce token en cookie
    setCookie("role","client",7);
    window.location.replace("/");
  } else {
    emailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
}