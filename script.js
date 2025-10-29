import db from './db.js';

document.addEventListener('DOMContentLoaded', () => {

    const mainNavButtons = document.querySelectorAll('#main-nav button, #main-nav-mobile button');
    const contentSections = document.querySelectorAll('.content-section');

    const regioesContent = document.getElementById('regioes-content');
    const regiaoFilters = document.getElementById('regiao-filters');
    const regiaoSearch = document.getElementById('regiao-search');

    const faccoesResumoTable = document.getElementById('faccoes-resumo-table');
    const faccoesList = document.getElementById('faccoes-list');
    const faccaoDetail = document.getElementById('faccoes-detail');
    const faccaoSearch = document.getElementById('faccao-search');

    function showSection(targetId) {
        contentSections.forEach(section => {
            section.classList.toggle('active', section.id === targetId);
        });
        mainNavButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.target === targetId);
        });
    }

    mainNavButtons.forEach(button => {
        button.addEventListener('click', () => {
            showSection(button.dataset.target);
        });
    });

    function renderRegioes(regiaoFiltro = 'Todos', buscaTermo = '') {
        regioesContent.innerHTML = '';
        const termo = buscaTermo.toLowerCase();

        const regioesFiltradas = db.regioes.filter(local => {
            const matchRegiao = (regiaoFiltro === 'Todos' || local.regiao === regiaoFiltro);
            const matchBusca = (local.nome.toLowerCase().includes(termo) || local.desc.toLowerCase().includes(termo));
            return matchRegiao && matchBusca;
        });

        if (regioesFiltradas.length === 0) {
            regioesContent.innerHTML = `<p class="text-gray-500 col-span-full">Nenhum local encontrado para os filtros selecionados.</p>`;
            return;
        }

        regioesFiltradas.forEach(local => {
            const card = document.createElement('div');
            card.className = 'card regiao-card';
            card.innerHTML = `
    <h3 class="text-2xl font-semibold text-primary mb-2">${local.nome}</h3>
    <span class="text-xs font-medium bg-primary text-white px-2 py-0.5 rounded-full mb-4 inline-block">${local.regiaoNome}</span>
    <p class="text-gray-700 leading-relaxed">${local.desc}</p>
    `;
            regioesContent.appendChild(card);
        });
    }

    regiaoFilters.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelectorAll('#regiao-filters button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            renderRegioes(e.target.dataset.regiao, regiaoSearch.value);
        }
    });

    regiaoSearch.addEventListener('input', () => {
        const filtroAtivo = document.querySelector('#regiao-filters button.active').dataset.regiao;
        renderRegioes(filtroAtivo, regiaoSearch.value);
    });

    function renderFaccoesList(buscaTermo = '') {
        faccoesList.innerHTML = '';
        const termo = buscaTermo.toLowerCase();

        const faccoesFiltradas = db.faccoes.filter(faccao => faccao.nome.toLowerCase().includes(termo));

        if (faccoesFiltradas.length === 0) {
            faccoesList.innerHTML = `<p class="text-gray-500 p-2">Nenhuma facção encontrada.</p>`;
        }

        faccoesFiltradas.forEach(faccao => {
            const button = document.createElement('button');
            button.className = 'filter-button text-left';
            button.textContent = faccao.nome;
            button.dataset.id = faccao.id;
            button.addEventListener('click', () => {
                renderFaccaoDetail(faccao.id);
                document.querySelectorAll('#faccoes-list button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
            faccoesList.appendChild(button);
        });

        // Seleciona a primeira facção por padrão ao renderizar, se houver
        if (faccoesFiltradas.length > 0 && !document.querySelector('#faccoes-list button.active')) {
            faccoesList.querySelector('button').click();
        }
    }

    function renderFaccaoDetail(faccaoId) {
        const faccao = db.faccoes.find(f => f.id === faccaoId);
        if (faccao) {
            faccaoDetail.innerHTML = `
                        <h3 class="text-2xl font-semibold text-primary mb-4">${faccao.nome}</h3>
                        <div class="space-y-4 text-gray-700 leading-relaxed">${faccao.desc}</div>
                    `;
        }
    }

    function populateFaccaoResumo() {
        db.faccoes.forEach(faccao => {
            const row = document.createElement('tr');
            row.className = 'hover:bg-gray-50';
            row.innerHTML = `
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${faccao.nome}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">${faccao.resumo}</td>
                    `;
            faccoesResumoTable.appendChild(row);
        });
    }

    faccaoSearch.addEventListener('input', () => {
        renderFaccoesList(faccaoSearch.value);
    });

    renderRegioes();
    renderFaccoesList();
    populateFaccaoResumo();
    showSection('visao-geral');
});