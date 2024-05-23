let selectTema = document.querySelector('select#tema');
selectTema.addEventListener('change', evento => {
    let temaSelecionado = evento.target.value;
    console.log(temaSelecionado);
    if (temaSelecionado){
        mudaTema(temaSelecionado);
        localStorage.setItem('tema', temaSelecionado)
    }
});

const mudaTema = (temaSelecionado) => {
    linkTema = document.querySelector('#link-tema');
    let url = "/css/estilo-tema-"+temaSelecionado+".css";
    linkTema.href = url;
}

let tema = localStorage.getItem('tema');
if(tema) {
    mudaTema(tema);
}

const carregarProfissionais = () => {
    let url = "https://my-json-server.typicode.com/juniorlimeiras/json/profissionais";
    let xhr = new XMLHttpRequest();
    fetch(url).then(resposta => {
        return resposta.json();
    }).then(dados => {
        for (const item of dados){
            inserirProfissional(item);
        };
        eventoExcluir();
    }).catch(erro => {
        console.error(erro);
    })
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

let botaoAdicionar = document.querySelector('a.botao#add');
let form = document.querySelector('form')
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


let tabela = document.querySelector('table');
//Adicionar um funcionario para  enviar os dados do form para a tabela
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let profissional = {
        id: tabela.tBodies[0].rows.length + 1,
        nome: form.nome.value,
        registroConselho: form.registro.value,
        telefone: form.telefone.value,
        email: form.email.value,
        unidade: form.unidade.options[form.unidade.selectedIndex].label,
        especialidade: form.especialidade.options[form.especialidade.selectedIndex].label

    };
    console.log(profissional);
    inserirProfissional(profissional);
    form.reset();
    eventoExcluir();
    botaoAdicionar.classList.remove('esconder');
    form.classList.add('inativo');
});

//Função que insere um objeto profissional na tabela HTML
const inserirProfissional = (item) => {
    let linha = document.createElement('tr');
                let id = document.createElement('td');
                let nome = document.createElement('td');
                let registroConselho = document.createElement('td');
                let telefone = document.createElement('td');
                let email = document.createElement('td');
                let unidade = document.createElement('td');
                let especialidade = document.createElement('td');
                let acoes = document.createElement('td');
                //Preencher os elementos
                id.textContent = item.id;
                nome.textContent = item.nome;
                registroConselho.textContent = item.registro;
                telefone.textContent = item.telefone;
                email.textContent = item.email;
                unidade.textContent = item.unidade;
                especialidade.textContent = item.especialidade;
                acoes.innerHTML = `<a class="botao" href="javascript:void(0)">Editar</a> <a id="vermelho" class="botao"
                href="javascript:void(0)">Excluir</a>`;
                //Preencher a linha
                linha.appendChild(id);
                linha.append(nome);
                linha.appendChild(registroConselho);
                linha.appendChild(email);
                linha.appendChild(telefone);
                linha.appendChild(unidade);
                linha.appendChild(especialidade);
                linha.appendChild(acoes);
                //Preencher a
                tabela.tBodies[0].appendChild(linha);

                let td_table_footer = document.querySelector('td.total');
                td_table_footer.textContent = "Total de registros: " + tabela.tBodies[0].rows.length
};