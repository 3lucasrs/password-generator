/**
 * CONTANTES DOM E CONST CARACTERES 
 */
const range = document.getElementById('range');
const result = document.getElementById('password');
const copy = document.getElementById('copy');
const copyarea = document.querySelector('.clicktocopy');
const copyareaTEXT = document.querySelector('#textcopy').innerHTML;
const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y',
    'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z', '1', '2', '3',
    '4', '5', '6', '7', '8', '9', '0'];

/**
 * GERAR SENHA ALEATÓRIA
 */
const generatePassword = () => {
    let password = '';

    for (let i = 0; i < range.value; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    result.innerText = password;
    copySuccess(false);
}

/**
 * MUDAR O VISOR 'clicktocopy' E RETORNAR AO PADRÃO
 */
const copySuccess = (torf) => {
    if (torf == true) {
        copyarea.classList.add('success');
        copyarea.innerHTML = '<span>Copiado com sucesso! ✅</span>';
    } else {
        copyarea.classList.remove('success');
        copyarea.innerHTML = '<span>' + copyareaTEXT + '</span>';
    }

}

/**
 * CLICAR E COPIAR A SENHA
 */
copy.onclick = () => {
    navigator.clipboard.writeText(result.textContent);
    copySuccess(true);

}

/**
 * ATUALIZAR O TAMANHO ATUAL
 */
range.addEventListener('change', () => {
    document.getElementById('range_value').innerText = range.value;
} )
