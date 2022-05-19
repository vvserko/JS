import { React, useState, useEffect, Fragment } from 'react';
import Author from './Author.js';
import Post from './Post.js';


export default function App() {
    const [posts, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://github.com/msheiko/shoping-cart-demo')
            const data = await response.json()
            setData(data)
            console.log(data)
        } fetchData();
    }, [])

    return (
        <Fragment>
            {posts.map(p => <Post key={p.id} post={p} />)}
            <hr />
        </Fragment>

    )
}



