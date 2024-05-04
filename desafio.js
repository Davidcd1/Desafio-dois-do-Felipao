const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("### Calculadora de partidas Rankeadas ###\n\n");

perguntar("Vitórias").then(vitorias => {
  perguntar("Derrotas").then(derrotas => {
    let resultado = saldoVD(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${resultado.saldo} e está no nível de ${resultado.nivel}`);
    rl.close();
  });
});

function saldoVD(vitorias, derrotas){
    let nivel;
    let saldo = vitorias - derrotas;
    switch(true){
        case saldo < 10:
            nivel = "Ferro";
            break;
        case saldo <= 20 && saldo >= 11:
            nivel = "Bronze";
            break;
        case saldo <= 50 && saldo >= 21:
            nivel = "Prata";
            break;
        case saldo <= 80 && saldo >= 51:
            nivel = "Ouro";
            break;
        case saldo <= 90 && saldo >= 81:
            nivel = "Diamante";
            break;
        case saldo <= 100 && saldo >= 91:
            nivel = "Lendário";
            break;
        case saldo > 100:
            nivel = "Imortal";
            break;
    }
    return {saldo, nivel};
}

function perguntar(pergunta){
    return new Promise((resolve, reject) => {
      rl.question(`${pergunta}:  `, (valor) => {
        valor = parseInt(valor);
        if(valor >= 0 && valor <= 2000000) {
          resolve(valor);
        } else {
          console.log('Por favor, insira um número entre 0 e 2000000.');
          resolve(perguntar(pergunta));
        }
      });
    });
  }