import { TableItem, FilterColumns } from "../types/table";

class Filter {
	static byMore(
		items: TableItem[],
		column: FilterColumns,
		searchValue: string
	) {
		if (column === "name") {
			return items;
		}
		return items.filter((item) => item[column] > parseInt(searchValue));
	}

	static byLess(
		items: TableItem[],
		column: FilterColumns,
		searchValue: string
	) {
		if (column === "name") {
			return items;
		}
		return items.filter((item) => item[column] < parseInt(searchValue));
	}

	static byEqual(
		items: TableItem[],
		column: FilterColumns,
		searchValue: string
	) {
		return items.filter(
			(item) =>
				item[column].toString().toLowerCase() === searchValue.toLowerCase()
		);
	}
	static byContain = (
		items: TableItem[],
		column: FilterColumns,
		searchValue: string
	) =>
		items.filter(
			(item) =>
				item[column]
					.toString()
					.toLowerCase()
					.indexOf(searchValue.toLowerCase()) !== -1
		);
}

export default Filter;
