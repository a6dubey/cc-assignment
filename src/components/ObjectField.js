import React, { useEffect } from 'react';
import Field from './Field';

function ObjectField({ name, type, fields, onDelete, onAddField, onChange }) {
  const handleNameChange = (event) => {
    const newFields = [...fields];
    newFields[0] = { ...newFields[0], name: event.target.value }; // replace 0 with the index of the object you want to update
    onChange(newFields);
  };
  
  
  
  
  
  const colors = ['#FFF6ED', '#FBDDF3', '#FAFBB8', '#D2F99B', '#A6EBFA', 'purple'];
    

  const handleFieldChange = (index, fieldName, fieldType, nestedFields) => {
    const newFields = [...fields];
    if (newFields[index]) {
      if (fieldType === 'object') {
        newFields[index] = { name: fieldName, type: fieldType, fields: nestedFields || [] };
      } else {
        newFields[index] = { name: fieldName, type: fieldType };
      }
      onChange(newFields);
    }
  };


  
  
  

  const handleDeleteField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    onChange(newFields);
  };

  const handleAddField = () => {
    const newFields = [...fields, { name: '', type: 'string', fields: [] }];
    onChange(newFields);
  };
//   useEffect(() => {
//     onAddField();
//     console.log('hii')
//   }, []);

  return (
    <div className="ofield">
        
      <input type="text" value={name} onChange={handleNameChange} placeholder="Field Name" />
      <span>{type}</span>
      {fields.map((field, index) => (
        <div className="objectField" key={index} style={{ backgroundColor: colors[index % colors.length] }}>
            <div className="index">Sub Field: {index+1}</div>
          {field.type === 'object' ? (
            <ObjectField
            //   name={field.name}
            name={field.name || ''}
            type={field.type}
              className="demo"
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
              name={field.name}
              type={field.type}
              onDelete={() => handleDeleteField(index)}
              onChange={(fieldName, fieldType) => handleFieldChange(index, fieldName, fieldType)}
            />
          )}
        </div>
      ))}
      <span>
      <button className='btn addbtn' onClick={onAddField}>Add Subfield</button>
      <button className='btn deletebtn' onClick={onDelete}>Delete Parent Field</button>
      </span>
    </div>
  );
}


  

export default ObjectField;
