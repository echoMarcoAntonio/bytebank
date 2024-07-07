let saldo = 3500;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault(); // previne comportamento padrão: recarregar a página.
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    const inputTipoTransacao = document.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação é inválido!");
        return;
    }
    if (elementoSaldo != null) {
        elementoSaldo.textContent = saldo.toString();
    }
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
