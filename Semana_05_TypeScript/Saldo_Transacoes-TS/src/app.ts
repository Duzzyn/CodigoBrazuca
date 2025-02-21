import { ethers } from "ethers"

const provider = new ethers.providers.InfuraProvider("homestead", "26e815f149f94189ab52bee28453bc2d")
const keyEtherscan = "ZIY8XK8M8D1HKG41T7W6JE2PAY56UKHTNC"


export function initApp() {
    const walletInput = document.getElementById("wallet-address") as HTMLInputElement;
    const balanceDisplay = document.getElementById("balance") as HTMLParagraphElement;
    const transactionsDisplay = document.getElementById("transactions") as HTMLDivElement;
    const checkBalanceButton = document.getElementById("check-balance") as HTMLButtonElement;
    const checkTransactionsButton = document.getElementById("check-transactions") as HTMLButtonElement;
    const selectValue = document.getElementById("select") as HTMLSelectElement;
    
    async function updateNetwork(): Promise<void> {
        const networkSelect = selectValue.value
    }

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
            const response = await fetch(
                `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${keyEtherscan}`
            );
            const data = await response.json();
            console.log(data)
            if(data.status === "1" && data.result.length > 0) {
                data.result.forEach((tx: any, index: number) => {
                    const transacaoInfo = `
                    <h2 class="title is-2">Últimas Transações: ${index + 1}</h2>
                    <ul>
                      <li><strong>De:</strong> ${tx.from}</li>
                      <li><strong>Para:</strong> ${tx.to}</li>
                      <li><strong>Valor:</strong> ${ethers.utils.formatEther(tx.value)} Eth</li>
                      <li><strong>Data:</strong> ${new Date(parseInt(tx.timeStamp) * 1000).toLocaleString()}</li>
                    </ul>
                    <hr />
                  `;
                  transactionsDisplay.innerHTML = transacaoInfo;
                })
            } else {
                console.error(data.message);     
            }
        } catch (error) {
            transactionsDisplay.textContent = "Erro ao buscar as transações.";
            console.error(error);
        }
    });

}