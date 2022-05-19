import React from 'react'
import { Fragment } from 'react'

export default function Spinner(props) {
    return (
        <Fragment>
            {props.show ?                   
                    <div class="spinner-border" role="status">
                                       
                    </div> : props.children}
        </Fragment>
    )
}
