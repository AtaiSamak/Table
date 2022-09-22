export type TableItem = {
	id: number;
	name: string;
	amount: number;
	distance: number;
	date: string;
};

export type FilterColumns = "name" | "amount" | "distance";

export type ComparisonTypes = "equal" | "more" | "less" | "contain";
