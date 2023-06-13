import React from 'react'
import { MuInput } from './Ui/input/MuInput';
import { MySelect } from './Ui/select/MySelect';

export const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MuInput 
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Поиск..."
      /> 
      <MySelect 
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultvalue="--сортировка--"
        options={[
          {value: 'title', name: 'по названию'},
          {value: 'body', name: 'по описанию'},
        ]}
      />
    </div>
  );
};
