import React, { useState } from 'react';
import './App.css';
import Field from './components/Field';
import ObjectField from './components/ObjectField';
function App() {
  const [fields, setFields] = useState([{ name: '', type: 'string' }]);

  const handleAddField = () => {
    const newFields = [...fields, { name: '', type: 'string' }];
    setFields(newFields);
  };
  const colors = ['#F9D0C7', '#FBDDF3', '#FAFBB8', '#D2F99B', '#A6EBFA', 'purple'];
  const handleDeleteField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleFieldChange = (index, fieldName, fieldType, nestedFields) => {
    const newFields = [...fields];
    if (newFields[index]) {
      if (fieldType === 'object') {
        newFields[index] = { name: fieldName, type: fieldType, fields: nestedFields || [] };
      } else {
        newFields[index] = { name: fieldName, type: fieldType };
      }
      setFields(newFields);
    }
  };

  const handleSave = () => {
    console.log(fields);
  };

  return (
    <div className="App" >
  
      {fields.map((field, index) =>
      <div className="upperIndex" key={index} style={{ backgroundColor: colors[index % colors.length] }}>
       <div className="index">Parent Field Index:{index+1}</div>
        {field.type === 'object' ? (
          <ObjectField
            key={index}
            name={field.name}
            type={field.type}
            fields={field.fields}
            onDelete={() => handleDeleteField(index)}
            onAddField={() => {
              const newFields = [...field.fields, { name: '', type: 'string', fields: [] }];
              handleFieldChange(index, field.name, 'object', newFields);
            }}
            onChange={(newFields) => {
              handleFieldChange(index, field.name, 'object', newFields);
            }}
          />
        ) : (
          <Field
            key={index}
            name={field.name}
            type={field.type}
            onDelete={() => handleDeleteField(index)}
            onChange={(fieldName, fieldType) => handleFieldChange(index, fieldName, fieldType)}
          />
        )}
        </div>
      )}
      <button className='btn addbtn' onClick={handleAddField}>Add Field</button>
      <button className='btn deletebtn' onClick={handleSave}>Save</button>
    </div>
  );
}

export default App;