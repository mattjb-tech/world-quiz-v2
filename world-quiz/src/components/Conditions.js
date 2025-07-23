import React, { useState } from 'react';

// Almost finished this part, but not quite <3
// We have to add the part where they choose the number of questions, and then add more formatting.

function Conditions({data, updateData, onStart}){
    const handleChange = (e) => {
        const {name , value } = e.target;
        console.log(`Handling a change. Setting ${name} to ${value}`)
        try{ updateData({
            ...data,
            [name]: value
        }) } catch (error){
            console.log(`Error updating the data.`)
        }

    }

    const regionList = [
    { value: "all", labelName: "All Regions" },
    { value: "Europe", labelName: "Europe" },
    { value: "Americas", labelName: "North and South America" },
    { value: "Asia", labelName: "Asia" }, //have to figure out how to include Oceania here.
    { value: "Africa", labelName: "Africa"}
  ];
    return (
        <div className='conditions'>
            
            <form className='conditionsForm'>
                <h1>Quiz Conditions</h1>

                <fieldset>
                    <legend>What's your target region?</legend>
                    {regionList.map(({value, labelName}) => (
                        <label key={value} className="conditionsFormLabel">
                            <input 
                            type="radio"
                            name="region"
                            value={value}
                            checked={data.region === value}
                            onChange={handleChange}/>
                        {labelName}</label>
                    ))}
                </fieldset>

            </form>

        <button onClick={onStart} className="start">
          Let's Go!
        </button>

        </div>
    )
}

export default Conditions