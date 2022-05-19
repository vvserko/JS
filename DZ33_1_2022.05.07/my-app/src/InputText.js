import React, { useState } from 'react';

function InputText(props) {
    
    
    return (
        <label> Введите текст:
            <input type='text' value={props.text} onChange = {props.setText}></input>
        </label>
    )
}
export default InputText