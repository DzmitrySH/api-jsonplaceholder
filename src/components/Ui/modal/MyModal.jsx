import React from 'react'
import cla from './MyModal.module.css';

export const MyModal = ({children, visible, setVisible}) => {
  const rootClasses = [cla.myModal]

  if (visible) {
      rootClasses.push(cla.active);
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cla.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
