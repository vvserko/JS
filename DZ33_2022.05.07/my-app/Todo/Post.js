
import { React, useEffect, useState } from "react";
import Spinner from "./Spinner";
import Author from "./Author";
import Comments from "./Comments";


function Post(props) {
    const post = props.post;
    const [photo, setPhoto] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPhotoData() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${post.id}`);
            const data = await response.json();
            setPhoto(data.url);
        }
        fetchPhotoData();
        setLoading(false)
    }, [post]);


    return (
        <Spinner show={isLoading}>
            <article>
                <p>URL: {photo}</p>
                <p>id = {post.id}</p>
                <p>userId = {post.userId}</p>
                <p>title ={post.title}</p>
                <p>body={post.body}</p>
                <p> <img src={photo } alt='картинка не грузится'/></p>
                <Author userId={post.id} />
                <Comments postId={post.id} />
                <hr/>
            </article>
        </Spinner>
    )

}

export default Post;