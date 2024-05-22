let selectTema = document.querySelector('select#tema');
selectTema.addEventListener('change', 
evento => {
    let temaselecionado = evento.target.value;
    //console.log(temaselecionado)
    if (temaselecionado){
        mudaTema(temaselecionado);
        localStorage.setItem('tema', temaselecionado)
    }
});
const mudaTema = (temaselecionado) => {
    linkTema = document.querySelector('#linkTema');
    let url = "./css/estilo-tema-" + temaselecionado + '.css';
    linkTema.href = url;
    imglogo = document.querySelector('#imglogo');
    console.log(temaselecionado)
    if(temaselecionado == 'preto'){
        imglogo.src = "./imagens/logo_preto(64).png"}
    else if(temaselecionado == 'amarelo' || temaselecionado == 'vermelho'){
        imglogo.src = "./imagens/logo_branco(64).png"
    }
    else{
        imglogo.src = "./imagens/logo_azul(64).png"
    }
};
let tema = localStorage.getItem('tema');
if (tema) {
    mudaTema(tema)
};
// Cria a funcionalidade dos botões adicionar e cancelar da página que controlam o formulário. funcao adicionada para esconder
let botaoAdicionar = document.querySelector('.adicionar');
let botaoCancelar = document.querySelector('.cancelar');
let form = document.querySelector('form');
let botaoEsconder2 = document.querySelector('.esconder2');
// Ao clicar no botão Adicionar, remove a classe que esconde o formulário.
botaoAdicionar.addEventListener('click', (event) => {
    form.classList.remove('inativo');
    botaoEsconder2.classList.add('esconder');
    event.preventDefault();
});
// Ao clicar no botão Cancelar, adiciona a classe que esconde o formulário e o reseta. foi adicionado um variavel botaoEsconder2.classList.remove('.esconder');
botaoCancelar.addEventListener('click', (event) => {
    form.classList.add('inativo');
    form.reset();
    botaoEsconder2.classList.remove('esconder'); //<< [INDIVIDUAL] Alterar a forma como o usuário visualiza o botão Adicionar. (Entrega: 22/05/2024) O botão Adicionar não deve ser visualizado após ser clicado, mas somente quando o usuário clicar nos botões Enviar ou Cancelar.
    event.preventDefault();
});
let idTabela = document.querySelector('table');// Adiciona funcionalidade ao botão Enviar e envia os dados do formulário para a tabela
form.addEventListener('submit', (event) => {
    event.preventDefault();
    botaoEsconder2.classList.remove('esconder'); //<< [INDIVIDUAL] Alterar a forma como o usuário visualiza o botão Adicionar. (Entrega: 22/05/2024) O botão Adicionar não deve ser visualizado após ser clicado, mas somente quando o usuário clicar nos botões Enviar ou Cancelar.
    // Cria um objeto com os dados do profissional
    let profissional = {
        id: idTabela.tBodies[0].rows.length + 1,
        nome: form.nomeProfissional.value,
        registro: form.registroProfissional.value,
        email: form.emailProfissional.value,
        telefone: form.telefoneProfissional.value, 
        unidade: form.unidadeProfissional.options[form.unidadeProfissional.selectedIndex].text,
        especialidade: form.especialidadeProfissional.options[form.especialidadeProfissional.selectedIndex].text
    };
    inserirProfissional(profissional); // Insere o profissional na tabela
    form.reset();
    form.classList.add('inativo');
    console.log(profissional)
});
// Adiciona as informações na tabela
const inserirProfissional = (item) => {
    let tabela = document.querySelector('table'); // Cria elementos de célula para cada informação do profissional
    let linha = document.createElement('tr');
    let id = document.createElement('td');
    let nome = document.createElement('td');
    let conselho = document.createElement('td');
    let email = document.createElement('td');
    let telefone = document.createElement('td');
    let unidade = document.createElement('td');
    let especialidade = document.createElement('td');
    let acoes = document.createElement('td');
    // Define o texto de cada célula com as informações do profissional
    id.textContent = item.id;
    nome.textContent = item.nome;
    conselho.textContent = item.registro;
    email.textContent = item.email;
    telefone.textContent = item.telefone;
    unidade.textContent = item.unidade;
    especialidade.textContent = item.especialidade;
    // Adiciona os botões de ação na célula de ações
    acoes.innerHTML = ` <a class="editar">Editar</a>
                        <a class="excluir">Excluir</a>`;
    // Adiciona as células à linha da tabela
    linha.appendChild(id);
    linha.appendChild(nome);
    linha.appendChild(conselho);
    linha.appendChild(email);
    linha.appendChild(telefone);
    linha.appendChild(unidade);
    linha.appendChild(especialidade);
    linha.appendChild(acoes);
    // Adiciona a linha à tabela
    tabela.tBodies[0].appendChild(linha)
    let botaoExcluir = linha.querySelector('.excluir'); // Adiciona a funcionalidade de exclusão ao botão "Excluir"
    botaoExcluir.addEventListener('click', () => {
        linha.remove();
        rodapeTabela();// chamaa  funçao para reduzir. aqui faz parte da atividade [INDIVIDUAL] Alterar o rodapé da tabela que mostra o total de profissionais para que seja atualizado conforme a quantidade de profissionais. (Entrega: 22/05/2024) A atualização deve considerar todos os registros
    })
    rodapeTabela();//chama a funçao para adicionar 
};
// Carrega as Informações do JSON na tabela
const carregaTabela = () => {
    // Define a URL do arquivo JSON
    let url = 'https://my-json-server.typicode.com/juniorlimeiras/json/profissionais'
    // Realiza uma solicitação fetch para obter os dados do JSON
    fetch(url).then(resposta => {
        return resposta.json();
    }).then(dados => {
        // Para cada item no JSON, insere o profissional na tabela
        for(const item of dados) {
            inserirProfissional(item);
        }
    }).catch(erro => (
        console.error(erro)
    ));
}
//[INDIVIDUAL] Alterar o rodapé da tabela que mostra o total de profissionais para que seja atualizado conforme a quantidade de profissionais. (Entrega: 22/05/2024) A atualização deve considerar todos os registros. >>
carregaTabela(); // Chama a função para carregar a tabela quando a página é carregada
const rodapeTabela = () => { // Atualiza o rodapé para a quantidade de linha da tabela.
    const totalSpan = document.getElementById('total');
    const totalRegistros = idTabela.tBodies[0].rows.length;
    totalSpan.textContent = totalRegistros;
};
//<<