import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function App() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isValid, setisValid] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    if (!isValid) {
      alert('password not confirmed')
    }
  }, [isValid])

  async function signUp(event) {
    event.preventDefault()

    if (password !== confirmPassword) {
      return setisValid(false)
    }
    await axios({
      method: 'post',
      url: 'http://localhost:5000/api/auth/signup',
      headers: { 'Content-Type': 'application/json' },
      data: {
        userName,
        password,
      }
    })
      .then(res => {
        if (res.data.success) {
          return navigate('/signin');
        }
      })
      .catch(err => {
        if (err.response.data.data) {
          alert('Username Already taken:  ' + err.response.data.data)
          return navigate('/signup');
        }
        alert(err.response.data.error)
        return navigate('/signup');
      })
  }

  return (
    <div>
      <h1 >SignUp</h1>
      <form onSubmit={signUp}>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type='text'
          placeholder='Username'
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
        <br />
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type='password'
          placeholder='Confirm Password'
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default App;
