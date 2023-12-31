function validarUsuario() {
    var lead = {
        nome: "",
        email: "",
        celular: "",
        tipo: "",
        comentarios: ""
    };

    lead.nome = document.getElementById("nome").value;
    lead.email = document.getElementById("email").value;
    lead.celular = document.getElementById("celular").value;
    lead.tipo = document.getElementById("tipo").value;
    lead.obervacoes = document.getElementById("comentarios").value;

    document.getElementById("nome").value = lead.nome;
    document.getElementById("email").value = lead.email;
    document.getElementById("celular").value = lead.celular;
    document.getElementById("tipo").value = lead.tipo;
    document.getElementById("comentarios").value = lead.tipo;

    if (lead.nome.length < 3) {
        alert("Nome deve conter mais de 2 caracteres.");
        return;
    }

    if (lead.email == "") {
        alert("Campo e-mail não pode estar vazio.");
        return;
    }

    if (!/^\d+$/.test(lead.celular)) {
        alert("O campo de celular não pode estar nulo e deve conter apenas números.");
        return; // Retorna para evitar o envio do formulário
    }

    if (lead.tipo == "") {
        alert("Selecione uma opção de solução para enviar a mensagem.");
        return;
    }

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("comentarios").value = "";

    alert("Dados enviados com sucesso!");

    document.getElementById("frmOrcamentos");
}