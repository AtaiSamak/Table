import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginationUtils from "../helpers/pagination";
import { tablePaginationActions } from "../store/table/tablePaginationSlice";
import {
	selectTableFilteredItems,
	selectTablePagination,
} from "../store/table/tableSelectors";
import "../styles/pagination.scss";

const Pagination = () => {
	const dispatch = useDispatch();
	const { pages, currentPage } = useSelector(selectTablePagination);
	const filteredItems = useSelector(selectTableFilteredItems);
	const pagination = PaginationUtils.getArray(pages, currentPage);

	useEffect(() => {
		if (filteredItems.length > 0)
			dispatch(
				tablePaginationActions.calculateNewPaginationOptions({
					itemsLength: filteredItems.length,
				})
			);
	}, [filteredItems]);

	const handleMoveTo = (newPageID: number | string) => () => {
		if (typeof newPageID === "string") return;
		dispatch(tablePaginationActions.moveTo({ newPage: newPageID }));
	};

	const handleMoveNext = () => {
		dispatch(tablePaginationActions.moveNext());
	};

	const handleMovePrev = () => {
		dispatch(tablePaginationActions.movePrev());
	};

	const items = pagination.map((pageID, id) => (
		<div
			key={id}
			className={pageID === currentPage ? "active" : ""}
			onClick={handleMoveTo(pageID)}
		>
			{typeof pageID !== "string" ? pageID + 1 : pageID}
		</div>
	));

	return (
		<div className="pagination">
			<div onClick={handleMovePrev}>&laquo;</div>
			{items}
			<div onClick={handleMoveNext}>&raquo;</div>
		</div>
	);
};

export default Pagination;
