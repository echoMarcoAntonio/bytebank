const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault(); // previne comportamento padrão: recarregar a página.
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    const inputTipoTransacao = document.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao; // A string do inputTipoTransacao precisa ser umas das definidas em tipoTransacao.
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    } else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    } else {
        alert("Tipo de transação é inválido!");
        return;
    }

        elementoSaldo.textContent = formatarMoeda(saldo);
        
    const novaTransacao: Transacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset();
});
