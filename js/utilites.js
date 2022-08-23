
//=============== create a calculation ,input value and set ==================

function formHereInputValue(element) {

    const inputField = document.getElementById(element);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    inputField.value = '';

    if (isNaN(inputValue) === true || inputValue <= -1) {

        alert('this number is a not valid number')

    }
    return inputValue;

};


