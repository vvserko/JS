
import 'style.css'
import { React, Fragment } from "react";

export default function Tr(props) {
    const newStatus = () => {
        props.onStatus(props.status);
        props.onDel(props.del)


    }

    return (
        <Fragment>
            <tr >
                <th scope="row">{props.num + 1}</th>
                <td>{props.task}</td>
                <td>{props.status ? <span>In prosdthgress</span> : <span className={newStatus}>dytnt</span>}</td>
                <td>
                    <button type="submit" class="btn btn-danger">Delete</button>
                    <button onClick={newStatus} type="submit" class="btn btn-success ms-1" >Finished</button>
                </td>
            </tr>
        </Fragment>
    )
}
