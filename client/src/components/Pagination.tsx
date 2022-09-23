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
	const paginationTemplate = PaginationUtils.getTemplate(pages, currentPage);

	useEffect(() => {
		if (filteredItems.length > 0)
			dispatch(
				tablePaginationActions.calculateNewPaginationOptions({
					itemsLength: filteredItems.length,
				})
			);
	}, [filteredItems]);

	const handleMoveTo = (newPageNumber: number | string) => () => {
		if (typeof newPageNumber === "string") return;
		dispatch(tablePaginationActions.moveTo({ newPageNumber }));
	};
	const handleMoveNext = () => dispatch(tablePaginationActions.moveNext());
	const handleMovePrev = () => dispatch(tablePaginationActions.movePrev());

	const items = paginationTemplate.map((pageNumber, id) => (
		<div
			key={id}
			className={pageNumber === currentPage ? "active" : ""}
			onClick={handleMoveTo(pageNumber)}
		>
			{typeof pageNumber !== "string" ? pageNumber + 1 : pageNumber}
			{/* if pageNumber is a string, then it will be "..."(3 dots) */}
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
