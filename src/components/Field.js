import React from 'react';

function Field({ name, type, onDelete, onChange }) {
  const handleNameChange = (event) => {
    onChange(event.target.value, type);
  };

  const handleTypeChange = (event) => {
    onChange(name, event.target.value);
  };
  

  return (
    <div className="field">
      <input type="text" value={name} onChange={handleNameChange} placeholder="Field Name" required/>
      <select value={type} onChange={handleTypeChange}>
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="boolean">Boolean</option>
        <option value="object" >Object</option>
      </select>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}


  

export default Field;
