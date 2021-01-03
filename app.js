let purchPrice = "purchase price";
let closingCosts = "closing costs";
let loanAmount = "loan amount";
let annualIntRate = "interest rate"
let loanYears = "loan term in years";
let monthlyIncome = "monthly income";
let propertyTaxes = "property taxes";
let insurance = "insurance";
let repairMaint = "repairs and maintenance";
let vacany = "vacancy";
let capEx = "cap ex";
let manageFee = "manage fee";
let electricity = "electriciy";
let gas = "gas";
let waterSewer = "water and sewer";
let hoaFees = "hoa fees";
let garbage = "garbage";
let other = "other";

let monthlyIntRate = annualIntRate/12;
let loanMonths = loanYears*12;

let monthlyPayment = (loanAmount * (monthlyIntRate * (Math.pow((1 + monthlyIntRate),loanMonths))))/ (Math.pow((1 + monthlyIntRate),(loanMonths - 1)))

console.log()
