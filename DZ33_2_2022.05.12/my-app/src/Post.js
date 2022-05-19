import { React, useEffect, useState } from "react";
import Author from "./Author";


export default function Post(props) {
    const post = props.post;
    const [photo, setPhoto] = useState('');
    useEffect(() => {
        async function fetchPhoto() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${post.id}`);
            const data = await response.json();
            setPhoto(data.url);
        }
        fetchPhoto();
    }, [post])
    return (
        <article>
            <img src={photo} alt="Картинка не грузится" />
            <Author userId={post.id} />
        </article>
    )
}

