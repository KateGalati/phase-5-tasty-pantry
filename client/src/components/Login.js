import React, {useState} from 'react'

const Login = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [signupOpen, setSignupOpen] = useState(false)
  
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

    const openModal = () => {
      setSignupOpen(true)
    }

    const closeModal = () => {
      setSignupOpen(false)
    }

    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '30%',
      margin: '0 auto',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '20px'
    };
  
    const labelStyle = {
      margin: '10px 0'
    };
  
    const inputStyle = {
      width: '100%',
      height: '30px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '0 10px'
    };
  
    const buttonStyle = {
      width: '100%',
      height: '40px',
      backgroundColor: '#DABC94',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    };
  
    return (
      <div>
        <form style={formStyle} onSubmit={handleSubmit}>
          <label style={labelStyle} htmlFor="username">Username:</label>
          <input
            style={inputStyle}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label style={labelStyle} htmlFor="password">Password:</label>
          <input
            style={inputStyle}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button style={buttonStyle} type="submit">Submit</button>
          <br />
          <button style={buttonStyle} onClick={openModal}>Create Account</button>
        </form>
        <div>
          {signupOpen && (
            <div className="signup-modal">
              <form style={formStyle} className="signup-form">
                <h1>Sign Up</h1>
                <label style={labelStyle} htmlFor="username">Username:</label><br />
                <input style={inputStyle} type="text" id="username" name="username" /><br />
                <label style={labelStyle} htmlFor="email">Email:</label><br />
                <input style={inputStyle} type="email" id="email" name="email" /><br />
                <label style={labelStyle} htmlFor="password">Password:</label><br />
                <input style={inputStyle} type="password" id="password" name="password" /><br />
                <input style={inputStyle} type="submit" value="Submit" />
              </form>
              <button onClick={closeModal} style={buttonStyle}>Close</button>
            </div>
          )}
        </div>
      </div>
    );
}

export default Login