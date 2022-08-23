// Array-------------------
const playerArrayNumber = [];

// =========children create and ul er modde set ==============

function displayPlayer(player) {

    const listOfPlayer = document.getElementById('selected-player-field');
    listOfPlayer.innerHTML = '';

    for (let i = 0; i < player.length; i++) {
        const nameOfPlayer = playerArrayNumber[i].playerName;

        const li = document.createElement('li');
        li.innerHTML = `
        <th>${i + 1}. </th>
        <tb>${nameOfPlayer}</td>
        `
        li.classList.add('item')
        console.log(li);
        listOfPlayer.appendChild(li);

    };

}

// =================added in array and warling  alert ==================

function addToPlayer(element) {
    const playerName = element.parentNode.parentNode.children[1].innerText;

    const selectPlayerNumber = {
        playerName: playerName,
    }

    if (playerArrayNumber.length >= 5) {

        alert('More than that is not allowed');

    }

    else {
        playerArrayNumber.push(selectPlayerNumber);


    }

    //============ disabled button after click =============

    element.setAttribute('disabled', true);
    element.style.backgroundColor = '#607EAA';

    // ============Total length count ===========
    // document.getElementById('total-players-selected').innerText = playerArrayNumber.length;

    //============ select player  field  call and single player add============ 

    displayPlayer(playerArrayNumber);
};

//============ delegete select player field ==========

const items = document.getElementsByClassName('delegete-contant');

for (const item of items) {
    item.addEventListener('click', function (event) {
        const result = event.target.parentNode.removeChild(event.target)

    })
}

