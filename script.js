const mensagens = [
      "Você tem R$0,00 na conta. Mas posso te emprestar um abraço 🤗",
      "Erro 404: Dinheiro não encontrado 🚫💸",
      "Saldo insuficiente... e a paciência também 😅",
      "Saque cancelado! Melhor ganhar na loteria 🍀",
      "Você pediu dinheiro, mas recebeu boas energias ✨",
      "Sistema indisponível. Volte depois de pagar seus boletos 📄😂",
      "A vida não é fácil, mas pelo menos você tentou 💪",  
    ];

    document.getElementById("sacar").addEventListener("click", () => {
      const valor = document.getElementById("valor").value;
      const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
      document.getElementById("mensagem").innerText = 
        valor ? `Você pediu R$${valor}, mas... ${mensagem}` : "Digite um valor antes de tentar sacar!";
    });