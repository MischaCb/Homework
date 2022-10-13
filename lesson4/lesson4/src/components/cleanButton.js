import React from 'react';

const AlertButton = ({clickButton}) => {
  return (
    <div>
       <button onClick={clickButton}>Alert and clean</button>
    </div>
  )
}

export default AlertButton;