//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (!nome) {
        alert('Por favor, digite um nome.');
        return;
    }

    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = Array.from(listaAmigos.children).map(li => li.textContent);

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    const novoAmigo = document.createElement('li');
    novoAmigo.textContent = nome;
    listaAmigos.appendChild(novoAmigo);

    inputAmigo.value = '';
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = Array.from(listaAmigos.children).map(li => li.textContent.trim());

    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear!');
        return;
    }

    let shuffled;
    let isDerangement;

    do {
        shuffled = shuffleArray([...amigos]);
        isDerangement = true;
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === shuffled[i]) {
                isDerangement = false;
                break;
            }
        }
    } while (!isDerangement);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} tirou ${shuffled[index]}`;
        resultado.appendChild(li);
    });
}