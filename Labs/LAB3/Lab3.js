"use strict";
//LAB3 Gabriel Araujo - 2508678
Object.defineProperty(exports, "__esModule", { value: true });
// Array com leitura de temperatura em Celsius.
const leiturasC = [22.5, 23.1, 24.0, 25.2, 26.5];
// Calcula a média das temperaturas, arredondando pra 2 casas decimais.
const mediaTemp = Number((leiturasC.reduce((a, b) => a + b, 0) / leiturasC.length).toFixed(2));
console.log('1) Média (°C):', mediaTemp);
// Função que converte Celsius pra Fahrenheit.
function cToF(c) { return Number((c * 9 / 5 + 32).toFixed(2)); }
// Cria uma leitura com o horário atual e uma temperatura.
const l1 = { timestamp: new Date().toISOString(), tempC: 25.3 };
console.log('2) Leitura:', l1, '=> °F:', cToF(l1.tempC));
// Mostra a leitura e a temperatura convertida pra Fahrenheit.
// Enum com os tipos de alerta: OK, Atenção ou Crítico.
var Alerta;
(function (Alerta) {
    Alerta["Ok"] = "OK";
    Alerta["Aten\u00E7\u00E3o"] = "ATENCAO";
    Alerta["Cr\u00EDtico"] = "CRITICO";
})(Alerta || (Alerta = {}));
// Função que classifica a temperatura: se tá ok, atenção ou crítico.
function classificar(tC) {
    if (tC >= 28)
        return Alerta.Crítico;
    if (tC >= 25)
        return Alerta.Atenção;
    return Alerta.Ok;
}
console.log('3) Status:', leiturasC.map(t => ({ t, status: classificar(t) })));
// Mostra cada leitura, junto com seu status de alerta.
// Função pra calcular média de móvel: pega uma janela de valores e faz a média.
function mediaMovel(valores, janela) {
    const out = [];
    for (let i = 0; i < valores.length; i++) {
        const ini = Math.max(0, i - janela + 1);
        const slice = valores.slice(ini, i + 1);
        out.push(Number((slice.reduce((a, b) => a + b, 0) / slice.length).toFixed(2)));
    }
    return out;
}
console.log('4) Média móvel (janela=3):', mediaMovel(leiturasC, 3));
// Função que formata a temperatura bonitinha, com unidade no final.
function formatTemp(valor, unidade) {
    if (unidade === 'C')
        return `${valor.toFixed(1)} °C`;
    return `${valor.toFixed(1)} °F`;
}
console.log('5) Format:', formatTemp(25.35, 'C'), formatTemp(cToF(25.35), 'F'));
//garante que o arquivo vira módulo TypeScript.
//# sourceMappingURL=Lab3.js.map