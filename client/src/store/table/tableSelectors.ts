import { RootState } from "../../types/store";

export const selectTableItems = (state: RootState) => state.table.items;
export const selectTableFilteredItems = (state: RootState) =>
	state.table.filteredItems;
export const selectTableStatus = (state: RootState) => state.table.status;
