// <3 This part should be done, but feel free to review

function Conditions({data, updateData, onStart}){
    
    const handleChange = (e) => {
        const {name , value } = e.target;

        const valueFixed = name === 'question_count' ? Number(value) : value //changes string to an int

        console.log(`Handling a change. Setting ${name} to ${valueFixed}`)
        try{ updateData({
            ...data,
            [name]: valueFixed
        }) } catch (error){
            console.log(`Error updating the data.`)
        }

    }

    const regionList = [
    { value: "all", labelName: "All Regions" },
    { value: "Europe", labelName: "Europe" },
    { value: "Americas", labelName: "North & South America" },
    { value: "Asia", labelName: "Asia" }, //have to figure out how to include Oceania here.
    { value: "Africa", labelName: "Africa"}
  ];

    const questionCount = [5, 10, 15, 20] //Feel free to change these numbers
                                          //But 10 needs to be an option, bc that's the default.

    return (
        <div className='conditions'>
            
            <form className='conditionsForm'>
                <h1>Quiz Conditions</h1>

                <fieldset>
                    <legend>What's your target region?</legend>
                    {regionList.map(({value, labelName}) => (
                        <label key={value} className="conditionsFormLabel region">
                            <input 
                            type="radio"
                            name="region"
                            value={value}
                            checked={data.region === value}
                            onChange={handleChange}/>
                        {labelName}</label>
                    ))}
                </fieldset>

                <fieldset>
                    <legend>How many questions?</legend>
                    {questionCount.map((num) => (
                        <label key={num} className="conditionsFormLabel questionCount">
                            <input 
                            type="radio"
                            name="question_count"
                            value={num}
                            checked={data.question_count === num}
                            onChange={handleChange}/>
                        {num}</label>
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