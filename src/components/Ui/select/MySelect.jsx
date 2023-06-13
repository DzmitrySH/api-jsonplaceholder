import React from 'react'

export const MySelect = ({options, defaultvalue, value, onChange}) => {
  return (
    <select 
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option disabled value="value">{defaultvalue}</option>
      {options.map(option => 
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
        )}
    </select>
  );
};

