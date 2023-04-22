import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {islogin: false}

  onlogin = () => {
    const {islogin} = this.state
    this.setState(prevState => ({islogin: !prevState.islogin}))
  }

  render() {
    const {islogin} = this.state
    return (
      <div className="con">
        <div className="container">
          <Message islogin={islogin} />
          {islogin ? (
            <Logout lagout={this.onlogin} />
          ) : (
            <Login login={this.onlogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
