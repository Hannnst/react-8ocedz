
import React from 'react';
function Password(props) {
return (
<div>
<input
name= "password"
onChange ={(e)=>props.getPassword(e.target.value)}
type="password"
/>
</div>
);
}
export default Password;