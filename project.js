const nameForm = document.querySelector("#name-form");
const welcomeContainer = document.querySelector("#welcome");
const logoutBtn = document.querySelector("#logout");

// FUNÇÃO PARA QUANDO O USUÁRIO ESTIVER LOGADO APARECER O NOME DELE
function checkUser() {
  const userName = localStorage.getItem("name");

  if (userName) {
    nameForm.style.display = "none";
    welcomeContainer.style.display = "block";

    const userNameElement = document.querySelector("#username");
    userNameElement.textContent = userName;
  } else {
    nameForm.style.display = "block";
    welcomeContainer.style.display = "none";
  }
}

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#name");
  // PEGA O TEXTO QUE FOI DIGITADO NO INPUT
  localStorage.setItem("name", nameInput.value);

  // RESET DO FORM
  nameInput.value = "";

  // EXECUTA A FUNÇÃO CHECKUSER
  checkUser();
});

logoutBtn.addEventListener("click", () => {
  // FAÇO O LOGOUT
  localStorage.removeItem("name");

  // VERIFICO AS CONDIÇÕES
  checkUser();
});

// EXECUTA A FUNÇÃO LOGO QUE A PÁGINA É CARREGADA
checkUser();
