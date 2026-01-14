//implémenter le JS de ma page

const nomInput = document.getElementById("nomInput");
const prenomInput = document.getElementById("prenomInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const validatePasswordInput = document.getElementById("validatePasswordInput");

nomInput.addEventListener("keyup",validateForm);
prenomInput.addEventListener("keyup",validateForm);
emailInput.addEventListener("keyup",validateForm);
passwordInput.addEventListener("keyup",validateForm);
validatePasswordInput.addEventListener("keyup",validateForm);


function validateForm(){
  validateRequired(nomInput);
  validateRequired(prenomInput);
}

function validateRequired(input){
  if(input.value != ""){
    // c'est ok
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
  }else{
    // c'est pas ok
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
}
