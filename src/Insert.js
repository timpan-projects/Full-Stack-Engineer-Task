import React, { Component } from "react";

class Insert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullname: null,
      email: null,
      date: null,
      time: null
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitBtnClicked = this.submitBtnClicked.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value  = target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  submitBtnClicked() {
    var obj = {
      fullname: this.state.fullname,
      email: this.state.email,
      date: this.state.date,
      time: this.state.time,
    };
    console.log(JSON.stringify(obj));
    fetch('http://localhost:8888/insert', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {'Content-Type': 'application/json'}
    })
    .then(
      window.location.reload())
    .catch(err => err);
  }

  render() {
    return (
      <div>
        <h2>Please insert user info:</h2>
        <p>Full Name</p>
        <input type="text" name="fullname" onChange={this.handleInputChange}/>
        <p>Email</p>
        <input type="text" name="email" onChange={this.handleInputChange}/>
        <p>Date</p>
        <input type="date" name="date" onChange={this.handleInputChange}/>
        <p>Time</p>
        <input type="time" name="time" onChange={this.handleInputChange}/>
        <div>
          <h2 onClick={this.submitBtnClicked} style={{border: "2px solid black", borderRadius: "25%", display: "inline-block", padding: "10px"}}>SUBMIT</h2>
        </div>
      </div>
    );
  }
}

export default Insert;