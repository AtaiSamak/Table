import React, { useEffect } from "react";
import Filter from "./Filter";
import { useDispatch } from "react-redux";
import { tableActions } from "../store/table/tableSlice";
import { useSelector } from "react-redux";
import { selectTableStatus } from "../store/table/tableSelectors";
import Content from "./Content";
import styles from "../styles/app.module.scss";

const App = () => {
	const dispatch = useDispatch();
	const status = useSelector(selectTableStatus);

	useEffect(() => {
		if (status === "idle") dispatch(tableActions.fetch());
	}, []);

	return (
		<div className={styles.container}>
			<Filter />
			<Content />
		</div>
	);
};

export default App;
