function formHereInputValue(element) {

    const inputField = document.getElementById(element);

    if (isNan(inputField) === true) {
        alert('ato jamela kore keno')
    }

    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputValue;
};


