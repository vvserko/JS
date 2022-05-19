
import './style.css'
import { React, Fragment, useState } from "react";

export default function Tr(props) {
    const index = props.index;

    const [isFineshed, setFinished] = useState(false);   
    const deleteItem = () => {
        props.onDeleteTasks(index)
    };
    
    

    return (
        <Fragment>
            <tr >
                <th scope="row">{props.index + 1}</th>
                <td>{isFineshed? <p className='del'>{props.task}</p>:<p className="bold">  {props.task}</p>}</td>
                <td>{isFineshed? <span className='bold'>Complited</span>: <span className='bold'>In Progress</span>}</td>
                <td>
                    <button onClick={deleteItem} type="submit" class="btn btn-danger">Delete</button>
                    <button onClick={()=> setFinished(true)} type="submit" class="btn btn-success ms-1" >Finished</button>
                </td>
            </tr>
        </Fragment>
    )
}
