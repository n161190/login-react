// Write your code here
import './index.css'

const Login = probs => {
  const {login} = probs

  return (
    <button type="button" className="loginbtn" onClick={login}>
      login
    </button>
  )
}
export default Login
