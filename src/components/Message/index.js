// Write your code here
import './index.css'

const Message = probs => {
  const {islogin} = probs
  const message = islogin ? 'Welcome User' : 'Please Login'
  return <h1 className="message">{message}</h1>
}
export default Message
