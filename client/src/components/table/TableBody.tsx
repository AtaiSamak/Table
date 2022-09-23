import React, { useMemo } from "react";
import TbodyItem from "./TableBodyItem";
import { useSelector } from "react-redux";
import { RootState } from "../../types/store";
import { TableItem } from "../../types/table";
import {
	selectTableFilteredItems,
	selectTablePagination,
} from "../../store/table/tableSelectors";

const TableBody = () => {
	const filteredItems = useSelector(selectTableFilteredItems);
	const { visibilityZone } = useSelector(selectTablePagination);

	const tableBodyItems = useMemo(() => {
		return (
			filteredItems &&
			filteredItems
				.slice(...visibilityZone)
				.map(({ id, ...data }: TableItem) => (
					<TbodyItem key={id} data={{ ...data, id }} />
				))
		);
	}, [filteredItems, visibilityZone]);

	return <tbody>{tableBodyItems}</tbody>;
};

export default TableBody;
