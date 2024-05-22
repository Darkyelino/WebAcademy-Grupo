
let selectTema = document.querySelector('select#tema');
selectTema.addEventListener('change', evento => {
    let temaSelecionado = evento.target.value;
    if (temaSelecionado) {
        mudaTema(temaSelecionado);
        localStorage.setItem('tema', temaSelecionado);
    }
});

const mudaTema = (temaSelecionado) => {
    let linkTema = document.querySelector('#link-tema');
    let url = "/css/estilo-tema-" + temaSelecionado + ".css";
    linkTema.href = url;
}

let tema = localStorage.getItem('tema');
if (tema) {
    mudaTema(tema);
}

const carregarProfissionais = () => {
    let url = "https://my-json-server.typicode.com/juniorlimeiras/json/pacientes";
    fetch(url).then(resposta => {
        return resposta.json();
    }).then(dados => {
        for (const item of dados) {
            inserirPaciente(item);
        }
        eventoExcluir();
    }).catch(erro => {
        console.error(erro);
    });
};
carregarProfissionais();

//Criar uma função para excluir um profissional
const eventoExcluir = () => {
    let botoes = document.querySelectorAll('a.botao#vermelho');
    for (const bt of botoes) {
        bt.addEventListener('click', () => {
        bt.parentNode.parentNode.remove();
        let td_table_footer = document.querySelector('td.total');
        td_table_footer.textContent = "Total de registros: " + tabela.tBodies[0].rows.length
        });
    };

};

let botaoAdicionar = document.querySelector('a.adicionar');
let form = document.querySelector('form');
let botaoCancelar = document.querySelector('input#vermelho');

botaoAdicionar.addEventListener('click', () => {
    form.classList.remove('inativo');
    botaoAdicionar.classList.add('esconder');
});

botaoCancelar.addEventListener('click', () => {
    form.classList.add('inativo');
    form.reset();
    botaoAdicionar.classList.remove('esconder');
});

// Add um funcionamento para enviar os dados do form paa a tabela.
form.addEventListener('submit', (evento) => {
    evento.preventDefault(); //Evita que a página seja carregada
    let paciente = {
        id: tabela.tBodies[0].rows.length + 1,
        nome: form.nomePaciente.value,
        email: form.email.value,
        telefone: form.telefone.value,
        data_nascimento: form.dataNascimento.value,
        grupo_sanguineo: form.grupoSanguineo.options[form.grupoSanguineo.selectedIndex].label,
        sexo: form.sexo.options[form.sexo.selectedIndex].label,
        cep: form.cep.value,
        endereco: form.endereco.value,
        cidade: form.cidade.value,
        estado: form.estado.options[form.estado.selectedIndex].label
    };
    inserirPaciente(paciente);
    form.reset();
    eventoExcluir();
    botaoAdicionar.classList.remove('esconder'); //funcao para esconder o botao quando solicitar o formulario
    form.classList.add('inativo'); // tira o formulario
});

let tabela = document.querySelector('table');
//Função insere um objeto profissional na tabela html
const inserirPaciente = (item) => {
     //criando os elementos html
     let linha = document.createElement('tr');
     let id = document.createElement('td');
     let nome = document.createElement('td');
     let cep = document.createElement('td');
     let telefone = document.createElement('td');
     let email = document.createElement('td');
     let data_nascimento = document.createElement('td');
     let sexo = document.createElement('td');
     let endereco = document.createElement('td');
     let cidade = document.createElement('td');
     let estado = document.createElement('td');
     let grupo_sanguineo = document.createElement('td');
     let acoes = document.createElement('td');
     //preenchendo os elementos
     id.textContent = item.id;
     cep.textContent = item.cep;
     cidade.textContent = item.cidade;
     data_nascimento.textContent = item.data_nascimento;
     email.textContent  = item.email;
     endereco.textContent  = item.endereco;
     estado.textContent  = item.estado;
     grupo_sanguineo.textContent  = item.grupo_sanguineo;
     nome.textContent  = item.nome;
     sexo.textContent  = item.sexo;
     telefone.textContent  = item.telefone;
     acoes.innerHTML = `<a class="botao" href="javascript:void(0)">Editar</a> <a id="vermelho" class="botao"
     href="javascript:void(0)">Excluir</a>`;
     //preencher a linha
     linha.appendChild(id);
     linha.appendChild(nome);
     linha.appendChild(email);
     linha.appendChild(telefone);
     linha.appendChild(data_nascimento);
     linha.appendChild(grupo_sanguineo)
     linha.appendChild(sexo);
     linha.appendChild(cep);
     linha.appendChild(endereco);
     linha.appendChild(cidade);
     linha.appendChild(estado);
     linha.appendChild(acoes);
     //preencher a tabela com um linha
     tabela.tBodies[0].appendChild(linha);

     let td_table_footer = document.querySelector('td.total');
     td_table_footer.textContent = "Total de registros: " + tabela.tBodies[0].rows.length //arantirá que a célula com a classe total mostre o número total de registros presentes
     
}


