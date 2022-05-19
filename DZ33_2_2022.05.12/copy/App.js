import Post from './Post.js'
import React, { Fragment,  useState, useEffect } from 'react';


export default function App() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPosts(data)
        }
        fetchData();

    }, [])

    return (
        <Fragment>
            {posts.map(p => <Post key={p.id} post={p} />)}
            <hr />
        </Fragment>
    );
}

