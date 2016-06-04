import React from 'react';

const Splash = function Splash() {
  return (
    <div className="splash-container">
      <div className="splash">
        <h1 className="splash-head">Unplanned</h1>
        <p className="splash-subhead">Enjoy the moment</p>
        <p>
          <button
            className="pure-button pure-button-primary"
            onClick={window.socket.api.login}
          >
          Login with Facebook
          </button>
        </p>
      </div>

    </div>);
};

export default Splash;
