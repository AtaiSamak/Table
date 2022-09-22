import React from "react";
import "../../styles/spinner.scss";

const Spinner = () => {
	return (
		<div className="lds-roller">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Spinner;
