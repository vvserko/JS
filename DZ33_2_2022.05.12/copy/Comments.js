
import{ React,  Fragment, useEffect, useState } from "react";
import Spinner from "./Spinner";



function Comments(props) {
    const [comments, setComment] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (
            async function fetchData() {
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${props.postId}`);
                const data = await response.json();
                setComment(data);
                setLoading(false)
            })()
    }, [props.postId]);


    return (
        <Fragment>
            <Spinner show={isLoading}>
                {comments.map(comment =>
                    <dl>
                        <dt>Author=</dt>
                        <dt>{comment.name}</dt>
                        <dt>Text=</dt>
                        <dd>{comment.body}</dd>
                    </dl>)
                }
            </Spinner>
        </Fragment>
    )
}

export default Comments;