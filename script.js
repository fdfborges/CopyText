    const BtnCopy1 = document.getElementById('BtnCopy1');
    const BtnCopy2 = document.getElementById('BtnCopy2');
    const BtnCopy3 = document.getElementById('BtnCopy3');
    const BtnCopy4 = document.getElementById('BtnCopy4');
    const BtnCopy5 = document.getElementById('BtnCopy5');
    const BtnCopy6 = document.getElementById('BtnCopy6');
    const BtnCopy7 = document.getElementById('BtnCopy7');
    const BtnCopy8 = document.getElementById('BtnCopy8');
    const BtnCopy9 = document.getElementById('BtnCopy9');
    
    
    
    // Obtém a referência para a <textarea> com o ID 'textarea1'
    const textarea1 = document.getElementById('textarea1');
    const textarea2 = document.getElementById('textarea2');
    const textarea3 = document.getElementById('textarea3');
    const textarea4 = document.getElementById('textarea4');
    const textarea5 = document.getElementById('textarea5');
    const textarea6 = document.getElementById('textarea6');
    const textarea7 = document.getElementById('textarea7');
    const textarea8 = document.getElementById('textarea8');
    const textarea9 = document.getElementById('textarea9');

    // Obtém a referência para o <BtnEditTextarea1> com o id <BtnEditTextarea1>
    const BtnEditTextarea1 = document.getElementById('BtnEditTextarea1');
    const BtnEditTextarea2 = document.getElementById('BtnEditTextarea2');
    const BtnEditTextarea3 = document.getElementById('BtnEditTextarea3');
    const BtnEditTextarea4 = document.getElementById('BtnEditTextarea4');
    const BtnEditTextarea5 = document.getElementById('BtnEditTextarea5');
    const BtnEditTextarea6 = document.getElementById('BtnEditTextarea6');
    const BtnEditTextarea7 = document.getElementById('BtnEditTextarea7');
    const BtnEditTextarea8 = document.getElementById('BtnEditTextarea8');
    const BtnEditTextarea9 = document.getElementById('BtnEditTextarea9');
// Obtém a referência para a <label> com o ID 'label1'
    const label1 = document.getElementById('label1');
    const label2 = document.getElementById('label2');
    const label3 = document.getElementById('label3');
    const label4 = document.getElementById('label4');
    const label5 = document.getElementById('label5');
    const label6 = document.getElementById('label6');
    const label7 = document.getElementById('label7');
    const label8 = document.getElementById('label8');
    const label9 = document.getElementById('label9');     
    // Obtém a referência para a <label> com ID 'BtnEditLabel1'
    const BtnEditLabel1 = document.getElementById('BtnEditLabel1');
    const BtnEditLabel2 = document.getElementById('BtnEditLabel2');
    const BtnEditLabel3 = document.getElementById('BtnEditLabel3');
    const BtnEditLabel4 = document.getElementById('BtnEditLabel4');
    const BtnEditLabel5 = document.getElementById('BtnEditLabel5');
    const BtnEditLabel6 = document.getElementById('BtnEditLabel6');
    const BtnEditLabel7 = document.getElementById('BtnEditLabel7');
    const BtnEditLabel8 = document.getElementById('BtnEditLabel8');
    const BtnEditLabel9 = document.getElementById('BtnEditLabel9');

