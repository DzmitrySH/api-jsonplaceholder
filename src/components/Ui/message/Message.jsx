import React from 'react';
import classes from'./Message.module.css';

export const Message = ({message}) => {
  return (
    <div className={classes.inputError}>{message}</div>
  )
}
