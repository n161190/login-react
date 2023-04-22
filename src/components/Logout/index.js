import './index.css'

const Logout = probs => {
  const {logout} = probs

  return (
    <button type="button" className="loginbtn" onClick={logout}>
      Logout
    </button>
  )
}

export default Logout
