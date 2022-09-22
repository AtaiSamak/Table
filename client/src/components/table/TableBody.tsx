import React, { useMemo } from "react";
import TbodyItem from "./TableBodyItem";
import { useSelector } from "react-redux";
import { RootState } from "../../types/store";
import { TableItem } from "../../types/table";
import Filter from "../../helpers/filter";

const TableBody = () => {
	const items = useSelector((state: RootState) => state.table.items);
	const { comparison, column, searchValue } = useSelector(
		(state: RootState) => state.table.filterOptions
	);

	const filteredItems = useMemo(() => {
		if (!searchValue) return items;
		switch (comparison) {
			case "contain":
				return Filter.byContain(items, column, searchValue);
			case "equal":
				return Filter.byEqual(items, column, searchValue);
			case "less":
				return Filter.byLess(items, column, searchValue);
			case "more":
				return Filter.byMore(items, column, searchValue);
		}
	}, [items, comparison, column, searchValue]);

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
