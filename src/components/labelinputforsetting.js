import React from 'react'

export default function labelinputforsetting(props) {
    return (
        <div className={props.classname}>
            <label htmlFor={props.forid}>{props.text}</label>
            <input type={props.type} name={props.forid} id={props.forid} />
        </div>
    )
}
