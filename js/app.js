
const playerArrayNumber = [];
// console.log(playerAdd);

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

        // if (player.length <= 5) {


        // } else {
        //     listOfPlayer.classList.add('disabled')
        // }


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
};


const items = document.getElementsByClassName('delegete-contant');

for (const item of items) {
    item.addEventListener('click', function (event) {
        const result = event.target.parentNode.removeChild(event.target)


    })
}

