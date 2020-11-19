import React, { Component } from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
import Textfield from "@atlaskit/textfield";
import DefaultProfile from "../DefaultProfile.jpg";
class UserProfile extends Component {
  componentDidMount() {
    if (localStorage.getItem("data")) {
      const data = localStorage.getItem("data");
      console.log(data);
      this.setState(() => ({
        data: JSON.parse(data),
      }));
    }
  }
  render() {
    if (this.state !== null && this.state.data !== undefined) {
      const data = this.state.data;
      console.log(data);
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
            <label htmlFor="userdata">First name</label>
            <Textfield name="userdata" value={data.firstname} isReadOnly />
            <br />
            <label htmlFor="userdata">Last name</label>
            <Textfield name="userdata" value={data.lastname} isReadOnly />
            <br />
            <label htmlFor="userdata">Email</label>
            <Textfield name="userdata" value={data.email} isReadOnly />
            <br />
            <label htmlFor="userdata">Birthdate</label>
            <Textfield name="userdata" value={data.birthdate} isReadOnly />
            <br />
            <label htmlFor="userdata">Phone</label>
            <Textfield name="userdata" value={data.phone} isReadOnly />
            <br />
            <label htmlFor="userdata">Gender</label>
            <Textfield name="userdata" value={data.gender.value} isReadOnly />
          </div>
        </div>
      );
    } else {
      return <div>No data here</div>;
    }
  }
}

export default withRouter(UserProfile);
