// 1 - Inserir dados
// setItem - SLAVA UM DADO NO LOCALSTORAGE
// DENTRO DO PARENTESES COLOCA O NOME DO DADO QUE VAI FICAR SALVO
localStorage.setItem("name", "Ana");

// 2 - RESTART SEM PERDER DADOS

// 3 - RESGATAR ITEM
const name = localStorage.getItem("name");
console.log(name);

// 4 - RESGATE DE ITENS QUE NÃO EXISTE
const lastName = localStorage.getItem("lastName");
// como não tem esse dado, o resulatdo vai ser null
console.log(lastName);

if (!lastName) {
  console.log("Sem sobrenome");
}

// 5 - REMOVER ITEM
localStorage.removeItem("name");

// LIMPAR TODOS OS ITENS - É INTERESSANTE QUANDO O USUÁRIO DA UM LOGOUT DO SISTEMA
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

// console.log(typeof localStorage.getItem("a"));

// ESSE MÉTODO NÃO RECEBE NENHUM ARGUMENTO E APAGA TUDO O QUE TEM NA LOCALSTORAGE
localStorage.clear();

//7 - SESSIONSTORAGE
sessionStorage.setItem("cor", "red");

// 8 - REINICIAR E PERDER DADOS - FECHA A ABA E ABRE DE NOVO NÃO HÁ DADOS SALVOS

// 9 - RESGATAR DADOS
const color = sessionStorage.getItem("cor");
console.log(color);

// sessionStorage.removeItem("cor")

// sessionStorage.clear();

// 10 - SALVAR OBJETO
const person = {
  name: "Ana",
  Age: 25,
  job: "Programmer",
};

// localStorage.setItem("person", person);
localStorage.setItem("person", JSON.stringify(person));

const getPerson = localStorage.getItem("person");
console.log(getPerson);

const personObject = JSON.parse(getPerson);
console.log(typeof personObject);
console.log(personObject.job);
