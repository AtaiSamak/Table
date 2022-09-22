import React, { useEffect } from "react";
import Table from "./table";
import "../styles/app.scss";
import "../styles/table.scss";
import Filter from "./Filter";
import Pagination from "./Pagination";
import usePagination from "../hooks/usePagination";
import Spinner from "./UI/Spinner";
import { useDispatch } from "react-redux";
import { tableActions } from "../store/table/tableSlice";
import { RootState } from "../types/store";
import { useSelector } from "react-redux";

const MSG_MAP = {
	idle: null,
	loading: <Spinner />,
	failure: <h1 className="error">Something goes wrong</h1>,
	successed: <h1>Not items</h1>,
};

const App = () => {
	const dispatch = useDispatch();
	const status = useSelector((state: RootState) => state.table.status);
	const items = useSelector((state: RootState) => state.table.items);
	const { visibleData, ...pageControl } = usePagination({
		data: items,
	});

	useEffect(() => {
		if (status === "idle") dispatch(tableActions.fetch());
	}, []);

	const table = (
		<>
			<Table />
			<Pagination pageControl={pageControl} />
		</>
	);

	return (
		<div className="container">
			<Filter />
			{items.length !== 0 ? table : MSG_MAP[status as keyof typeof MSG_MAP]}
		</div>
	);
};

export default App;
