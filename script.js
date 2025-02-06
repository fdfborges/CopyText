document.addEventListener("DOMContentLoaded", function() {
    const addInicioButton = document.getElementById("addInicio");
    const addMeioButton = document.getElementById("addMeio");
    const addFinalButton = document.getElementById("addFinal");

    // Função para criar uma box
    function createBox(index, sectionId) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
            <div class="HeadBox">
                <div class="InputWithBtnEdit">
                    <input id="${sectionId}-label${index}" disabled value="Título ${index}"></input>
                    <button class="BtnEditLabel" onclick="toggleEditInput('${sectionId}-label${index}')">✏️</button>
                </div>
                <button class="btnCopy" onclick="copyToClipboard('${sectionId}-textarea${index}', this)">COPIAR</button>
                <button class="btnDelete" onclick="deleteField(${index}, '${sectionId}')">🗑️</button>
            </div>
            <textarea id="${sectionId}-textarea${index}" disabled style="resize: none">Texto da Caixa ${index}</textarea>
            <button class="BtnEditTextarea" onclick="toggleEditTextarea('${sectionId}-textarea${index}')">✏️</button>
        `;
        const section = document.getElementById(sectionId);
        section.appendChild(box);

        // Atualiza o localStorage com o índice da nova box
        let currentData = JSON.parse(localStorage.getItem(sectionId)) || [];
        if (!currentData.includes(index)) {
            currentData.push(index); // Só adiciona se o índice não existir
            localStorage.setItem(sectionId, JSON.stringify(currentData));
        }

        // Recuperar e restaurar os dados salvos
        restoreFieldData(index, sectionId);
    }

    // Função para carregar as caixas salvas do localStorage
    function loadSavedFields() {
        const sections = ['IniciodoAtendimento', 'MeiodoAtendimento', 'FinaldoAtendimento'];
        
        sections.forEach(sectionId => {
            const savedIndexes = JSON.parse(localStorage.getItem(sectionId)) || [];
            savedIndexes.forEach(index => {
                if (!document.getElementById(`${sectionId}-label${index}`)) {
                    createBox(index, sectionId);  // Cria a box a partir do saved index, se não existir
                }
            });
        });
    }

    // Carregar as caixas salvas ao carregar a página
    loadSavedFields();

    // Adicionar caixas nas seções
    addInicioButton.addEventListener("click", function() {
        const count = document.getElementById("IniciodoAtendimento").children.length + 1;
        createBox(count, "IniciodoAtendimento");
    });

    addMeioButton.addEventListener("click", function() {
        const count = document.getElementById("MeiodoAtendimento").children.length + 1;
        createBox(count, "MeiodoAtendimento");
    });

    addFinalButton.addEventListener("click", function() {
        const count = document.getElementById("FinaldoAtendimento").children.length + 1;
        createBox(count, "FinaldoAtendimento");
    });
});

// Função para editar o título (input)
function toggleEditInput(id) {
    const elem = document.getElementById(id);
    elem.disabled = !elem.disabled;
    if (!elem.disabled) elem.focus();

    // Salva o valor editado no localStorage
    localStorage.setItem(id, elem.value);
}

// Função para editar o texto (textarea)
function toggleEditTextarea(id) {
    const elem = document.getElementById(id);
    elem.disabled = !elem.disabled;
    if (!elem.disabled) elem.focus();

    // Salva o valor editado no localStorage
    localStorage.setItem(id, elem.value);
}

// Função para restaurar os dados salvos de um campo
function restoreFieldData(index, sectionId) {
    const label = document.getElementById(`${sectionId}-label${index}`);
    const textarea = document.getElementById(`${sectionId}-textarea${index}`);

    // Restaurar o valor do título (input)
    const labelValue = localStorage.getItem(`${sectionId}-label${index}`);
    if (labelValue) {
        label.value = labelValue;
    }

    // Restaurar o valor do conteúdo (textarea)
    const textareaValue = localStorage.getItem(`${sectionId}-textarea${index}`);
    if (textareaValue) {
        textarea.value = textareaValue;
    }
}

function copyToClipboard(id, button) {
    const text = document.getElementById(id).value;
    navigator.clipboard.writeText(text);
    button.textContent = 'Copiado!';
    setTimeout(() => button.textContent = 'COPIAR', 1000);
}

function deleteField(index, sectionId) {
    const field = document.getElementById(`${sectionId}-label${index}`).closest(".box");
    field.remove();

    // Remover o índice do localStorage da seção
    let currentData = JSON.parse(localStorage.getItem(sectionId)) || [];
    currentData = currentData.filter(savedIndex => savedIndex !== index);
    localStorage.setItem(sectionId, JSON.stringify(currentData));

    // Limpar os dados do localStorage dos campos deletados
    localStorage.removeItem(`${sectionId}-label${index}`);
    localStorage.removeItem(`${sectionId}-textarea${index}`);
}
