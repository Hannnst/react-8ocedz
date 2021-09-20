import React, { useState, useEffect } from 'react';
function Alert(props) {
  const [seconds, setSeconds] = useState(4);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      //regulates the speed
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    setTimeout(function () {
      setSeconds(4); //after 4000 mls, refresh back to 4 seconds
      clearInterval(interval); //means to stop interval(counter)
      setVisible(false);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [props.test]);

  return (
    <div>
      {visible && (
        <div>
          <p style={{ color: props.color }}> {props.message} </p>
          <p>This message will disappear in {seconds}</p>
        </div>
      )}
    </div>
  );
}
export default Alert;
