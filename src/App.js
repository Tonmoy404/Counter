import React, { Component } from "react";
import Button from "./common/button.component";
import Header from "./common/header.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Counter from "./common/counter.component";

class App extends Component {
	state = {
		number: [],
	};

	addCounter = () => {
		const arr = [...this.state.number, 0];
		const newState = { number: arr };
		this.setState(newState);
	};

	decrement = (id) => {
		const arr = [...this.state.number];
		arr[id]--;
		const newState = { number: arr };
		this.setState(newState);
	};

	increment = (id) => {
		const arr = [...this.state.number];
		arr[id]++;
		const newState = { number: arr };
		this.setState(newState);
	};

	reset = (id) => {
		const arr = [...this.state.number];
		arr[id] = 0;
		const newState = { number: arr };
		this.setState(newState);
	};

	delete = (index) => {
		const arr = [...this.state.number];
		arr.splice(index, 1);
		this.setState({ number: arr });
	};

	render() {
		return (
			<div className="col-lg-6 me-auto ms-auto text-center mt-4">
				<Header />
				<div className="card container">
					<Button
						event={this.addCounter}
						text="Add New Counter"
						className="btn btn-outline-primary mx-3 my-2"
					/>
					{this.state.number.length > 0 && (
						<Card>
							{this.state.number.map((number, index) => (
								<Counter
									key={index}
									index={index}
									onDecrement={this.decrement}
									onIncrement={this.increment}
									onReset={this.reset}
									onDelete={this.delete}
									number={this.state.number[index]}
								/>
							))}
						</Card>
					)}
				</div>
			</div>
		);
	}
}

export default App;
