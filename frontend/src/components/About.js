import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const About2 = () => {
  return (
    <>
      <h1>About us page</h1>
      <h2>150 me unlimited</h2>
      <Outlet />
    </>
  );
};

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Duummy Name",
        location: "Dummy location",
      },
    };
    console.log("Parent - constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/abhishek-maverick");
    const json = await data.json();
    console.log("inside parent json");
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("Parent - componentDidMount()");
  }
  render() {
    console.log("Parent  - render");
    return (
      <>
        <h1>About us page</h1>
        <h2>150 me unlimited</h2>
        <ProfileClass name={"First Child"} />
        <ProfileClass name={"Second Child"} />
      </>
    );
  }
}

export default About;
