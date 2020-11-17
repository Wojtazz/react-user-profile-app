import React, { Component } from "react";

class UserProfile extends Component {
    
  render() {
      console.log(this.props)
    return <div>{this.props}</div>;
  }
}

export default UserProfile;
