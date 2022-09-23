import React, { useMemo } from "react";
import TbodyItem from "./TableBodyItem";
import { useSelector } from "react-redux";
import { RootState } from "../../types/store";
import { TableItem } from "../../types/table";
import { selectTableFilteredItems } from "../../store/table/tableSelectors";

const TableBody = () => {
	const filteredItems = useSelector(selectTableFilteredItems);

	const tableBodyItems = useMemo(() => {
		return (
			filteredItems &&
			filteredItems.map(({ id, ...data }: TableItem) => (
				<TbodyItem key={id} data={{ ...data, id }} />
			))
		);
	}, [filteredItems]);

	return <tbody>{tableBodyItems}</tbody>;
};

export default TableBody;
