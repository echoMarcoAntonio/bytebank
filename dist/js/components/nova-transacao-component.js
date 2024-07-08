import SaldoComponent from "./saldo-component.js";
import Conta from "../types/Conta.js";
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
    let tipoTransacao = inputTipoTransacao.value; // A string do inputTipoTransacao precisa ser umas das definidas em tipoTransacao.
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    elementoFormulario.reset();
});
