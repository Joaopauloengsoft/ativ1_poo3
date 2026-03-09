const inputTemperatura = document.querySelector('input');
const botaoConverter = document.querySelector('button');
const divResultado = document.querySelector('div');

// 2. FUNÇÃO DE CONVERSÃO E ESCOPO LOCAL
function converterParaFahrenheit() {
    // Escopo Local: Pegamos o valor EXATAMENTE no momento do clique.
    // Usamos Number() para garantir que o texto digitado seja tratado como matemática.
    const celsius = Number(inputTemperatura.value);
    
    // Fórmula de conversão: Fahrenheit = (Celsius * 1.8) + 32
    const fahrenheit = (celsius * 1.8) + 32;
    
    // Injetando o texto na div vazia
    divResultado.textContent = `${celsius}°C equivalem a ${fahrenheit.toFixed(1)}°F.`;
}

// 3. EVENTO DE CLIQUE
// "Escuta" o clique no botão e dispara a função de conversão
botaoConverter.addEventListener('click', converterParaFahrenheit);