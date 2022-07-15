import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSelector } from 'react-redux'

function App() {
  const isLogged = useSelector(state => state.isLogged);
  const navigate = useNavigate()
  const [userName, setName] = useState('')
  const [password, setPassword] = useState('')

  async function signIn(event) {
    event.preventDefault()

    await axios({
      method: 'post',
      url: 'http://localhost:5000/api/auth/signin',
      headers: { 'Content-Type': 'application/json' },
      data: {
        userName,
        password,
      }
    })
      .then(res => {
        if (res.data.success && res.data.token) {
          localStorage.setItem('token', res.data.token)
          return navigate('/contacts')
        }
      })
      .catch(err => {
        alert('Please check your credentials');
        return navigate('/signin')
      })
  }

  return (
    <div className="App">
      <h1>SignIn</h1>

      {/* {isLogged ? <h3>Coool</h3> : 'false'} */}
      <form onSubmit={signIn}>
        <input
          value={userName}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='userName'
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='password'
        />
        <input type='submit' value='Sign In' />
      </form>
    </div>
  );
}

export default App;
