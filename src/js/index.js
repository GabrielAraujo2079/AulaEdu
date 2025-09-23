"use strict";
/**
 * SISTEMA DE TICKET DE ESTACIONAMENTO (SIMPLIFICADO E COMENTADO)
 * Entrada  -> Placa, Modelo, Cor, Hora de Entrada (ISO), Valor da Hora
 * Armaz.   -> CSV (entradas, ativos, saídas) + TXT de resumo (didático)
 * Saída    -> Hora de Saída, Horas (ceil), Preço (horas x valorHora)
 * Consulta -> Por Placa (checa ATIVOS, senão mostra última SAÍDA)
 *
 * Coloque este arquivo em: ts/index.ts
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//Essas quatro linhas importam módulos nativos do Node.js e fazem alguns aliases (apelidos) úteis
// Importa todo o namespace do módulo path.
// Serve para manipular caminhos de arquivo sem depender de barra normal/invertida (Windows/Linux).
// É um módulo puro (não acessa disco), só lida com strings de caminhos.
var path = require("path");
// Importa a API promises do fs (file system) e renomeia para fs.
// Você ganha funções assíncronas com await: fs.readFile, fs.writeFile, fs.appendFile, fs.mkdir, fs.access etc.
var fs_1 = require("fs");
// Importa o módulo readline (interface de leitura linha a linha no terminal).
// Usado para criar readline.createInterface({ input, output }) e fazer perguntas ao usuário.
// É a versão “clássica” baseada em callbacks; no projeto, envolvemos em Promise para usar await. (Alternativa moderna: 'readline/promises'.)
var readline = require("readline");
// Importa do módulo process (também nativo) os streams padrão e faz alias:
// process.stdin → input (entrada do teclado/terminal)
// process.stdout → output (saída do console)
// Usamos esses streams ao criar a interface do readline.
var process_1 = require("process");
/* ------------------- Pastas/Arquivos ---------------- */
var ROOT = path.resolve('.');
var DIR = {
    ts: path.join(ROOT, 'ts'),
    js: path.join(ROOT, 'js'),
    csv: path.join(ROOT, 'csv'),
    json: path.join(ROOT, 'json'),
};
var ARQ = {
    entradas: path.join(DIR.csv, 'entradas.csv'), // histórico
    ativos: path.join(DIR.csv, 'ativos.csv'), // dentro do pátio
    saidas: path.join(DIR.csv, 'saidas.csv'), // histórico de saídas
    resumo: path.join(DIR.csv, 'resumo_diario.txt'), // TXT didático
};
var CAB = {
    entradas: 'entradaISO,placa,modelo,cor,valorHora\n',
    ativos: 'entradaISO,placa,modelo,cor,valorHora\n',
    saidas: 'entradaISO,saidaISO,placa,modelo,cor,valorHora,horas,preco\n',
};
/* -------------- Prepara ambiente (pastas/arquivos) -------------- */
function preparaAmbiente() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_1.promises.mkdir(DIR.ts, { recursive: true })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, fs_1.promises.mkdir(DIR.js, { recursive: true })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, fs_1.promises.mkdir(DIR.csv, { recursive: true })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, fs_1.promises.mkdir(DIR.json, { recursive: true })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, criaSeNaoExiste(ARQ.entradas, CAB.entradas)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, criaSeNaoExiste(ARQ.ativos, CAB.ativos)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, criaSeNaoExiste(ARQ.saidas, CAB.saidas)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, criaSeNaoExiste(ARQ.resumo, 'RESUMO DIÁRIO DO ESTACIONAMENTO\n')];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function criaSeNaoExiste(caminho, conteudo) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 4]);
                    return [4 /*yield*/, fs_1.promises.access(caminho)];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 2:
                    _a = _b.sent();
                    return [4 /*yield*/, fs_1.promises.writeFile(caminho, conteudo, 'utf8')];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
