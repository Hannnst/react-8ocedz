import React from 'react';
function Button(props) {
  return (
    <div>
      <button onClick={() => props.showInfo()}>Submit</button>
    </div>
  );
}
export default Button;
