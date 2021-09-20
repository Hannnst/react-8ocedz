import React from 'react';
function Email(props) {
  return (
    <div>
      <input
        name="email"
        onChange={(e) => props.getEmail(e.target.value)}
        type="email"
      />
    </div>
  );
}
export default Email;
