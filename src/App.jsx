import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <p>You are Logged in</p>
      ) : (
        <form onSubmit={handleLogin}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
            <br></br>
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
            <br></br>
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default App;