/* Selecionando DOM para manipular */
document.addEventListener("DOMContentLoaded", function(event){
    /* selecionar quadro de listagem */
    const divListagem = document.getElementById("divListagem");
    /* Ocultar listagem */
    divListagem.style.display = "none";
    /* selecionar quadro de Cadastro */
    const divCadastro = document.getElementById("divCadastro");
    
    loadDatabase()
        .then(clientes => updateTable(clientes))
        .catch(error => alert(`Ocorreu um erro ao carregar os clientes: ${error}`));

    document.getElementById("btnListar").onclick = (evt) =>{
        /* ocultar Quadro de Cadastro */
        divCadastro.style.display = "none";

        /* Mostrar Quadro de listagem */ 
        divListagem.style.display="block";
    }

    document.getElementById("btnCadastrar").onclick = (evt) => {
        /* ocultar quadro de listagem */
        divListagem.style.display="none";

        /* mostrar quadro de Cadastro */
        divCadastro.style.display = "block";
    }

    // Selecionar formulário Cadastro
    const frmCadastro = document.getElementById("frmCadastro");

    frmCadastro.onsubmit = (evt) => {
        
        var data = new FormData(frmCadastro);
        updateDatabase(data)
            //opção alternativa para conseguir ir em frente no estudo
            alert("Cadastrado com Sucesso");
            updateTable(clientes); 
            /* Não está entrando nesta linha abaixo   
            .then(cliente => {
                alert(`Cliente ${cliente.Nome} cadastrado com sucesso!`);
                updateTable(clientes);
            })
            .catch(error => alert(`Ocorreu um erro: ${error}`))
            *** ainda não entendi o porque não entrou neste ponto ***
            */
        evt.preventDefault();
    }
});

function updateTable(clientes){
    let linha =""; 
    if(!Array.isArray(clientes)) clientes = [clientes];
    for(let cliente of clientes)
         linha += `<tr><td>${cliente.Nome}</td>
                <td>${cliente.Idade}</td><td>${cliente.UF}</td>
                <td><input type="button" id="retira" value="X" data-id= "${cliente.ID}" /></td></tr>`;
     
     //se tem apenas uma TD, é a default 
     const tbody = document.querySelector('table > tbody'); 
     if(tbody.querySelectorAll('tr > td').length === 1) 
        tbody.innerHTML = ""; 
    
     tbody.innerHTML += linha; 
     
     divListagem.style.display = "block"; 
     divCadastro.style.display = "none"; 
     
     frmCadastro.reset(); 
     
     const buttons = document.querySelectorAll("input[value='X']"); 
     for(let btn of buttons){ 
        if(btn.onclick !== null) continue; 
        btn.onclick = (evt) => { 
            if(confirm('Tem certeza que deseja excluir este cliente?')){ 
                deleteDataBase(btn.getAttribute('data-id'))
                //opção alternativa para conseguir ir em frente no estudo
                alert('Cliente excluído com sucesso!');
                btn.closest('tr').remove();

                    /* não está entrando neste ponto
                    .then(result => {
                        alert('Cliente excluído com sucesso!');
                        btn.closest('tr').remove(); 
                    })
                    .catch(error => alert(`Ocorreu um erro ao excluir o cliente: ${error}`))
                    *** ainda não entendi o porque não entrou neste ponto ***
                    */
            } 
        } 
    } 
}

const webApiDomain = 'http://localhost:3000' 
async function updateDatabase(data){ 
    const json = {}; 
    for(let item of data) 
        json[item[0]] = item[1]; 
    
    const headers = new Headers(); 
    headers.append("Content-Type", "application/json"); 
    const response = await fetch(`${webApiDomain}/clientes`, { 
        headers, 
        method: 'POST', 
        body: JSON.stringify(json) 
    }); 
    return await response.json(); 
}

async function loadDatabase(){
    const response = await fetch(`${webApiDomain}/clientes`);
    return await response.json();
}

async function deleteDataBase(id){
    const response = await fetch(`${webApiDomain}/clientes/${id}`,{
        method:'DELETE'
    });
    return await response.json();
}