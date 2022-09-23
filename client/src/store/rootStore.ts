import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import tableReducer from "./table/tableSlice";
import { sagaWatcher } from "./sagas";
import tablePaginationReducer from "./table/tablePaginationSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		table: tableReducer,
		tablePagination: tablePaginationReducer,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagaWatcher);

export default store;
