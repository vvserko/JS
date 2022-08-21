const area = document.getElementById('area');
let move = +0;

area.addEventListener('click', event => {
    if(event.target.className == 'box'){
        move %2 === 0 ? event.target.innerHTML = 'X': event.target.innerHTML = '0';
        move += 1;
    }
})