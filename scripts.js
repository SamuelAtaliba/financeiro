function calculate() {
  const salary = parseFloat(document.getElementById('salary').value);
  const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
  const includeExtraIncome = document.getElementById('includeExtraIncome').checked;

  if (isNaN(salary)) {
      alert('Por favor, insira um valor válido para o salário.');
      return;
  }

  const totalIncome = includeExtraIncome ? salary + extraIncome : salary;
  const investmentIncome = salary + extraIncome;

  const monthlyCost = totalIncome * 0.5;
  const emergencyReserve = totalIncome * 0.2;
  const investmentAmount = investmentIncome * 0.3;

  const funds = investmentAmount * 0.5;
  const stocks = investmentAmount * 0.3;
  const crypto = investmentAmount * 0.2;

  document.getElementById('monthlyCostText').innerText = `50% do total para custos de vida: R$${monthlyCost.toFixed(2)}`;
  document.getElementById('emergencyReserveText').innerText = `20% do total para reserva de emergência: R$${emergencyReserve.toFixed(2)}`;
  document.getElementById('investmentFundsText').innerText = `Fundos Imobiliários: R$${funds.toFixed(2)}`;
  document.getElementById('investmentStocksText').innerText = `Ações: R$${stocks.toFixed(2)}`;
  document.getElementById('investmentCryptoText').innerText = `Bitcoin e ETH: R$${crypto.toFixed(2)}`;

  document.getElementById('results').style.display = 'block';
}

function generateReport() {
  const salary = parseFloat(document.getElementById('salary').value);
  const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
  const includeExtraIncome = document.getElementById('includeExtraIncome').checked;

  const totalIncome = includeExtraIncome ? salary + extraIncome : salary;
  const investmentIncome = salary + extraIncome;

  const monthlyCost = totalIncome * 0.5;
  const emergencyReserve = totalIncome * 0.2;
  const investmentAmount = investmentIncome * 0.3;

  const funds = investmentAmount * 0.5;
  const stocks = investmentAmount * 0.3;
  const crypto = investmentAmount * 0.2;

  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString().replaceAll('/', '-');

  const reportText = `
      Relatório Financeiro (${dateString})
      -------------------------------------
      Custos Mensais:
          - 50% do total para custos de vida: R$${monthlyCost.toFixed(2)}
          - 20% do total para reserva de emergência: R$${emergencyReserve.toFixed(2)}
      
      Investimentos:
          - Fundos Imobiliários: R$${funds.toFixed(2)}
          - Ações: R$${stocks.toFixed(2)}
          - Bitcoin e ETH: R$${crypto.toFixed(2)}
  `;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Relatório Financeiro", 20, 20);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(reportText, 20, 30);
  doc.save(`relatorio_financeiro_${dateString}.pdf`);
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
      calculate();
  }
}

function calculateGoal() {
  const goalName = document.getElementById('goalName').value;
  const goalAmount = parseFloat(document.getElementById('goalAmount').value);
  const goalTime = parseInt(document.getElementById('goalTime').value);
  
  if (!goalName || isNaN(goalAmount) || isNaN(goalTime)) {
      alert('Por favor, insira valores válidos para o objetivo.');
      return;
  }

  const monthlySaving = goalAmount / goalTime;
  
  document.getElementById('goalSummaryText').innerHTML = `
      Nome do Objetivo: ${goalName}<br>
      Valor Necessário: R$${goalAmount.toFixed(2)}<br>
      Prazo: ${goalTime} meses<br>
      Economize por mês: R$${monthlySaving.toFixed(2)}
  `;
  
  document.getElementById('goalResults').style.display = 'block';
}

function calculateDebt() {
  const debtAmount = parseFloat(document.getElementById('debtAmount').value);
  const debtInterest = parseFloat(document.getElementById('debtInterest').value) / 100;
  const debtTime = parseInt(document.getElementById('debtTime').value);
  
  if (isNaN(debtAmount) || isNaN(debtInterest) || isNaN(debtTime)) {
      alert('Por favor, insira valores válidos para a dívida.');
      return;
  }

  const monthlyInterestRate = debtInterest / 12;
  const totalDebt = debtAmount * Math.pow(1 + monthlyInterestRate, debtTime);
  const monthlyPayment = totalDebt / debtTime;

  document.getElementById('debtSummaryText').innerHTML = `
      Valor da Dívida: R$${debtAmount.toFixed(2)}<br>
      Taxa de Juros: ${(debtInterest * 100).toFixed(2)}% ao mês<br>
      Prazo: ${debtTime} meses<br>
      Pagamento mensal: R$${monthlyPayment.toFixed(2)}<br>
      Dívida total ao final do prazo: R$${totalDebt.toFixed(2)}
  `;
  
  document.getElementById('debtResults').style.display = 'block';
}
