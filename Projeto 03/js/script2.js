function updateTable(data){
	let	linha = '<tr>';
	for(let item of data)
		linha += `<td>${item[1]}</td>`;
	linha += '<td>input type = "button" value = "X" /</td></tr>'
	
	// se tem apenas uma TD, é a default
	const tbody = document.querySelector('table > tbody');
	if(tbody.querySelectorAll('tr > td').length ===1)
		tbody.innerHTML += linha;
	
	divListagem.style.display = "block";
	divCadastro.style.display = "none";
	
	frmCadastro.reset();
	
	const buttons = document.querySelectorAll("input[value = 'X']");
	for(let btn of buttons){
		if(btn.onclick !== null) continue;
		btn.onclick = (evt) => {
			if(confirm("Tem certeza que deseja excluir este cliente?")){
				btn.closest('tr').remove();
			}
		}
	}
}

const frmCadastro = document.getElementById("frmCadastro");

frmCadastro.onsubmit = (evt) => {
	var data = new FormData(frmCadastro);
	updateTable(data);
	
	evt.preventDefault();
}

const webApiDomain = 'http://localhost:3000' 

async function updateDatabase(data){ 
	
	const json = {}; 
	for(let item of data) 
		json[item[0]] = item[1]; 
	const headers = new Headers(); headers.append("Content-Type", "application/json"); 
	const response = await fetch(`${webApiDomain}/clientes`, {
		headers, method: 'POST', body: JSON.stringify(json) 
		}); 
		return await response.json(); 
}

