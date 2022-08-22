function formHereInputValue(element) {

    const inputField = document.getElementById(element);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputValue;
};

