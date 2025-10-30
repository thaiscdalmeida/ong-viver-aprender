// ======== MODO ESCURO/CLARO ========
const botaoModo = document.getElementById("modo-btn");
botaoModo.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const modoAtivo = document.body.classList.contains("dark-mode");
  botaoModo.textContent = modoAtivo ? "☀" : "🌙";
});

// ======== BOTÃO VOLTAR AO TOPO ========
const btnTopo = document.getElementById("btnTopo");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 150) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ======== VALIDAÇÃO DE FORMULÁRIO ========
// ======== FORMULÁRIO DE CONTATO ========
const form = document.getElementById("formContato");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos antes de enviar!");
      return;
    }

    alert("Mensagem enviada com sucesso! Obrigado pelo contato 😊");
    form.reset();
  });
}

// ======== FORMULÁRIO DE DOAÇÃO ========
const formDoacao = document.getElementById("formDoacao");

if (formDoacao) {
  formDoacao.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nomeDoador = document.getElementById("nomeDoador").value.trim();
    const valor = document.getElementById("valor").value;
    const formaPagamento = document.querySelector('input[name="formaPagamento"]:checked')?.value;

    if (!nomeDoador || !valor || !formaPagamento) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Cria a mensagem personalizada
    const mensagem = document.createElement("div");
    mensagem.className = "mensagem-agradecimento";
    mensagem.style.backgroundColor = "#c8e6c9"; // verde claro
    mensagem.style.color = "#2e7d32"; // verde escuro
    mensagem.style.padding = "20px";
    mensagem.style.margin = "20px 0";
    mensagem.style.borderRadius = "10px";
    mensagem.style.textAlign = "center";
    mensagem.style.animation = "fadeIn 0.5s";

    // Personaliza a mensagem baseado na forma de pagamento
    let textoPagamento = "";
    switch(formaPagamento) {
      case "pix":
        textoPagamento = "Você receberá o QR Code do PIX por email";
        break;
      case "cartao":
        textoPagamento = "Você será redirecionado para o pagamento seguro";
        break;
      case "boleto":
        textoPagamento = "O boleto será enviado para seu email";
        break;
    }

    mensagem.innerHTML = `
      <h3 style="margin-bottom: 10px;">Muito Obrigado, ${nomeDoador}! ❤️</h3>
      <p>Sua doação de R$ ${valor},00 fará a diferença na vida de muitas pessoas!</p>
      <p style="font-size: 0.9rem; margin-top: 10px;">${textoPagamento}</p>
    `;

    // Adiciona a mensagem após o formulário
    formDoacao.parentNode.insertBefore(mensagem, formDoacao.nextSibling);

    // Remove a mensagem após 5 segundos
    setTimeout(() => {
      mensagem.style.animation = "fadeOut 0.5s";
      setTimeout(() => mensagem.remove(), 500);
    }, 5000);

    // Limpa o formulário
    formDoacao.reset();
  });
}

const formDoacaoItens = document.getElementById("formDoacaoItens");

if (formDoacaoItens) {
  formDoacaoItens.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const item = document.getElementById("item").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);

    if (!nome || !email || !item || quantidade <= 0) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    // Cria a mensagem personalizada
    const mensagem = document.createElement("div");
    mensagem.className = "mensagem-agradecimento";

    switch(item) {
      case "livros":
        mensagem.textContent = `Obrigado, ${nome}! Sua doação de ${quantidade} livro(s) vai inspirar muitas crianças!`;
        mensagem.style.backgroundColor = "#ffecb3"; // amarelo claro
        mensagem.style.color = "#ff6f00"; // laranja escuro
        break;
      case "mantimentos":
        mensagem.textContent = `Obrigado, ${nome}! Sua doação de ${quantidade} mantimento(s) vai ajudar famílias da comunidade!`;
        mensagem.style.backgroundColor = "#c8e6c9"; // verde claro
        mensagem.style.color = "#2e7d32"; // verde escuro
        break;
      case "roupas":
        mensagem.textContent = `Obrigado, ${nome}! Sua doação de ${quantidade} peça(s) de roupa vai aquecer muitas pessoas!`;
        mensagem.style.backgroundColor = "#bbdefb"; // azul claro
        mensagem.style.color = "#0d47a1"; // azul escuro
        break;
      default:
        mensagem.textContent = `Obrigado, ${nome}! Sua doação de ${quantidade} item(s) é muito valiosa!`;
        mensagem.style.backgroundColor = "#e1bee7"; // roxo claro
        mensagem.style.color = "#4a148c"; // roxo escuro
    }

    // Adiciona a mensagem abaixo do formulário
    formDoacaoItens.parentNode.insertBefore(mensagem, formDoacaoItens.nextSibling);

    // Remove mensagem após 5 segundos
    setTimeout(() => {
      mensagem.remove();
    }, 5000);

    formDoacaoItens.reset();

    // Atualiza barra de progresso (simulação)
    const barras = document.querySelectorAll(".barra");
    barras.forEach((barra) => {
      let largura = parseInt(barra.style.width);
      largura = Math.min(100, largura + Math.floor(Math.random() * 5)); // adiciona 0-5%
      barra.style.width = largura + "%";
      barra.textContent = largura + "%";
    });
  });
}
const formVoluntario = document.getElementById("formVoluntario");

