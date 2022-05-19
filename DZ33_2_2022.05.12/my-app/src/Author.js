import { React, useEffect, useState, Fragment } from "react";

export default function Author(props) {
    const [author, setAuthor] = useState('')
    useEffect(() => {
        async function fetchDataAuthor() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
            const dataAuthor = await response.json();
            setAuthor(dataAuthor)
        } fetchDataAuthor()
    }, [props.userId]);
    return(
        <Fragment><p>{author.name}</p></Fragment>
        
    )



}