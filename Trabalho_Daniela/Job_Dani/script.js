/* let botao = document.querySelector('a#add');
botao.addEventListener('click', funcaoA);
botao.addEventListener('click', funcaoB);

function funcaoA() {
    alert('A');
}
function funcaoB() {
    alert('B');
} */

let selectTema = document.querySelector('select#tema');
selectTema.addEventListener('change', evento => {
    let temaSelecionado = evento.target.value;
    //console.log(temaSelecionado);
    if (temaSelecionado) {
        mudaTema(temaSelecionado);
        localStorage.setItem('tema', temaSelecionado);
    }
});

const mudaTema = (temaSelecionado) => {
    let linkTema = document.querySelector('link#link-tema');
    //console.log(linkTema);
    let url = '/css/estilo-tema-' + temaSelecionado + '.css';
    linkTema.href = url;
 }

let tema = localStorage.getItem('tema');
if (tema) {
    mudaTema(tema);
}


let botaoAdicionar = document.querySelector('#adicionar');
let botaoCancelar = document.querySelector('input#cancelar');
let form = document.querySelector('form');
let ocultarBotaoAdd = document.querySelector('div.ocultarBotaoAdd');

botaoAdicionar.addEventListener('click', (event) => {
    form.classList.remove('inativo');
    ocultarBotaoAdd.classList.add('esconder');
    event.preventDefault();
});

botaoCancelar.addEventListener('click', (event) => {
    form.classList.add('inativo');
    form.reset();
    ocultarBotaoAdd.classList.remove('esconder');
    event.preventDefault();
});

// [INDIVIDUAL] Alterar a forma como o usuário visualiza o botão Adicionar. (Entrega: 22/05/2024) O botão Adicionar não deve ser visualizado após ser clicado, mas somente quando o usuário clicar nos botões Enviar ou Cancelar.

let idTabela = document.querySelector('table');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    ocultarBotaoAdd.classList.remove('esconder');
    let profissional = {
        id: idTabela.tBodies[0].rows.length + 1,
        nome: form.nomeProfissional.value,
        registro: form.registroProfissional.value,
        email: form.emailProfissional.value,
        telefone: form.telefoneProfissional.value, 
        unidade: form.unidadeProfissional.options[form.unidadeProfissional.selectedIndex].text,
        especialidade: form.especialidadeProfissional.options[form.especialidadeProfissional.selectedIndex].text 
    };
    inserirProfissional(profissional);
    form.reset();
    form.classList.add('inativo');
    console.log(profissional);
});

const addProfissional = (item) => {
    let tabela = document.querySelector('table');
    let linha = document.createElement('tr');
    let id = document.createElement('td');
    let nome = document.createElement('td');
    let registroConselho = document.createElement('td');
    let telefone = document.createElement('td');
    let email = document.createElement('td');
    let unidade = document.createElement('td');
    let especialidade = document.createElement('td');
    let acoes = document.createElement('td');

    id.textContent = item.id;
    nome.textContent = item.nome;
    registroConselho.textContent = item.registro;
    telefone.textContent = item.telefone;
    email.textContent = item.email;
    unidade.textContent = item.unidade;
    especialidade.textContent = item.especialidade;
    acoes.innerHTML = `<a class="botao">Editar</a> <a id="vermelho" class="botao">Excluir</a>`;

    linha.appendChild(id);
    linha.append(nome);
    linha.appendChild(registroConselho);
    linha.appendChild(email);
    linha.appendChild(telefone);
    linha.appendChild(unidade);
    linha.appendChild(especialidade);
    linha.appendChild(acoes);
    //Preencher a tabela com uma linha
    tabela.tBodies[0].appendChild(linha);
    let botaoExcluir = linha.querySelector('.excluir');
    botaoExcluir.addEventListener('click', () => {
        linha.remove();
        //// [INDIVIDUAL] Alterar o rodapé da tabela que mostra o total de profissionais para que seja atualizado conforme a quantidade de profissionais. (Entrega: 22/05/2024) A atualização deve considerar todos os registros.
        rodapeTabela(); 
    });
    rodapeTabela();    
};

const carregarTabela = () => {
    let url = 'https://my-json-server.typicode.com/juniorlimeiras/json/profissionais';
    fetch(url).then(resposta => {
        return resposta.json();
    }).then(dados => {
        for (const item of dados) {
            inserirProfissional(item);
        };
    }).catch(erro => (console.error(erro)));
};

// [INDIVIDUAL] Alterar o comportamento da coluna 'nome' da tabela de profissionais. (Entrega: 22/05/2024) A coluna 'nome' deve ter o mesmo comportamento da coluna Ações.
carregarTabela();
const rodapeTabela = () => {
    const totalSpan = document.getElementById('total');
    const totalRegistros = idTabela.tBodies[0].rows.length;
    totalSpan.textContent = totalRegistros;
};