if (formVoluntario) {
  formVoluntario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nomeVol").value.trim();
    const email = document.getElementById("emailVol").value.trim();
    const area = document.getElementById("areaVol").value;

    if (!nome || !email || !area) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    // Criar mensagem de agradecimento
    const mensagem = document.createElement("div");
    mensagem.className = "mensagem-agradecimento-vol";
    mensagem.textContent = `Obrigado, ${nome}! Sua inscrição como voluntário na área "${area}" foi registrada com sucesso.`;

    formVoluntario.parentNode.insertBefore(mensagem, formVoluntario.nextSibling);

    setTimeout(() => {
      mensagem.remove();
    }, 5000);

    formVoluntario.reset();
  });
}

// ======== FORMULÁRIO DE DOAÇÃO DE ITENS ========
const formDoacaoItens = document.getElementById("formDoacaoItens");

if (formDoacaoItens) {
  formDoacaoItens.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const item = document.getElementById("item").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);

    if (!nome || !email || !item || quantidade <= 0) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    // Cria a mensagem personalizada
    const mensagem = document.createElement("div");
    mensagem.className = "mensagem-agradecimento";
    mensagem.style.padding = "20px";
    mensagem.style.margin = "20px 0";
    mensagem.style.borderRadius = "10px";
    mensagem.style.textAlign = "center";
    mensagem.style.animation = "fadeIn 0.5s";
    
    let titulo = `Muito Obrigado, ${nome}! 🥳`;
    let textoDoacao = "";
    let corFundo = "";
    let corTexto = "";

    // Personaliza a mensagem e as cores baseadas no tipo de item
    switch(item) {
      case "livros":
        textoDoacao = `Sua doação de **${quantidade} livro(s)** vai **inspirar e educar** muitas crianças! 📚`;
        corFundo = "#ffecb3"; // amarelo claro
        corTexto = "#ff6f00"; // laranja escuro
        break;
      case "mantimentos":
        textoDoacao = `Sua doação de **${quantidade} item(s) de mantimento** vai garantir o **alimento e bem-estar** de famílias da comunidade! 🍎`;
        corFundo = "#c8e6c9"; // verde claro
        corTexto = "#2e7d32"; // verde escuro
        break;
      case "roupas":
        textoDoacao = `Sua doação de **${quantidade} peça(s) de roupa** vai **aquecer** quem precisa neste inverno! 🧣`;
        corFundo = "#bbdefb"; // azul claro
        corTexto = "#0d47a1"; // azul escuro
        break;
      default:
        textoDoacao = `Sua doação de **${quantidade} item(s)** é muito valiosa para a nossa causa! 🙏`;
        corFundo = "#e1bee7"; // roxo claro
        corTexto = "#4a148c"; // roxo escuro
    }
    
    mensagem.style.backgroundColor = corFundo;
    mensagem.style.color = corTexto;

    // Estrutura HTML da mensagem de agradecimento
    mensagem.innerHTML = `
      <h3 style="margin-bottom: 10px;">${titulo}</h3>
      <p style="font-size: 1.1rem; font-weight: bold;">${textoDoacao}</p>
      <p style="font-size: 0.9rem; margin-top: 15px;">Aguarde nosso contato pelo e-mail: **${email}** para combinarmos a retirada/entrega. Juntos, fazemos a diferença! ✨</p>
    `;


    // Adiciona a mensagem após o formulário
    formDoacaoItens.parentNode.insertBefore(mensagem, formDoacaoItens.nextSibling);

    // Remove a mensagem após 5 segundos
    setTimeout(() => {
      mensagem.style.animation = "fadeOut 0.5s";
      setTimeout(() => mensagem.remove(), 500);
    }, 5000);

    // Limpa o formulário
    formDoacaoItens.reset();

    // Atualiza barra de progresso (simulação)
    const barras = document.querySelectorAll(".barra");
    barras.forEach((barra) => {
      let largura = parseInt(barra.style.width || '0');
      largura = Math.min(100, largura + Math.floor(Math.random() * 5)); // adiciona 0-5%
      barra.style.width = largura + "%";
      barra.textContent = largura + "%";
    });
  });
}