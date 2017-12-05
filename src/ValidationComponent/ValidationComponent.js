import React from 'react';

const validationComponent = (props) => {

    const styleWarning = {
        paddingLeft: '10px',
        color: 'red',
        fontSize: '12px'
    }

    const styleSuccess = {
        paddingLeft: '10px',
        color: 'green',
        fontSize: '12px'
    }

    let message = '';
    let inputLength = props.input.length;
    let minLength = 5;

    if (inputLength < minLength) {
        message = (
            <span style={styleWarning}>Text too short - {inputLength} characters (min: {minLength})</span>
        )
    } else {
        message = (
            <span style={styleSuccess}>Text long enough</span>
        )
    }

    return (
        <span>{message}</span>
    )
}

export default validationComponent;