let dadosTextarea = [
    { texto: "Texto da Caixa", label: "Título da Caixa"},
    { texto: "Texto da Caixa", label: "Título da Caixa"},
    { texto: "Texto da Caixa", label: "Título da Caixa"},
    { texto: "Texto da Caixa", label: "Título da Caixa"},
    { texto: "Texto da Caixa", label: "Título da Caixa"},
    { texto: "Texto da Caixa", label: "Título da Caixa"},
    { texto: "Texto da Caixa", label: "Título da Caixa"},
    { texto: "Texto da Caixa", label: "Título da Caixa"},
    { texto: "Texto da Caixa", label: "Título da Caixa"}
];

    //Define o valor da textarea igual a respectiva posição no array.
    textarea1.value = dadosTextarea[0].texto;
    textarea2.value = dadosTextarea[1].texto;
    textarea3.value = dadosTextarea[2].texto;
    textarea4.value = dadosTextarea[3].texto;
    textarea5.value = dadosTextarea[4].texto;
    textarea6.value = dadosTextarea[5].texto;
    textarea4.value = dadosTextarea[6].texto;
    textarea5.value = dadosTextarea[7].texto;
    textarea6.value = dadosTextarea[8].texto;
    //Define o valor da label igual a respetiva posição no array
    label1.value = dadosTextarea[0].label
    label2.value = dadosTextarea[1].label
    label3.value = dadosTextarea[2].label
    label4.value = dadosTextarea[3].label
    label5.value = dadosTextarea[4].label
    label6.value = dadosTextarea[5].label
    label6.value = dadosTextarea[6].label
    label6.value = dadosTextarea[7].label
    label6.value = dadosTextarea[8].label


function habilitedTextAreaAndSalveValue(id){
    const textarea = document.getElementById(id);

    if (textarea.disabled) {
        textarea.disabled = false; // Se estiver desabilitada, habilita a textarea
        textarea.focus(); // Dá foco à textarea
    } else {
        textarea.disabled = true; // Se estiver habilitada, desabilita a textarea
        localStorage.setItem(id, textarea.value); // Salva o valor no localStorage
    }
}

function habilitedLabelAndSalveValue(id){
    const label = document.getElementById(id);

    if (label.disabled){
        label.disabled = false; // Se estiver desabilitado, habilita a label
        label.focus(); // Dá foco a label
    }else {
        label.disabled = true;
        localStorage.setItem(id, label.value);
    }
}


BtnCopy1.addEventListener('click', function() {
    let textToCopy1 = textarea1.value;
    navigator.clipboard.writeText(textToCopy1);

    BtnCopy1.textContent = 'Copiado!';
    setTimeout(() => {
        BtnCopy1.textContent = 'Copiar';
    }, 1000);
});

BtnEditLabel1.addEventListener('click', ()=>{
    habilitedLabelAndSalveValue('label1');
})

BtnEditTextarea1.addEventListener('click', ()=>{
    habilitedTextAreaAndSalveValue('textarea1');
})

BtnCopy2.addEventListener('click', function() {
    let textToCopy2 = textarea2.value;
    navigator.clipboard.writeText(textToCopy2);

    BtnCopy2.textContent = 'Copiado!';
    setTimeout(() => {
        BtnCopy2.textContent = 'Copiar';
    }, 1000);
});

BtnEditLabel2.addEventListener('click', ()=>{
    habilitedLabelAndSalveValue('label2');
})

BtnEditTextarea2.addEventListener('click', ()=>{
    habilitedTextAreaAndSalveValue('textarea2');
})

BtnCopy3.addEventListener('click', function() {
    let textToCopy3 = textarea3.value;
    navigator.clipboard.writeText(textToCopy3);

    BtnCopy3.textContent = 'Copiado!';
    setTimeout(() => {
        BtnCopy3.textContent = 'Copiar';
    }, 1000);
});

BtnEditLabel3.addEventListener('click', ()=>{
    habilitedLabelAndSalveValue('label3');
})

BtnEditTextarea3.addEventListener('click', ()=>{
    habilitedTextAreaAndSalveValue('textarea3');
})

BtnCopy4.addEventListener('click', function() {
    let textToCopy4 = textarea4.value;
    navigator.clipboard.writeText(textToCopy4);

    BtnCopy4.textContent = 'Copiado!';
    setTimeout(() => {
        BtnCopy4.textContent = 'Copiar';
    }, 1000);
});

BtnEditLabel4.addEventListener('click', ()=>{
    habilitedLabelAndSalveValue('label4');
})

BtnEditTextarea4.addEventListener('click', ()=>{
    habilitedTextAreaAndSalveValue('textarea4');
})

BtnCopy5.addEventListener('click', function() {
    let textToCopy5 = textarea5.value;
    navigator.clipboard.writeText(textToCopy5);

    BtnCopy5.textContent = 'Copiado!';
    setTimeout(() => {
        BtnCopy5.textContent = 'Copiar';
    }, 1000);
});

