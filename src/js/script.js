
// Frases motivacionais
var quotes = [
    "Acredite em si mesmo e todos os seus sonhos se tornarão realidade.",
    "Pequenos passos podem levar a grandes mudanças.",
    "Nunca é tarde demais para ser quem você poderia ter sido.",
    "Acredite que você pode, e você já está no meio do caminho.",
    "A jornada de mil milhas começa com um único passo."
    // ... adicione mais frases motivacionais aqui ...
];

// Quando o usuário clica no botão "Saiba Mais", exibe uma frase motivacional aleatória
document.getElementById("learn-more").addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    alert(quotes[randomIndex]);
});



