import React from 'react';
import { Button, Drawer } from 'antd';




const DrawerPage = ({ open, onClose, children, title}) => {  
 
  return (
    <div >
      <Drawer title={title} placement="right" onClose={onClose} open={open}>
      {children}
      </Drawer>
    </div>
  )
}

export default DrawerPage;
