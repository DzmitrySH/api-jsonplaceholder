import React from 'react'
import { Link } from 'react-router-dom';
import { MyButton } from '../components/Ui/button/MyButton';

export const NotFound = () => {
  return (
    <>
      <div style={{ padding: 10 }}>
        <h3 style={{ color: 'orange' }}>NotFound</h3>
      </div>
      <Link to="/posts">
        <MyButton>Вернутся</MyButton>
      </Link>
    </>
  )
}
