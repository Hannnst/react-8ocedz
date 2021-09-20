import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Email from './component/Email.js';
import Password from './component/Password.js';
import Alert from '././component/Alert.js';
import Button from '././component/Button.js';
function App(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState('red');
  const [seconds, setSeconds] = useState(4);
  const [test, setTest] = useState(false);

  const users = [
    { email: 'user1', password: 'password1' },
    { email: 'user2', password: 'password2' },
    { email: 'user3', password: 'password3' },
  ];

  const [alert, setAlert] = useState('Alert');

  const buttonPressed = () => {
    console.log('visible is ', visible);
    console.log('Email is:', email);
    console.log('Password is:', password);
    setTest(!test);
    setVisible(true);
    let foundUser = {};
    //loop through users array, check if email & password exits
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        setMessage('Found user: ' + email);
        foundUser = users[i];
      }
    }

    if (foundUser === null) {
      setMessage('Wrong email, user not found: ' + email);
    }
    // email exists, but need to check for the right password
    else {
      if (password.length != 0) {
        console.log('foundUser is ', foundUser);
        console.log(
          'password are: ',
          foundUser.password,
          ' and given ',
          password
        );
        if (foundUser.password == password) {
          setMessage('Welcome!');
          setColor('green');
        } else {
          setMessage('Wrong password');
          setColor('red');
        }
      }
    }
  };
  const gettingEmail = (eve) => {
    setEmail(eve);
  };
  const gettingPassword = (txt) => {
    setPassword(txt);
  };
  return (
    <div>
      <Button showInfo={() => buttonPressed()} />
      <Email getEmail={(e) => gettingEmail(e)} />
      <Password getPassword={(txt) => gettingPassword(txt)} />
      {visible && (
        <Alert test={test} color={color} visible={visible} message={message} />
      )}
    </div>
  );
}
export default App;
