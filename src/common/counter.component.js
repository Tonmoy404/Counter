import React, { Component } from "react";
import Button from "./button.component";

class Counter extends Component {
	render() {
		const { onDecrement, onIncrement, number, onReset, onDelete, index } =
			this.props;
		return (
			<div className="card-body">
				<Button
					text="Dec (-)"
					className="btn btn-danger mx-3"
					disabled={number === 0}
					event={() => onDecrement(index)}
				/>
				{number}
				<Button
					text="Inc (+)"
					className="btn btn-success mx-3"
					event={() => onIncrement(index)}
				/>
				<Button
					text="Reset"
					event={() => onReset(index)}
					className="btn btn-outline-dark mx-3"
				/>
				<Button
					text="Delete"
					event={() => onDelete(index)}
					className="btn btn-outline-danger"
				/>
			</div>
		);
	}
}

export default Counter;
