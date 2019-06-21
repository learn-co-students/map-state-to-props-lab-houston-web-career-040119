import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user => <li>{user.username}, {user.hometown}</li>)}
        </ul>
        User count: {this.props.userCount}
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  };
};

export default connect(mapStateToProps)(Users);
