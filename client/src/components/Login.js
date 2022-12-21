import React, {useState} from 'react'

const Login = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password
        }),
      })
        .then((r) => r.json())
        .then(userData => {
            if (userData.errors)
            console.log(userData.errors)
            else 
            onLogin(userData)
        });
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
}

export default Login