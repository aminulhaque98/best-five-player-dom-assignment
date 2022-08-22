const playerArrayNumber = [];
// console.log(playerAdd);

function displayPlayer(player) {

    const listOfPlayer = document.getElementById('selected-player-field');
    listOfPlayer.innerHTML = '';

    for (let i = 0; i < player.length; i++) {
        console.log(player)
        const nameOfPlayer = playerArrayNumber[i].playerName;
        const li = document.createElement('li');
        li.innerHTML = `
        <th>${i + 1}. </th>
        <tb>${nameOfPlayer}</td>
        `
        listOfPlayer.appendChild(li)
    }
}


function addToPlayer(element) {
    const playerName = element.parentNode.parentNode.children[1].innerText;

    const selectPlayerNumber = {
        playerName: playerName,
    }
    playerArrayNumber.push(selectPlayerNumber);

    // document.getElementById('total-players-selected').innerText = playerArrayNumber.length;

    displayPlayer(playerArrayNumber);
}