/* -------------------- Util CSV ---------------------- */
// Escapa vírgula/aspas/quebra de linha quando necessário
function csvSafe(s) {
    return (/,|"|\n/.test(s)) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
function ativoToCsv(v) {
    return [v.entradaISO, v.placa, v.modelo, v.cor, String(v.valorHora)]
        .map(csvSafe).join(',') + '\n';
}
function saidaToCsv(s) {
    return [
        s.entradaISO, s.saidaISO, s.placa, s.modelo, s.cor,
        String(s.valorHora), String(s.horas), String(s.preco)
    ].map(csvSafe).join(',') + '\n';
}
// Split CSV respeitando aspas
function splitCsv(line) {
    var out = [];
    var cur = '';
    var q = false;
    for (var i = 0; i < line.length; i++) {
        var ch = line[i];
        if (q) {
            if (ch === '"') {
                if (line[i + 1] === '"') {
                    cur += '"';
                    i++;
                }
                else {
                    q = false;
                }
            }
            else {
                cur += ch;
            }
        }
        else {
            if (ch === '"')
                q = true;
            else if (ch === ',') {
                out.push(cur);
                cur = '';
            }
            else
                cur += ch;
        }
    }
    out.push(cur);
    return out;
}
/* --------------- Repositório CSV -------------------- */
function lerAtivos() {
    return __awaiter(this, void 0, void 0, function () {
        var raw, linhas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_1.promises.readFile(ARQ.ativos, 'utf8')];
                case 1:
                    raw = _a.sent();
                    linhas = raw.split(/\r?\n/).filter(Boolean).slice(1);
                    return [2 /*return*/, linhas.map(function (l) {
                            var _a = splitCsv(l), entradaISO = _a[0], placa = _a[1], modelo = _a[2], cor = _a[3], valorHora = _a[4];
                            return { entradaISO: entradaISO, placa: placa, modelo: modelo, cor: cor, valorHora: Number(valorHora) };
                        })];
            }
        });
    });
}
function escreverAtivos(lista) {
    return __awaiter(this, void 0, void 0, function () {
        var corpo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    corpo = lista.map(ativoToCsv).join('');
                    return [4 /*yield*/, fs_1.promises.writeFile(ARQ.ativos, CAB.ativos + corpo, 'utf8')];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/* ------------------- Casos de uso ------------------- */
// ENTRADA: registra histórico + adiciona a ATIVOS + escreve no TXT
function registrarEntrada(dados) {
    return __awaiter(this, void 0, void 0, function () {
        var reg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    reg = {
                        entradaISO: new Date().toISOString(),
                        placa: dados.placa.toUpperCase().trim(),
                        modelo: dados.modelo.trim(),
                        cor: dados.cor.trim(),
                        valorHora: dados.valorHora,
                    };
                    return [4 /*yield*/, fs_1.promises.appendFile(ARQ.entradas, ativoToCsv(reg), 'utf8')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, fs_1.promises.appendFile(ARQ.ativos, ativoToCsv(reg), 'utf8')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, fs_1.promises.appendFile(ARQ.resumo, "ENTRADA ".concat(reg.placa, " \u00E0s ").concat(reg.entradaISO, "\n"), 'utf8')];
                case 3:
                    _a.sent();
                    return [2 /*return*/, reg];
            }
        });
    });
}
// SAÍDA: tira de ATIVOS, calcula horas/preço e registra no histórico
function registrarSaida(placa) {
    return __awaiter(this, void 0, void 0, function () {
        var placaU, ativos, idx, base, saidaISO, ms, horas, preco, saida;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    placaU = placa.toUpperCase().trim();
                    return [4 /*yield*/, lerAtivos()];
                case 1:
                    ativos = _a.sent();
                    idx = ativos.findIndex(function (v) { return v.placa === placaU; });
                    if (idx === -1)
                        return [2 /*return*/, null];
                    base = ativos[idx];
                    saidaISO = new Date().toISOString();
                    ms = Date.parse(saidaISO) - Date.parse(base.entradaISO);
                    horas = Math.max(1, Math.ceil(ms / 3600000));
                    preco = Number((horas * base.valorHora).toFixed(2));
                    saida = __assign(__assign({}, base), { saidaISO: saidaISO, horas: horas, preco: preco });
                    return [4 /*yield*/, escreverAtivos(ativos.filter(function (_, i) { return i !== idx; }))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, fs_1.promises.appendFile(ARQ.saidas, saidaToCsv(saida), 'utf8')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, fs_1.promises.appendFile(ARQ.resumo, "SA\u00CDDA   ".concat(saida.placa, " \u00E0s ").concat(saida.saidaISO, " | ").concat(saida.horas, "h x ").concat(base.valorHora, " = ").concat(saida.preco, "\n"), 'utf8')];
                case 4:
                    _a.sent();
                    return [2 /*return*/, saida];
            }
        });
    });
}
// CONSULTA: procura em ATIVOS; se não achar, retorna a última SAÍDA
function consultarPlaca(placa) {
    return __awaiter(this, void 0, void 0, function () {
        var placaU, ativos, a, raw, linhas, saidas, ultima;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    placaU = placa.toUpperCase().trim();
                    return [4 /*yield*/, lerAtivos()];
                case 1:
                    ativos = _a.sent();
                    a = ativos.find(function (v) { return v.placa === placaU; });
                    if (a)
                        return [2 /*return*/, { status: 'ATIVO', registro: a }];
                    return [4 /*yield*/, fs_1.promises.readFile(ARQ.saidas, 'utf8')];
                case 2:
                    raw = _a.sent();
                    linhas = raw.split(/\r?\n/).filter(Boolean).slice(1);
                    saidas = linhas
                        .map(function (l) {
                        var _a = splitCsv(l), entradaISO = _a[0], saidaISO = _a[1], p = _a[2], modelo = _a[3], cor = _a[4], valorHora = _a[5], horas = _a[6], preco = _a[7];
                        return {
                            entradaISO: entradaISO,
                            saidaISO: saidaISO,
                            placa: p,
                            modelo: modelo,
                            cor: cor,
                            valorHora: Number(valorHora), horas: Number(horas), preco: Number(preco)
                        };
                    })
                        .filter(function (s) { return s.placa === placaU; })
                        .sort(function (x, y) { return x.saidaISO.localeCompare(y.saidaISO); });
                    ultima = saidas.pop();
                    if (ultima)
                        return [2 /*return*/, { status: 'SAIU', registro: ultima }];
                    return [2 /*return*/, { status: 'NAO_ENCONTRADO' }];
            }
        });
    });
}
/* ----------------- UI de Console -------------------- */
var rl = readline.createInterface({ input: process_1.stdin, output: process_1.stdout });
// Wrap para usar Promises com readline clássico
function ask(q) {
    return new Promise(function (resolve) { return rl.question(q, resolve); });
}
function imprimeAtivo(v) {
    console.log("  Placa:        ".concat(v.placa));
    console.log("  Modelo:       ".concat(v.modelo));
    console.log("  Cor:          ".concat(v.cor));
    console.log("  Entrada:      ".concat(v.entradaISO));
    console.log("  Valor Hora:   R$ ".concat(v.valorHora.toFixed(2)));
}
function imprimeSaida(s) {
    imprimeAtivo(s);
    console.log("  Sa\u00EDda:        ".concat(s.saidaISO));
    console.log("  Horas:        ".concat(s.horas));
    console.log("  Pre\u00E7o a pagar:R$ ".concat(s.preco.toFixed(2)));
}
/* --------------------- Main ------------------------ */
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var loop, op, placa, modelo, cor, vHora, _a, reg, placa, s, placa, r, ativos, err_1, e;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, preparaAmbiente()];
                case 1:
                    _c.sent();
                    console.log('===============================');
                    console.log('  SISTEMA DE TICKET (SIMPLES)  ');
                    console.log('===============================');
                    loop = true;
                    _c.label = 2;
                case 2:
                    if (!loop) return [3 /*break*/, 24];
                    console.log('\nMenu:');
                    console.log('1) Entrada');
                    console.log('2) Saída');
                    console.log('3) Consulta por placa');
                    console.log('4) Listar ativos');
                    console.log('5) Sair');
                    return [4 /*yield*/, ask('Escolha: ')];
                case 3:
                    op = (_c.sent()).trim();
                    _c.label = 4;
                case 4:
                    _c.trys.push([4, 22, , 23]);
                    if (!(op === '1')) return [3 /*break*/, 12];
                    return [4 /*yield*/, ask('Placa: ')];
                case 5:
                    placa = _c.sent();
                    return [4 /*yield*/, ask('Modelo: ')];
                case 6:
                    modelo = _c.sent();
                    return [4 /*yield*/, ask('Cor: ')];
                case 7:
                    cor = _c.sent();
                    _a = Number;
                    return [4 /*yield*/, ask('Valor da hora (ex: 12.5): ')];
                case 8:
                    vHora = _a.apply(void 0, [(_c.sent()).replace(',', '.')]);
                    if (!(!placa || !modelo || !cor || !Number.isFinite(vHora) || vHora <= 0)) return [3 /*break*/, 9];
                    console.log('Dados inválidos.');
                    return [3 /*break*/, 11];
                case 9: return [4 /*yield*/, registrarEntrada({ placa: placa, modelo: modelo, cor: cor, valorHora: Number(vHora.toFixed(2)) })];
                case 10:
                    reg = _c.sent();
                    console.log('\n>> ENTRADA REGISTRADA');
                    imprimeAtivo(reg);
                    _c.label = 11;
                case 11: return [3 /*break*/, 21];
                case 12:
                    if (!(op === '2')) return [3 /*break*/, 15];
                    return [4 /*yield*/, ask('Placa para saída: ')];
                case 13:
                    placa = _c.sent();
                    return [4 /*yield*/, registrarSaida(placa)];
                case 14:
                    s = _c.sent();
                    if (!s)
                        console.log('Veículo não encontrado nos ATIVOS.');
                    else {
                        console.log('\n>> SAÍDA REGISTRADA');
                        imprimeSaida(s);
                    }
                    return [3 /*break*/, 21];
                case 15:
                    if (!(op === '3')) return [3 /*break*/, 18];
                    return [4 /*yield*/, ask('Placa para consulta: ')];
                case 16:
                    placa = _c.sent();
                    return [4 /*yield*/, consultarPlaca(placa)];
                case 17:
                    r = _c.sent();
                    if (r.status === 'ATIVO') {
                        console.log('Status: ATIVO');
                        imprimeAtivo(r.registro);
                    }
                    else if (r.status === 'SAIU') {
                        console.log('Status: SAIU (último)');
                        imprimeSaida(r.registro);
                    }
                    else {
                        console.log('Veículo não encontrado.');
                    }
                    return [3 /*break*/, 21];
                case 18:
                    if (!(op === '4')) return [3 /*break*/, 20];
                    return [4 /*yield*/, lerAtivos()];
                case 19:
                    ativos = _c.sent();
                    if (ativos.length === 0)
                        console.log('Nenhum veículo no pátio.');
                    else {
                        console.log("Ativos (".concat(ativos.length, "):"));
                        ativos.forEach(function (v) { return imprimeAtivo(v); });
                    }
                    return [3 /*break*/, 21];
                case 20:
                    if (op === '5') {
                        loop = false;
                    }
                    else {
                        console.log('Opção inválida.');
                    }
                    _c.label = 21;
                case 21: return [3 /*break*/, 23];
                case 22:
                    err_1 = _c.sent();
                    e = err_1;
                    console.error('Erro:', (_b = e === null || e === void 0 ? void 0 : e.message) !== null && _b !== void 0 ? _b : err_1);
                    return [3 /*break*/, 23];
                case 23: return [3 /*break*/, 2];
                case 24:
                    rl.close();
                    console.log('Encerrado.');
                    return [2 /*return*/];
            }
        });
    });
}
main();
