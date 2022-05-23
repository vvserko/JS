

let userData = [];
async function fetchData(){
    const res = await fetch ('https://api.github.com/users/vvserko')
    const data = await res.json()
    userData = data
}
fetchData();

export default function getUser(){    
    return userData;
}
