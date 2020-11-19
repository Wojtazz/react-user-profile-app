import "../../index.css";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Textfield from "@atlaskit/textfield";
import DefaultProfile from "../../images/DefaultProfile.jpg";

class UserProfile extends Component {

  componentDidMount() {
    if (localStorage.getItem("data")) {
      const data = localStorage.getItem("data");
      this.setState(() => ({
        data: JSON.parse(data),
      }));
    }
  }

  render() {
    if (this.state !== null && this.state.data !== undefined) {
      const data = this.state.data;
      return (
        <div className="Element-width">
          <h2>User {data.username}</h2>
          <div>
            <img
              src={data.imglink}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = DefaultProfile;
              }}
              alt="Profile"
              width={150}
              height={150}
            />
          </div>
          <div>
            <label htmlFor="userdata">Username</label>
            <Textfield name="userdata" value={data.username} isReadOnly />
            <br />
            <label htmlFor="firstname">First name</label>
            <Textfield name="firstname" value={data.firstname} isReadOnly />
            <br />
            <label htmlFor="lastname">Last name</label>
            <Textfield name="lastname" value={data.lastname} isReadOnly />
            <br />
            <label htmlFor="email">Email</label>
            <Textfield name="email" value={data.email} isReadOnly />
            <br />
            <label htmlFor="birthdate">Birthdate</label>
            <Textfield name="birthdate" value={data.birthdate} isReadOnly />
            <br />
            <label htmlFor="phone">Phone</label>
            <Textfield name="phone" value={data.phone} isReadOnly />
            <br />
            <label htmlFor="gender">Gender</label>
            <Textfield name="gender" value={data.gender.value} isReadOnly />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h4>No data here</h4>
        </div>
      );
    }
  }
}

export default withRouter(UserProfile);
