import { ethers } from "ethers"

const provider = ethers.getDefaultProvider("mainnet");

export function initApp() {
    const walletInput = document.getElementById("wallet-address") as HTMLInputElement;
    const balanceDisplay = document.getElementById("balance") as HTMLParagraphElement;
    const transactionsDisplay = document.getElementById("transactions") as HTMLDivElement;
    const checkBalanceButton = document.getElementById("checkbalance") as HTMLButtonElement;
    const checkTransactionsButton = document.getElementById("checktransactions") as HTMLButtonElement;

    checkBalanceButton.addEventListener("click", async () => {
        const address = walletInput.value.trim();

        if (!ethers.utils.isAddress(address)) {
            balanceDisplay.textContent = "Endereço inválido!";
            return;
        }
        try {
            const balance = await provider.getBalance(address);
            balanceDisplay.textContent = `Saldo: ${ethers.utils.formatEther(balance)} ETH`;
        } catch (error) {
            balanceDisplay.textContent = "Erro ao buscar o saldo.";
            console.error(error);
        }
    });

    checkTransactionsButton.addEventListener("click", async () => {
        const address = walletInput.value.trim();
        if (!ethers.utils.isAddress(address)) {
            transactionsDisplay.textContent = "Endereço inválido!";
            return;
        }
        try {
            const history = await provider.getHistory(address);
            transactionsDisplay.innerHTML = "<h3>Últimas Transações: </h3>";
            history.slice(0, 5).forEach((tx: { from: any; to: any; value: any; }) => {
                const txElement = document.createElement("p");
                txElement.textContent = `De: ${tx.from} Para: ${tx.to} - Valor: ${ethers.utils.formatEther(tx.value)} ETH`;
                transactionsDisplay.appendChild(txElement);
            });
        } catch (error) {
            transactionsDisplay.textContent = "Erro ao buscar as transações.";
            console.error(error);
        }
    });

}