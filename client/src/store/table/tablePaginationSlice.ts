import { createSlice } from "@reduxjs/toolkit";

const ROW_LENGTH = 5;

type State = {
	pages: number;
	currentPage: number;
	visibilityZone: [number, number];
};

const initialState: State = {
	pages: 0,
	currentPage: 0,
	visibilityZone: [0, ROW_LENGTH],
};

const calculateVisibleZone = (newPageNumber: number): [number, number] => [
	newPageNumber * ROW_LENGTH,
	newPageNumber * ROW_LENGTH + ROW_LENGTH,
];

const tablePaginationSlice = createSlice({
	name: "tablePagination",
	initialState,
	reducers: {
		calculateNewPaginationOptions(state, action) {
			const { itemsLength } = action.payload;
			state.currentPage = 0;
			state.visibilityZone = calculateVisibleZone(0);
			if (itemsLength > 0) state.pages = Math.ceil(itemsLength / ROW_LENGTH);
		},
		moveTo(state, action) {
			const { newPageNumber } = action.payload;
			if (
				newPageNumber >= 0 &&
				newPageNumber < state.pages &&
				state.currentPage !== newPageNumber
			) {
				state.currentPage = newPageNumber;
				state.visibilityZone = calculateVisibleZone(newPageNumber);
			}
		},
		moveNext(state) {
			const { currentPage, pages } = state;
			if (currentPage < pages - 1) {
				state.currentPage++;
				state.visibilityZone = calculateVisibleZone(state.currentPage);
			}
		},
		movePrev(state) {
			const { currentPage } = state;
			if (currentPage > 0) {
				state.currentPage--;
				state.visibilityZone = calculateVisibleZone(state.currentPage);
			}
		},
	},
});

export const tablePaginationActions = tablePaginationSlice.actions;
export default tablePaginationSlice.reducer;
