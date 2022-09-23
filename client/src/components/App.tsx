import React, { useEffect } from "react";
import "../styles/app.scss";
import "../styles/table.scss";
import Filter from "./Filter";
import { useDispatch } from "react-redux";
import { tableActions } from "../store/table/tableSlice";
import { useSelector } from "react-redux";
import { selectTableStatus } from "../store/table/tableSelectors";
import Content from "./Content";

const App = () => {
	const dispatch = useDispatch();
	const status = useSelector(selectTableStatus);

	useEffect(() => {
		if (status === "idle") dispatch(tableActions.fetch());
	}, []);

	return (
		<div className="container">
			<Filter />
			<Content />
		</div>
	);
};

export default App;
