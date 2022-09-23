import React from "react";
import {
	selectTableFilteredItems,
	selectTableItems,
	selectTableStatus,
} from "../store/table/tableSelectors";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import Spinner from "./UI/Spinner";
import Table from "./table";
import styles from "../styles/content.module.scss";

const MSG_MAP = {
	idle: null,
	loading: <Spinner />,
	failure: <h1 className={styles.error}>Something goes wrong</h1>,
	successed: <h1>No data</h1>,
};

const Content = () => {
	const items = useSelector(selectTableItems);
	const filteredItems = useSelector(selectTableFilteredItems);
	const status = useSelector(selectTableStatus);

	if (items.length === 0) return MSG_MAP[status as keyof typeof MSG_MAP];
	else if (filteredItems.length === 0) return <h1>Not found</h1>;
	return (
		<>
			<Table />
			<Pagination />
		</>
	);
};

export default Content;
