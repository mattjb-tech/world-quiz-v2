import React, { useState } from 'react';

// Let me do this part <3 

function Conditions({conditions, updateConditions}){
    const handleChange = (e) => {
        const {name , value } = e.target;

        updateConditions({
            ...conditions,
            [name]: value
        })
    }


    return (
        <div className='conditions'>

            <p className='conditionsTest'>You clicked the start button, and this should appear.</p>

        </div>
    )
}

export default Conditions