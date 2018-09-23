import React from 'react'

const style = {
	small: {
		padding: 10
	},

	large: {
		padding: 20
	}
};

const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			style={props.size === "lg" ? style.large : style.small}>
			{props.children}
		</button>	
	);
};

export default Button;
