// 1. Calcular Ingresso
function calcularIngresso(idade) {
  const precoInteira = 20;
  
  if (idade < 12 || idade >= 60) {
    return precoInteira / 2; // R$ 10 (meia-entrada)
  } else {
    return precoInteira; // R$ 20 (inteira)
  }
}

// 2. Converter Minutos para Segundos
function converterMinutosParaSegundos(minutos) {
  return minutos * 60;
}

// 3. Gerar Saudação
function gerarSaudacao(hora) {
  if (hora >= 5 && hora < 12) {
    return 'Bom dia!';
  } else if (hora >= 12 && hora < 18) {
    return 'Boa tarde!';
  } else {
    return 'Boa noite!';
  }
}
