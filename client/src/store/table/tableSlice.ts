import { createSlice } from "@reduxjs/toolkit";
import { ComparisonTypes, FilterColumns, TableItem } from "../../types/table";

type State = {
	status: "idle" | "loading" | "succeeded" | "failure";
	items: TableItem[];
	error: null | string;
	filterOptions: {
		column: FilterColumns;
		comparison: ComparisonTypes;
		searchValue: string;
	};
};

const initialState: State = {
	status: "idle",
	items: [],
	error: null,
	filterOptions: {
		column: "name",
		comparison: "equal",
		searchValue: "",
	},
};

const tableSlice = createSlice({
	name: "table",
	initialState,
	reducers: {
		fetch(state) {
			state.status = "loading";
		},
		success(state, action) {
			state.status = "succeeded";
			state.items = state.items.concat(action.payload.items);
		},
		failure(state, action) {
			state.status = "failure";
			state.items = [];
			state.error = action.payload.error;
		},
		changeFilterOptions(state, action) {
			state.filterOptions.column = action.payload.column;
			state.filterOptions.comparison = action.payload.comparison;
			state.filterOptions.searchValue = action.payload.searchValue;
		},
	},
});

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;
