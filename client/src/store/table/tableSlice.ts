import { createSlice } from "@reduxjs/toolkit";
import { TableItem } from "../../types/table";
import Filter from "../../helpers/filter";

type State = {
	status: "idle" | "loading" | "succeeded" | "failure";
	items: TableItem[];
	error: null | string;
	filteredItems: TableItem[];
};

const initialState: State = {
	status: "idle",
	items: [],
	error: null,
	filteredItems: [],
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
		filterItems(state, action) {
			const { column, comparison, searchValue } = action.payload;
			if (!searchValue) state.filteredItems = state.items;
			else {
				switch (comparison) {
					case "contain":
						state.filteredItems = Filter.byContain(
							state.items,
							column,
							searchValue
						);
						break;
					case "equal":
						state.filteredItems = Filter.byEqual(
							state.items,
							column,
							searchValue
						);
						break;
					case "less":
						state.filteredItems = Filter.byLess(
							state.items,
							column,
							searchValue
						);
						break;
					case "more":
						state.filteredItems = Filter.byMore(
							state.items,
							column,
							searchValue
						);
						break;
				}
			}
		},
	},
});

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;
