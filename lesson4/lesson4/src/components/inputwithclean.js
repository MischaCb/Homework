import React from 'react';
import { func } from 'prop-types';

const InputWithClean = ({value, setValue, placeholder}) => {

const clear = () => {
  setValue('');
}

   const onChange = (event) => {
     setValue(event.target.value)
   }

  return (
      <div>
          <input 
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          />

          <button onClick={clear}>Clear</button>
      </div>
  );
  
}

export default InputWithClean;