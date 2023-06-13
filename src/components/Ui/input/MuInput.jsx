import React from 'react'
import classes from './MuInput.module.css';

export const MuInput = React.forwardRef((props, ref) => {

  return (
    <input ref={ref} className={classes.muInput} {...props} />
  );
});
