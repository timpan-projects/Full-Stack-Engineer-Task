import React, { Component } from "react";

class View extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data : null
		};
	}

	componentWillMount() {
		fetch('http://localhost:8888/getAll')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ data : responseJson });
			})
			.catch((error) => {
				console.error(error);
			}
		);
	}	

	render() {
		if (this.state.data == null) { return (<p>Loading data...</p>); }
		else {
			var userList = [];
			for (var i = 0; i < Object.keys(this.state.data).length; i++) {
				userList.push(
					<tr style={{border: "1px solid black"}}>
						<td style={{border: "1px solid black"}}>{this.state.data[i].id}</td>
						<td style={{border: "1px solid black"}}>{this.state.data[i].name}</td>
						<td style={{border: "1px solid black"}}>{this.state.data[i].email}</td>
						<td style={{border: "1px solid black"}}>{this.state.data[i].date}</td>
						<td style={{border: "1px solid black"}}>{this.state.data[i].time}</td>
					</tr>
				);
			} 
			return (
				<div>
					<h2>All users:</h2>
					<table style={{border: "1px solid black"}}>
						<tr style={{border: "1px solid black"}}>
							<th style={{border: "1px solid black"}}>ID</th>
							<th style={{border: "1px solid black"}}>Full name</th>
							<th style={{border: "1px solid black"}}>Email</th>
							<th style={{border: "1px solid black"}}>Date</th>
							<th style={{border: "1px solid black"}}>Time</th>
						</tr>
						{ userList }
					</table>
				</div>
			);
		}
	}
}

export default View;