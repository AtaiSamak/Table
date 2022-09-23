import React from "react";
import {
	selectTableFilteredItems,
	selectTableItems,
	selectTableStatus,
} from "../store/table/tableSelectors";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import usePagination from "../hooks/usePagination";
import Spinner from "./UI/Spinner";
import Table from "./table";

const MSG_MAP = {
	idle: null,
	loading: <Spinner />,
	failure: <h1 className="error">Something goes wrong</h1>,
	successed: <h1>Data not received</h1>,
};

const Content = () => {
	const items = useSelector(selectTableItems);
	const filteredItems = useSelector(selectTableFilteredItems);
	const status = useSelector(selectTableStatus);
	const { visibleData, ...pageControl } = usePagination({
		data: items,
	});

	if (items.length === 0) return MSG_MAP[status as keyof typeof MSG_MAP];
	else if (filteredItems.length === 0) return <h1>Not found</h1>;
	return (
		<>
			<Table />
			<Pagination pageControl={pageControl} />
		</>
	);
};

export default Content;
