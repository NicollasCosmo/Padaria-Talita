function validarDados() {
    var nome = document.getElementById("nomeSobrenome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;


    if (nome.length>3 && email.length>3 && telefone.length>3 && mensagem.length>3)  {
        return true;
    }
    else{
        return false;
    }
}


function validarTudo() {

    if(validarDados()==true){
    alert("Dados enviados com Sucesso!");
        return true;

    }
    else {
        alert("ERRO: Verifique se os campos Nome, Email, Telefone e Mensagem estão preenchidos corretamente.");
        return false;

    }
}

