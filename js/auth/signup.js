//implémenter le JS de ma page

const btnValidation = document.getElementById("btnValidationInscription");
const nomInput = document.getElementById("nomInput");
const prenomInput = document.getElementById("prenomInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const validatePasswordInput = document.getElementById("validatePasswordInput");

nomInput.addEventListener("keyup", validateForm);
prenomInput.addEventListener("keyup", validateForm);
emailInput.addEventListener("keyup", validateForm);
passwordInput.addEventListener("keyup", validateForm);
validatePasswordInput.addEventListener("keyup", validateForm);


function validateForm() {
  const nomOk = validateRequired(nomInput);
  const prenomOk = validateRequired(prenomInput);
  const mailOK = validateMail(emailInput);
  const passwordOk = validatePassword(passwordInput);

  if(nomOk && prenomOk && mailOK && passwordOk){
    btnValidation.disabled = false;
  }else{
    btnValidation.disabled = true;
  }
}


function validatePassword(input) {
  //définir mon regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const passwordlUser = input.value;
  if (passwordlUser.match(passwordRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    // c'est pas ok
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}


function validateMail(input) {
  //définir mon regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if (mailUser.match(emailRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    // c'est pas ok
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validateRequired(input) {
  if (input.value != "") {
    // c'est ok
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    // c'est pas ok
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}


