const grossSalary = document.getElementById('grossIncome');
const extraIncome = document.getElementById('extraIncome');
const netDeduction = document.getElementById('totalDeduction');
const formBox = document.getElementById('formBox');
const showPopup = document.getElementById('popupBox');
const overallIncome= document.getElementById('overallIncome');
const ageSelect = document.getElementById("age");
taxForm.addEventListener('submit',e=>{
    e.preventDefault(); 
    const grossSalaryValue= grossSalary.value;
    const extraIncomeValue= extraIncome.value;
    const netDeductionValue= netDeduction.value;
    const newIncome = (Number(grossSalaryValue) + Number(extraIncomeValue))-Number(netDeductionValue);
    console.log(newIncome);
    
    const selectedAge = ageSelect.value;

    let tax = 0;
    const taxThreshold = 800000; 
    const incomeOverThreshold = newIncome - taxThreshold;
    console.log(incomeOverThreshold);
    if (selectedAge === "<40") {
        tax = incomeOverThreshold * 0.3;
    } else if (selectedAge === "≥40&<60") {
        tax = incomeOverThreshold * 0.4;
    } else if (selectedAge === "≥60") {
        tax = incomeOverThreshold * 0.1;
    } 
    console.log(tax);
    const netIncome= newIncome-tax;
    console.log(netIncome)
    const netIncomeRupee = netIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(netIncomeRupee);
    const afterTax = document.getElementById('afterTax');
    const finalValue= document.getElementById('finalValue');
    if (newIncome<taxThreshold){
        afterTax.classList.add('d-none');
        finalValue.classList.add('d-none');
        overallIncome.textContent="No tax applicable.";
    }else{
        afterTax.classList.remove('d-none');
        finalValue.classList.remove('d-none');
        overallIncome.innerHTML += `${netIncomeRupee}`;
    };
    const grossNumberError = document.getElementById('grossNumberError');
    const extraNumberError = document.getElementById('extraNumberError');
    const deductionNumberError = document.getElementById('deductionNumberError');
    const ageFillError = document.getElementById('ageFillError');
    const regex = new RegExp(/^(?:-?\d+(\.\d+)?|-?\.\d+)$/);
    const isValidGrossSalary = regex.test(grossSalaryValue);
    const isValidExtraIncome = regex.test(extraIncomeValue);
    const isValidNetDeduction = regex.test(netDeductionValue);
    console.log(!isValidGrossSalary);

    if(!isValidGrossSalary){
        grossNumberError.classList.remove('d-none');
        return;
    }else{
        grossNumberError.classList.add('d-none');
    }
    if(!isValidExtraIncome){
        extraNumberError.classList.remove('d-none');
        return;
    }else{
        extraNumberError.classList.add('d-none');
    }

    if(!isValidNetDeduction){
        deductionNumberError.classList.remove('d-none');
        return;
    }else{
        deductionNumberError.classList.add('d-none');
    }
    

    if(selectedAge == ""){
        ageFillError.classList.remove('d-none');
        return;
    }else{
        ageFillError.classList.add('d-none');
    };
    
    if (typeof grossSalaryValue === "string" && grossSalaryValue.length === 0) {
        document.getElementById('grossFillError').classList.remove('d-none');
        console.log("The string is empty")
    } else {
        document.getElementById('grossFillError').classList.add('d-none');
        console.log("The string is not empty or null");
    };

    if (typeof extraIncomeValue === "string" && extraIncomeValue.length === 0) {
        document.getElementById('extraFillError').classList.remove('d-none');
        console.log("The string is empty");
    } else {
        document.getElementById('extraFillError').classList.add('d-none');
        console.log("The string is not empty or null");
    };

    if (typeof netDeductionValue === "string" && netDeductionValue.length === 0) {
        document.getElementById('deductionfillError').classList.remove('d-none');
    } else {
        document.getElementById('deductionfillError').classList.add('d-none');
        console.log("The string is not empty or null");
    };

    showPopup.classList.remove('d-none'); 
    formBox.classList.add('d-none');
    document.getElementById('closeBtn').addEventListener('click',function(){
        showPopup.classList.add('d-none');
        formBox.classList.remove('d-none');
    })

});

