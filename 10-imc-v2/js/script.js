//Capturar evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector(`#peso`);
    const inputAltura = e.target.querySelector(`#altura`);

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        SetResultado(`Peso inválido`, false);
        return;
    }
    if (!altura) {
        SetResultado(`Altura inválido`, false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc}. \nEste valor considera que você está na faixa ${nivelImc}.`;

    SetResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = [`Ìnválido`, `Muito abaixo do peso`, `Abaixo do peso`, `Peso normal`, `Acima do peso`, `Obesidade grau I`, `Obesidade grau II`, `Obesidade grau III`];


    if (imc > 40) return nivel[7];
    if (imc >= 35) return nivel[6];
    if (imc >= 30) return nivel[5];
    if (imc >= 25) return nivel[4];
    if (imc >= 18.5) return nivel[3];
    if (imc >= 17) return nivel[2];
    if (imc >= 16) return nivel[1];
    if (imc < 16) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function CriaP() {
    const p = document.createElement('p');
    return p;
}

function SetResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = CriaP()

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}