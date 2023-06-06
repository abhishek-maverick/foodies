import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("Child - constructor called  " + props.name);
  }

  //similar to useEffect()
  componentDidMount() {
    // best place to make APIs calls
    // this.setState({
    //   count: this.state.count + 1,
    // });
    console.log("Child - component did mount called   " + this.props.name);
  }
  render() {
    console.log("Child - render called  " + this.props.name);
    return (
      <div>
        <h1> this is profile class component</h1>
        <h1>Child: {this.props.name}</h1>
        <h1>Total Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count
        </button>
      </div>
    );
  }
}

export default ProfileClass;
