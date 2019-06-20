import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          <p>Total Users: {this.props.users.length}</p>
          {
            this.props.users.map(user => {
            return(
              <li>
                <h2>{user.username}</h2>
                <p>{user.hometown}</p>
              </li>
            )
            })
          }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
