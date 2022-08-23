
// ================budget calculat part =================

document.getElementById('btn-budget').addEventListener('click', function () {

    const bugdetnputValue = formHereInputValue('bugdet-input')

    const onlyPlayerCostTotal = playerArrayNumber.length * bugdetnputValue;

    const buyPlayerCost = document.getElementById('cost-forPlayer');

    // const buyPlayerCostString = buyPlayerCost.innerText;
    // const getPlayerBuyValue = parseFloat(buyPlayerCostString);

    buyPlayerCost.innerText = onlyPlayerCostTotal;

});

//====================== Total cost calculation part ================

document.getElementById('btn-totalCalculate').addEventListener('click', function () {

    const manegerInputValue = formHereInputValue('maneger-inputField');


    const coachInputValue = formHereInputValue('coach-inputField');


    const buyPlayerCost = document.getElementById('cost-forPlayer');
    const buyPlayerCostString = buyPlayerCost.innerText;
    const getPlayerBuyValue = parseFloat(buyPlayerCostString);


    // totalBuyCost + 
    const TotalCost = getPlayerBuyValue + manegerInputValue + coachInputValue;


    const totalSumAdd = document.getElementById('total-spending')
    totalSumAdd.innerText = TotalCost

})