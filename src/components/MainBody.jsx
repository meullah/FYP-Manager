import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid bg-dark">
        <div className="container-fluid d-flex flex-column justify-content-center text-center text-light vh-100">
          <h1 className="display-2 my-4">FYP Manager</h1>
          <p className="lead">
            Final Year Project Manager is a web application that connects
            students and projects supervisors remotly.
          </p>
          <div>
            <div className="btn btn-outline-light btn-lg my-4">
              Learn more about FYP Manager
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBody;
