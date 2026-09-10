const messages = [
  "Você está mais perto do seu objetivo do que imagina.",
  "Acredite em você, mesmo quando ninguém mais acreditar.",
  "Pequenos passos também levam a grandes conquistas.",
  "Hoje é um ótimo dia para começar algo novo.",
  "Não tenha medo de recomeçar. Você não está começando do zero, está começando com experiência.",
  "Seu esforço de hoje será o seu orgulho de amanhã.",
  "Você é capaz de coisas incríveis.",
  "Continue. Até os dias difíceis fazem parte da jornada.",
  "Confie no processo e tenha paciência com você mesmo.",
  "Uma oportunidade pode estar escondida atrás de um desafio.",
  "Não compare seu capítulo 1 com o capítulo 20 de outra pessoa.",
  "Você não precisa ser perfeito para fazer algo extraordinário.",
  "Respire fundo. Você consegue lidar com isso.",
  "O melhor ainda pode estar por vir.",
  "Tenha coragem para seguir o caminho que faz sentido para você.",
  "Cada dia é uma nova chance de fazer diferente.",
  "Seu potencial é maior do que seus medos.",
  "Continue plantando. No momento certo, você vai colher.",
  "Você já superou dias que achou que não conseguiria.",
  "Acredite: coisas boas também acontecem com você."
];

const button = document.getElementById("fortuneButton");
const cookie = document.getElementById("cookie");
const messageBox = document.getElementById("messageBox");
const message = document.getElementById("message");
const counter = document.getElementById("counter");

let revealedMessages = 0;
let lastMessage = -1;

function getRandomMessage() {
  let randomIndex;

  // Evita repetir imediatamente a mesma mensagem
  do {
    randomIndex = Math.floor(Math.random() * messages.length);
  } while (randomIndex === lastMessage && messages.length > 1);

  lastMessage = randomIndex;

  return messages[randomIndex];
}

function revealFortune() {
  const randomMessage = getRandomMessage();

  cookie.classList.remove("break");

  // Reinicia a animação
  void cookie.offsetWidth;

  cookie.classList.add("break");

  messageBox.classList.remove("show");

  setTimeout(() => {
    message.textContent = `“${randomMessage}”`;

    messageBox.classList.add("show");

    revealedMessages++;

    counter.textContent =
      `Mensagens reveladas: ${revealedMessages}`;
  }, 300);
}

button.addEventListener("click", revealFortune);
cookie.addEventListener("click", revealFortune);
