function validar (){
    var form = document.form;
    if (form.nome.value==0) {
        alert("O espaço nome está vazio");
        form.nome.value="";
        form.nome.focus();
        return false;
    }
    if (form.email.value==0) {
        alert("O espaço e-mail está vazio");
        form.email.value="";
        form.email.focus();
        return false;
    }
    if (form.telefone.value==0) {
        alert("O espaço telefone está vazio");
        form.telefone.value="";
        form.telefone.focus();
        return false;
    }
    if (form.menssagem.value==0) {
        alert("O espaço menssagem está vazio");
        form.menssagem.value="";
        form.menssagem.focus();
        return false;
    }
    alert("Obrigado pelo contato");
    form.submit();
}

function validarEmail() {
    var email = document.querySelector('#email');
    var error = document.querySelector('#erromail');
    if(!email.checkValidity()){
        error.innerHTML = "Email invalido";
    }
}

function redefinirMsg(){
    var error = document.querySelector('#erromail');
    if (error.innerHTML == "Email invalido"){
        error.innerHTML ="";
    }
}


//Colocando API GitHub
const ul = document.querySelector('.ul')

function getApiGitHub() {
    fetch('https://api.github.com/users/nailenaguiar4/repos')
    .then(async res => {
        if(!res.ok) {
            throw new Error(res.status)
        }

        var data = await res.json()
        data.map(item => {
            let li = document.createElement('li')

            li.innerHTML = `
            <strong>${item.name.toUpperCase()}</strong>
            <span>Data Criação:
            ${Intl.DateTimeFormat('pt-BR')
        .format(new Date(item.created_at))}
        </span>
        `
        ul.appendChild(li)

        })

    }).catch(e => console.log(e))
}
getApiGitHub()