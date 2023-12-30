function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Define exchange rates (for simplicity, you can replace these with real-time rates from an API)
    const exchangeRates = {
        USD: { EUR: 0.85, GBP: 0.75, JPY: 110.25 },
        EUR: { USD: 1.18, GBP: 0.88, JPY: 128.88 },
        GBP: { USD: 1.34, EUR: 1.14, JPY: 147.85 },
        JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068 }
        
    };

    if (isNaN(amount)) {
        alert('Please enter a valid number for the amount.');
        return;
    }

    if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
        alert('Exchange rate not available for the selected currencies.');
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;

    document.getElementById('result').innerText = `${amount.toFixed(2)} ${fromCurrency} is equal to ${result.toFixed(2)} ${toCurrency}`;
}
