document.addEventListener("DOMContentLoaded",function(event){
    /*  Esconder a Div listagem*/
    const divListagem = document.getElementById("divListagem");
    divListagem.style.display = "none";

    const divCadastro = document.getElementById("divCadastro");

    document.getElementById("btnListar").onclick = (evt) =>{
        divListagem.style.display = "block";
        divCadastro.style.display = "none";
    }

    document.getElementById("btnCadastrar").onclick = (evt) => {
        divListagem.style.display = "none";
        divCadastro.style.display = "block";
    }

    const frmCadastro = document.getElementById("frmCadastro");

    frmCadastro.onsubmit = (evt) => {
        let linha ='<tr>';
        var data = new FormData(frmCadastro)

        for(let item of data)
            linha += `<td>${item[1]}</td>`;
            linha += '<td><input type=button" value="X"/></td></tr>';
            // se tem apenas uma TD, é a default
    }

});