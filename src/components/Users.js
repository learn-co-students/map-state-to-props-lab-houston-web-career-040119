import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        {this.props.numOfUsers}
        <ul>
          {this.props.users.map(x=>{
            return<li>{x.username}</li>
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps=(state)=>{
  return {
    users:state.users,
    numOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
