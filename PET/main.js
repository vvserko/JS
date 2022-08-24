const area = document.getElementById('area');
let move = 0;
let result = '';
const closeMainArea = document.getElementById('close_main_area');
const messegeArea = document.getElementById('messege_area');
const content = document.getElementById('content');
const btn = document.getElementById('btn');

area.addEventListener('click', event => {
    if (event.target.className == 'box') {
        move % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = '0';
        move += 1;
        check();
    }
})

const check = () => {
    const boxes = document.body.getElementsByClassName('box');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
            result = 'крестики';
            winnerResult(result);
        } else if (boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0') {
            result = 'нолики';
            winnerResult(result);
        }
    };
}
const winnerResult = item => {
    closeMainArea.style.display = 'block';
    content.innerHTML = `Победили ${item}`;
}

const closeResultWindow = () => {
    messegeArea.style.display = 'none';
    location.reload();
}
btn.addEventListener('click', closeResultWindow());