const BuTeste = document.getElementById("teste");
const TextoRetorno = document.getElementById("TextoRetorno");

function GerarOS() {
  let problema = document.getElementById("motivo").value;
  let horario = document.getElementById("horario").value;
  let contato = document.getElementById("contato").value;

  let descricao = "";
  if (contato == "" || undefined) {
    alert(
      "telefone de contato obrigátório para a abertura da ordem de serviço",
    );
  } else {
    switch (problema) {
      case "LOS":
        descricao =
          "Cliente com LOS, procedimentos realizados remotamente sem sucesso.";
        break;

      case "equipamento queimado":
        descricao =
          "Equipamento possivelmente queimado, testado em mais de uma tomada e conexão da fonte verificada.";
        break;

      case "lentidao":
        descricao =
          "Cliente entrou em contato relatando lentidão, Canais alterados, DNS alterado, largura de banda ajustada, porém cliente continua relatando lentidão.";
        break;

      case "atenuacao":
        descricao = "Cliente com o sinal atenuado";
        break;

      case "incompativel":
        descricao = "Roteador atual do cliente não suporta o plano contratado";
        break;

      default:
        descricao = "Problema técnico identificado.";
    }

    let texto = `${descricao}\nVerificar no local.\n`;

    if (horario) {
      texto += `Melhor horário para a visita: ${horario}\nContato: ${contato}, ligar antes de ir.`;
    } else {
      texto += `Cliente não informou horário.\nContato: ${contato}, ligar para agendar.`;
    }
    console.log(texto);
    return TextoRetorno.value = texto;
  }
}

BuTeste.addEventListener("click", function () {
  GerarOS();
});
