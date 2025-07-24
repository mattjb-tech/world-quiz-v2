import React from 'react';

function Conditions({ data, updateData, onStart }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ ...data, [name]: value });
  };

  const regionList = [
    { value: "all", label: "All Regions" },
    { value: "Europe", label: "Europe" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Africa", label: "Africa" },
    { value: "Oceania", label: "Oceania" } // austrailia isnt in asia. sorry 😘
                                            // actually it is. check the json 😘😘
  ];

  return (
    <div className="conditions new">
      <h1 className="title">Quiz Settings</h1>

      <div className="field">
        <label>Select Region</label> 
        <select
          id="region"
          name="region"
          value={data.region}
          onChange={handleChange}
        >
          {regionList.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label>
          Number of Questions: {data.question_count}
        </label>
        <input
          type="range"
          name="question_count"
          min="10"
          max="30"
          step="2"
          value={data.question_count}
          onChange={handleChange}
        />
      </div>

      <button onClick={onStart} className="go">
        Let's Go!
      </button>
    </div>
  );
}


export default Conditions;