BtnEditLabel5.addEventListener('click', ()=>{
    habilitedLabelAndSalveValue('label5');
})

BtnEditTextarea5.addEventListener('click', ()=>{
    habilitedTextAreaAndSalveValue('textarea5');
})

BtnCopy6.addEventListener('click', function() {
    let textToCopy6 = textarea6.value;
    navigator.clipboard.writeText(textToCopy6);

    BtnCopy6.textContent = 'Copiado!';
    setTimeout(() => {
        BtnCopy6.textContent = 'Copiar';
    }, 1000);
});

BtnEditLabel6.addEventListener('click', ()=>{
    habilitedLabelAndSalveValue('label6');
})

BtnEditTextarea6.addEventListener('click', ()=>{
    habilitedTextAreaAndSalveValue('textarea6');
})

BtnCopy7.addEventListener('click', function() {
    let textToCopy7 = textarea7.value;
    navigator.clipboard.writeText(textToCopy7);

    BtnCopy7.textContent = 'Copiado!';
    setTimeout(() => {
        BtnCopy6.textContent = 'Copiar';
    }, 1000);
});

BtnEditLabel7.addEventListener('click', ()=>{
    habilitedLabelAndSalveValue('label7');
})

BtnEditTextarea7.addEventListener('click', ()=>{
    habilitedTextAreaAndSalveValue('textarea7');
})

BtnCopy8.addEventListener('click', function() {
    let textToCopy8 = textarea8.value;
    navigator.clipboard.writeText(textToCopy8);

    BtnCopy8.textContent = 'Copiado!';
    setTimeout(() => {
        BtnCopy8.textContent = 'Copiar';
    }, 1000);
});

BtnEditLabel8.addEventListener('click', ()=>{
    habilitedLabelAndSalveValue('label8');
})

BtnEditTextarea8.addEventListener('click', ()=>{
    habilitedTextAreaAndSalveValue('textarea8');
})

BtnCopy9.addEventListener('click', function() {
    let textToCopy9 = textarea9.value;
    navigator.clipboard.writeText(textToCopy9);

    BtnCopy9.textContent = 'Copiado!';
    setTimeout(() => {
        BtnCopy9.textContent = 'Copiar';
    }, 1000);
});

BtnEditLabel9.addEventListener('click', ()=>{
    habilitedLabelAndSalveValue('label9');
})

BtnEditTextarea9.addEventListener('click', ()=>{
    habilitedTextAreaAndSalveValue('textarea9');
})

window.onload = function() {
    textarea1.value = localStorage.getItem('textarea1') || dadosTextarea[0].texto;
    label1.value = localStorage.getItem('label1') || dadosTextarea[0].label;
    textarea2.value = localStorage.getItem('textarea2') || dadosTextarea[1].texto;
    label2.value = localStorage.getItem('label2') || dadosTextarea[1].label;
    textarea3.value = localStorage.getItem('textarea3') || dadosTextarea[2].texto;
    label3.value = localStorage.getItem('label3') || dadosTextarea[2].label;
    textarea4.value = localStorage.getItem('textarea4') || dadosTextarea[3].texto;
    label4.value = localStorage.getItem('label4') || dadosTextarea[3].label;
    textarea5.value = localStorage.getItem('textarea5') || dadosTextarea[4].texto;
    label5.value = localStorage.getItem('label5') || dadosTextarea[4].label;
    textarea6.value = localStorage.getItem('textarea6') || dadosTextarea[5].texto;
    label6.value = localStorage.getItem('label6') || dadosTextarea[5].label;
    textarea7.value = localStorage.getItem('textarea7') || dadosTextarea[6].texto;
    label7.value = localStorage.getItem('label7') || dadosTextarea[6].label;
    textarea8.value = localStorage.getItem('textarea8') || dadosTextarea[7].texto;
    label8.value = localStorage.getItem('label8') || dadosTextarea[7].label;
    textarea9.value = localStorage.getItem('textarea9') || dadosTextarea[8].texto;
    label9.value = localStorage.getItem('label9') || dadosTextarea[8].label;
}