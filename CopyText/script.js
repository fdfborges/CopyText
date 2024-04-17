    const BtnCopy1 = document.getElementById('BtnCopy1');
    const BtnCopy2 = document.getElementById('BtnCopy2');
    const BtnCopy3 = document.getElementById('BtnCopy3');
    const BtnCopy4 = document.getElementById('BtnCopy4');
    const BtnCopy5 = document.getElementById('BtnCopy5');
    const BtnCopy6 = document.getElementById('BtnCopy6');
    
    
    // Obtém a referência para a <textarea> com o ID 'textarea1'
    const textarea1 = document.getElementById('textarea1');
    const textarea2 = document.getElementById('textarea2');
    const textarea3 = document.getElementById('textarea3');
    const textarea4 = document.getElementById('textarea4');
    const textarea5 = document.getElementById('textarea5');
    const textarea6 = document.getElementById('textarea6');

    // Obtém a referência para o <BtnEditTextarea1> com o id <BtnEditTextarea1>
    const BtnEditTextarea1 = document.getElementById('BtnEditTextarea1');
    const BtnEditTextarea2 = document.getElementById('BtnEditTextarea2');
    const BtnEditTextarea3 = document.getElementById('BtnEditTextarea3');
    const BtnEditTextarea4 = document.getElementById('BtnEditTextarea4');
    const BtnEditTextarea5 = document.getElementById('BtnEditTextarea5');
    const BtnEditTextarea6 = document.getElementById('BtnEditTextarea6');
// Obtém a referência para a <label> com o ID 'label1'
    const label1 = document.getElementById('label1');
    const label2 = document.getElementById('label2');
    const label3 = document.getElementById('label3');
    const label4 = document.getElementById('label4');
    const label5 = document.getElementById('label5');
    const label6 = document.getElementById('label6');    
    // Texto a ser inserido na <textarea>

let dadosTextarea = [
    { texto: "Aproveitamos o seu Magistério, ao invés de você ter que cursar 4 longos anos, você conclui em apenas 12 Meses. - Com aulas ao vivo uma vez ao mês através da plataforma Teams, sendo 3 horas de aula. Você pode conciliar seus estudos com outras responsabilidades - Com acesso direto ao Professor, permitindo um total de 0% de dúvidas.", label: "Título da Caixa 1"},
    { texto: "Uma grade abrangente que aborda todas as áreas essenciais da pedagogia, desde a educação infantil até a gestão escolar. - Não solicitamos TCC. Apenas Estágio e Artigo, bem mais prático.", label: "Título da Caixa 2"},
    { texto: "Ao concluir o curso, você receberá uma certificação plena em Licenciatura Pedagógica, abrindo portas para diversas oportunidades de emprego e ascensão na carreira, além de possibilitar você ingressar numa pós-graduação. *Com Habilitação* para atuar nas séries iniciais (1° ao 5°Ano), educação infantil e gestão escolar, incluindo supervisão, coordenação e direção.", label: "Título da Caixa 3"},
    { texto: "Nosso curso é reconhecido pelo Ministério da Educação, garantindo a validade e qualidade de sua formação. O que é essencial para assumir cargos, ter aumento salarial e prestar concursos públicos. Segue o Link para consulta no portal oficial: https://emec.mec.gov.br/emec/consulta-cadastro/detalhes-ies/d96957f455f6405d14c6542552b0f6eb/MTg0NjM=", label: "Título da Caixa 4"},
    { texto: "São muitas informações, mas não se preocupe. Em relação ao tempo, modalidade, diploma, reconhecimento, artigo ou estágios. Quais as suas dúvidas?", label: "Título da Caixa 5"},
    { texto: "*Hoje para que você tenha: *Diploma Reconhecido pelo MEC - Acesso a Metodologia EAV - Aproveitamento do Magistério - Conclusão em 12 Meses - Sem apresentação de TCC, apenas artigo. Estamos disponibilizando de ~R$:645,30~ POR R$:522,75 (Mensalidades Fixas) Essas condições são confortáveis financeiramente para você hoje?", label: "Título da Caixa 6"}
];

    //Define o valor da textarea igual a respectiva posição no array.
    textarea1.value = dadosTextarea[0].texto;
    textarea2.value = dadosTextarea[1].texto;
    textarea3.value = dadosTextarea[2].texto;
    textarea4.value = dadosTextarea[3].texto;
    textarea5.value = dadosTextarea[4].texto;
    textarea6.value = dadosTextarea[5].texto;
    //Define o valor da label igual a respetiva posição no array
    label1.textContent = dadosTextarea[0].label
    label2.textContent = dadosTextarea[1].label
    label3.textContent = dadosTextarea[2].label
    label4.textContent = dadosTextarea[3].label
    label5.textContent = dadosTextarea[4].label
    label6.textContent = dadosTextarea[5].label


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


BtnCopy1.addEventListener('click', function() {
    let textToCopy1 = textarea1.value;
    navigator.clipboard.writeText(textToCopy1);

    BtnCopy1.textContent = 'Copiado!';
    setTimeout(() => {
        BtnCopy1.textContent = 'Copiar';
    }, 1000);
});

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

BtnEditTextarea6.addEventListener('click', ()=>{
    habilitedTextAreaAndSalveValue('textarea6');
})

window.onload = function() {
    textarea1.value = localStorage.getItem('textarea1') || dadosTextarea[0].texto;
    textarea2.value = localStorage.getItem('textarea2') || dadosTextarea[1].texto;
    textarea3.value = localStorage.getItem('textarea3') || dadosTextarea[2].texto;
    textarea4.value = localStorage.getItem('textarea4') || dadosTextarea[3].texto;
    textarea5.value = localStorage.getItem('textarea5') || dadosTextarea[4].texto;
    textarea6.value = localStorage.getItem('textarea6') || dadosTextarea[5].texto;
}