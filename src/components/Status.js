import React from "react";

const Status = (props) => {
	return (
		<div>
			Hi, {props.isAuthenticated ? props.name : "User"}
		</div>
	);
};

export default Status;
