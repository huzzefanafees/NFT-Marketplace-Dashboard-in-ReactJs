import React from 'react'

export default function labelinputforsetting(props) {
    return (
        <>
            <label htmlFor={props.forid}>{props.text}</label>
            <input type={props.type} name={props.forid} id={props.forid} />
        </>
    )
}
